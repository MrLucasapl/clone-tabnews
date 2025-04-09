import database from "infra/database";
const { default: orchestrator } = require("tests/orchestrator");

beforeAll(async ()=>{
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public")
});

test('POST to /api/v1/migrations should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/migrations', {
    method: 'POST',
  });
  expect(response.status).toBe(201);

  const responseBady = await response.json();

  expect(Array.isArray(responseBady)).toBeTruthy();
  expect(responseBady.length).toBeGreaterThan(0);

  const response1 = await fetch('http://localhost:3000/api/v1/migrations', {
    method: 'POST',
  });
  expect(response1.status).toBe(200);

  const response1Bady = await response1.json();

  expect(Array.isArray(response1Bady)).toBeTruthy();
  expect(response1Bady.length).toBe(0);
});
