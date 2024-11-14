import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://jamesroberts-trial.interactgo.com/',
  },
  video: true,
  retries: {
      runMode: 1,
      openMode: 1
    }
});
