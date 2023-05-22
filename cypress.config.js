const { verifyDownloadTasks } = require('cy-verify-downloads');
const { defineConfig } = require ('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/reporter-config.json'
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 350000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    form: true


  }
})
