import migrationRunner from 'node-pg-migrate';
import { join } from 'node:path';
import database from 'infra/database';

export default async function migrations(request, response) {
  const allowedMethods = ['GET', 'POST'];
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).send(`Método ${request.method} não permitido`);
  }

  let dbClient;

  try {
    dbClient = await database.getNewClient();
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
      return response.status(200).json(pendingMigations);
    }

    if (request.method === 'POST') {
      const migratedMigations = await migrationRunner({
        ...defaultMigrationOptios,
        dryRun: false,
      });

      if (migratedMigations.length > 0) {
        return response.status(201).json(migratedMigations);
      }

      return response.status(200).json(migratedMigations);
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
