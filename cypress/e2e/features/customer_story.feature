Feature: Customer story

  Scenario: Proceed to the "Customer stories" page
    Given I open the "Telnyx" website
    When I click on the hamburger menu
    And I click on the "Resources" drop-down
    And I click on the "Customer Stories" item
    Then I should see the "Customer Stories" page

  Scenario: Open customer story
    Given I open the "Telnyx customer stories" page
    When I scroll page down to the "Cosmo" section
    And I click on the "Read customer story" link
    Then I should see the "COSMO" header

  Scenario: Explore other customer story
    Given I open the "Telnyx Cosmo customer stories" page
    When I scroll page down to the "BEST Canada Energy" section
    And I click on the "BEST Canada Energy" section
    Then I should see the "BEST Canada Energy" header
