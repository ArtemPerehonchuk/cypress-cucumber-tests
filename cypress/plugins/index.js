const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cucumber.addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', cucumber.createPreprocessor());
      return config;
    },
  },
});