import migrationRunner from 'node-pg-migrate';
import { join } from 'node:path';
import database from 'infra/database';

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();
  const defaultMigrationOptios = {
    dbClient: dbClient,
    dryRun: true,
    dir: join('infra', 'migrations'),
    direction: 'up',
    verbose: true,
    migrationsTable: 'pgmigrations',
  };

  if (request.method === 'GET') {
    const pendingMigations = await migrationRunner(defaultMigrationOptios);
    await dbClient.end();
    return response.status(200).json(pendingMigations);
  }

  if (request.method === 'POST') {
    const migratedMigations = await migrationRunner({
      ...defaultMigrationOptios,
      dryRun: false,
    });

    await dbClient.end();
    
    if (migratedMigations.length > 0) {
      return response.status(201).json(migratedMigations);
    }

    return response.status(200).json(migratedMigations);
  }

  return response.status(405).end();
}
