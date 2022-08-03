const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://automationpractice.com/index.php',
    video: false,
    watchForFileChanges: false,
    viewportHeight: 600,
    viewportWidth: 800,
    defaultCommandTimeout: 6000,
  },
});
