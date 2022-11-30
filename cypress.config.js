const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    defaultCommandTimeout:10000,
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      }
  }
});
