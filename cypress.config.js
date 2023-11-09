const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory : 50,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'http://127.0.0.1:8080/cypress/',

    
  },
});
