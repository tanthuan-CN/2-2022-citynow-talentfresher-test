const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.{feature,features}",
    baseUrl: "http://localhost:3000"
  }
});
