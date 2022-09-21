/* eslint-disable cypress/no-unnecessary-waiting */
// libs
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Arrange
const url = "/";
const refreshButtonLabel = "F5";
const width = 1920;
const height = 1080;
const waitTime = 2000;
const refreshButtonKeyCode = 116;
// Test click hide checkout button
Given("I click refresh", () => {
  // Action
  cy.viewport(width, height);
  cy.visit(url);
  cy.wait(waitTime);
  cy.contains(refreshButtonLabel).click();
});
Then("room status should change randomly", () => {
  // Assert
});
// Test press f5
Given("I press f5", () => {
  // Action
  cy.wait(waitTime);
  cy.get("body").trigger("keydown", { keyCode: refreshButtonKeyCode });
});
