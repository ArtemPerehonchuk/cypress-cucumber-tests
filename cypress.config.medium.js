const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 768,
    viewportHeight: 1024,
  },
});