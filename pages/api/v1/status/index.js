import database from 'infra/database.js';

async function status(request, response) {
  const updateAt = new Date().toISOString();

  /* const databaseVersion = await database.query('SHOW server_version');
  const version = databaseVersion.rows[0].server_version;

  const databaseMaxConnections = await database.query('SHOW max_connections');
  const maxConnections = databaseMaxConnections.rows[0].max_connections; */

  const dataName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = await database.query({
    text: 'SELECT count(*)::int FROM pg_stat_activity WHERE datname= $1;',
    values: [dataName],
  });

  const openedConnections = databaseOpenedConnections.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        //version: version,
        //max_connections: Number(maxConnections),
        opened_connections: Number(openedConnections),
      },
    },
  });
}

export default status;