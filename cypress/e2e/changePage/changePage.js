// libs
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
// utils
import { getDataCy } from "../../utils";

// Arrange
const url = "/";
const currentPage = "current-page";
const nextButtonLabel = "F3";
const prevButtonLabel = "F1";
const nextButtonKeyCode = 114;
const prevButtonKeyCode = 112;
const width = 1920;
const height = 1080;
// Test click next button
Given("I click next page", () => {
  // Action
  cy.viewport(width, height);
  cy.visit(url);
  cy.contains(nextButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I click next page two time", () => {
  // Action
  cy.contains(nextButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I click next page three time", () => {
  // Action
  cy.contains(nextButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
// Test click prev button
Given("I click prev page", () => {
  // Action
  cy.contains(prevButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I click prev page two time", () => {
  // Action
  cy.contains(prevButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I click prev page three time", () => {
  // Action
  cy.contains(prevButtonLabel).click();
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
// Test Press f3
Given("I press f3", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: nextButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I press f3 two time", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: nextButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I press f3 three time", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: nextButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});

Given("I press f1", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: prevButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I press f1 two time", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: prevButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
Given("I press f1 three time", () => {
  // Action
  cy.get("body").trigger("keydown", { keyCode: prevButtonKeyCode });
});
Then("I see {string} in the title", (title) => {
  // Assert
  cy.get(getDataCy(currentPage)).contains(title);
});
