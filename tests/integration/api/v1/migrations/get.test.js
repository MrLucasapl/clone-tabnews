import database from 'infra/database';
const { default: orchestrator } = require('tests/orchestrator');

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query('drop schema public cascade; create schema public');
});

test('GET to /api/v1/migrations should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/migrations');
  expect(response.status).toBe(200);

  const responseBady = await response.json();

  expect(Array.isArray(responseBady)).toBeTruthy();
  expect(responseBady.length).toBeGreaterThan(0);
});
