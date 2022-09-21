Feature: Change language button

  I want to change language
  
  @focus
  Scenario: Click change language
    Given I click change language
    Then language should change
    Given I click change language again
    Then language should change back to default

    Given I press f12
    Then language should change like click button
    Given I press f12 again
    Then language should change back to default like click button

    