const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Change this to your app URL if you want baseUrl
    baseUrl: "https://aimms-sgima.train.tc.canada.ca/extui/",  
    // Where your test files are located
    specPattern: "cypress/e2e/**/*.js",
    // Support file (optional)
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 10000,     // 10 seconds for all commands (get, click, type, etc.)
    pageLoadTimeout: 10000,           // 10 seconds for cy.visit() page load
    requestTimeout: 10000,            // for cy.request()
    responseTimeout: 10000,           // for cy.wait() on XHRs
  },
});
