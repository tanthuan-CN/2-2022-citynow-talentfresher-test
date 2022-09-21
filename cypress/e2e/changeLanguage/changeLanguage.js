// libs
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
// utils
import { getDataCy } from "../../utils";

// Arrange
const url = "/";
const changeLanguageButtonLabel = "F12";
const width = 1920;
const height = 1080;
const roomStatus = "room-status";
const viLabel = "Trống";
const enLabel = "VACANT";
const changeLanguageButtonKeyCode = 123;
// Test click hide change language button
Given("I click change language", () => {
  // Action
  cy.viewport(width, height);
  cy.visit(url);
  cy.contains(changeLanguageButtonLabel).click();
});
Then("language should change", () => {
  // Assert
  cy.get(getDataCy(roomStatus)).contains(viLabel);
});

Given("I click change language again", () => {
  // Action
  cy.contains(changeLanguageButtonLabel).click();
});
Then("language should change back to default", () => {
  // Assert
  cy.get(getDataCy(roomStatus)).contains(enLabel);
});
// Test press button

Given("I press f12", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: changeLanguageButtonKeyCode });
});
Then("language should change like click button", () => {
  // Assert
  cy.get(getDataCy(roomStatus)).contains(viLabel);
});

Given("I press f12 again", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: changeLanguageButtonKeyCode });
});
Then("language should change back to default like click button", () => {
  // Assert
  cy.get(getDataCy(roomStatus)).contains(enLabel);
});
