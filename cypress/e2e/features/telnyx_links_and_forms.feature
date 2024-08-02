Feature: Telnyx links and forms

  Scenario: Redirect to social media page
    Given I open the "Telnyx" website
    When I scroll the page down to the "social media links" section
    And I click on the "LinkedIn" link
    Then I should see the "Telnyx LinkedIn" page

  Scenario: Redirect to the Telnyx shop
    Given I open the "Telnyx" website
    When I click on the hamburger menu
    And I click on the "Shop" item
    Then I should see the "Telnyx shop" page

  Scenario: Display "Talk to an expert" form
    Given I open the "Telnyx" website
    When I click on the hamburger menu
    And I click on the "Products" drop-down
    And I click on the "SMS API" item
    And I click on the "TALK TO AN EXPERT" button
    Then I should see the "TALK TO AN EXPERT" form

  Scenario: Check "Operator Connect" link
    Given I open the "Telnyx" website
    When I click on the hamburger menu
    And I click on the "Products" drop-down
    And I click on the "Microsoft Teams" item
    And I click on the "Operator Connect" link
    Then I should see the "BENEFITS OF OPERATOR CONNECT" header

  Scenario: Proceed to the developers Telnyx site
    Given I open the "Telnyx" website
    When I scroll the page down to the "Use a platform built by developers, for developers" section
    And I click on the "EXPLORE OUR DOCS" button
    Then I should see the "developers Telnyx" page