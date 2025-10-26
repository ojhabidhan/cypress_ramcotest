const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://aimms-sgima.train.tc.canada.ca/extui/', // your actual ERP URL
    defaultCommandTimeout: 60000,        // All cy.get/cy.contains will retry up to 60s
    pageLoadTimeout: 60000,              // cy.visit() will wait up to 60s
    viewportWidth: 1440,
    viewportHeight: 900,
    specPattern: 'cypress/e2e/**/*.spec.js' 
  }
});
