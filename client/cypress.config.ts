import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    // todo: retrieve baseUrls directly from vite
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
