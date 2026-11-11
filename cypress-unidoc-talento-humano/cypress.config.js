const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://nova.uniautonoma.edu.co',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1366,
    viewportHeight: 768,
  },
  video: true,
  screenshotOnRunFailure: true,
});
