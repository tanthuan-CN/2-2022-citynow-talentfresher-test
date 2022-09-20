Feature: Next page button

  I want to change page
  
  @focus
  Scenario: Click change page
    Given I click next page
    Then I see "PAGE: 2/3" in the title
    Given I click next page two time
    Then I see "PAGE: 3/3" in the title
    Given I click next page three time
    Then I see "PAGE: 3/3" in the title

    Given I click prev page
    Then I see "PAGE: 2/3" in the title
    Given I click prev page two time
    Then I see "PAGE: 1/3" in the title
    Given I click prev page three time
    Then I see "PAGE: 1/3" in the title

    Given I press f3
    Then I see "PAGE: 2/3" in the title
    Given I press f3 two time
    Then I see "PAGE: 3/3" in the title
    Given I press f3 three time
    Then I see "PAGE: 3/3" in the title

    Given I press f1
    Then I see "PAGE: 2/3" in the title
    Given I press f1 two time
    Then I see "PAGE: 1/3" in the title
    Given I press f1 three time
    Then I see "PAGE: 1/3" in the title
    