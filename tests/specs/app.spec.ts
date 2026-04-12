import { test, expect } from "@playwright/test";

test("GET / returns 'ok'", async ({ request }) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toBe("ok");
});

test("GET /health is healthy with a non-negative uptime", async ({ request }) => {
  const response = await request.get("/health");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.status).toBe("ok");
  expect(typeof body.uptime_seconds).toBe("number");
  expect(body.uptime_seconds).toBeGreaterThanOrEqual(0);
  expect(typeof body.started_at).toBe("string");
});

test("GET /version reports 0.1.0", async ({ request }) => {
  const response = await request.get("/version");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.version).toBe("0.1.0");
});
