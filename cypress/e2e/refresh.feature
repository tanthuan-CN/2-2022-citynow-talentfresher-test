Feature: Refresh button

  I want to refresh room
  
  @focus
  Scenario: Click refresh
    Given I click refresh
    Then room status should change randomly

    Given I press f5
    Then room status should change randomly