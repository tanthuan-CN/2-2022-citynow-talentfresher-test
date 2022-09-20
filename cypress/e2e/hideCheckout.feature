Feature: Hide checkout button

  I want to hide checkout room
  
  @focus
  Scenario: Click hide checkout
    Given I click hide checkout
    Then checkout room should not visible
    Given I click hide checkout again
    Then checkout room should be visible