import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./specs",
  fullyParallel: false,
  forbidOnly: true,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://target:8080",
    extraHTTPHeaders: {
      Accept: "application/json, text/plain",
    },
  },
});
