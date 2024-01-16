const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    defaultCommandTimeout:40000,
    viewportWidth: 1366,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
