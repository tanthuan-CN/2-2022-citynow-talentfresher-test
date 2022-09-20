// libs
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
// utils
import { getDataCy } from "../../utils";

// Arrange
const url = "/";
const hideCheckoutButtonLabel = "F4";
const width = 1920;
const height = 1080;
const roomContainer = "room-container";
// Test click hide checkout button
Given("I click hide checkout", () => {
  // Action
  cy.viewport(width, height);
  cy.visit(url);
  cy.contains(hideCheckoutButtonLabel).click();
});
Then("checkout room should not visible", () => {
  // Assert
  cy.get(getDataCy(roomContainer))
    .filter((index, e) => Cypress.$(e).css("background").includes("rgb(183, 154, 91)"))
    .and("have.css", "visibility")
    .should("include", "hidden");
});
Given("I click hide checkout again", () => {
  // Action
  cy.contains(hideCheckoutButtonLabel).click();
});
Then("checkout room should be visible", () => {
  // Assert
  cy.get(getDataCy(roomContainer))
    .filter((index, e) => Cypress.$(e).css("background").includes("rgb(183, 154, 91)"))
    .and("have.css", "visibility")
    .should("include", "visible");
});
