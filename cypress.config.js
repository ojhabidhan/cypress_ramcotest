const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Change this to your app URL if you want baseUrl
    baseUrl: "https://aimms-sgima.train.tc.canada.ca/extui/hub/",  
    // Where your test files are located
    specPattern: "cypress/e2e/**/*.js",
    // Support file (optional)
    supportFile: "cypress/support/e2e.js",
  },
});
