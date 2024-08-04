Feature: Resources page

  Scenario: Proceed to the resources page
    Given I open the "Telnyx" website
    When I click on the hamburger menu
    And I click on the "Resources" drop-down
    And I click on the "Blog" item
    Then I should see the "Resources" page

  Scenario Outline: Search a word
    Given I open a "Telnyx resources" page
    When I type "<word>" into the "Search" input field
    And I press "Enter" on the keyboard
    Then I should see the "Search results for '<word>'" section
      Examples:
        | word    |
        | panda   |
        | monkey  |
        | dolphin |

  Scenario: Proceed to the flow page
    Given I open a "Telnyx resources" page
    When I scroll the page down to the "flow" button
    And I click on "flow" button
    Then I should see "Introducing Telnyx Flow for no-code workflow automation" header

  Scenario: Back to blog
    Given I open a "Telnyx flow-announcement" page
    When I click on "Back to blog" button
    Then I should see the "Resources" page
