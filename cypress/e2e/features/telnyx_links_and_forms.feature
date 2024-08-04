Feature: Telnyx links and forms

  Background: Open "Telnyx" website
    Given I open the "Telnyx" website

  Scenario: Redirect to social media page
    When I scroll the homepage down to the "social media links" section
    And I click on "LinkedIn" link
    Then I should see "Telnyx LinkedIn" page

  Scenario: Redirect to the Telnyx shop
    When I click on the hamburger menu
    And I click on the "Shop" item
    Then I should see "Telnyx shop" page

  Scenario: Display "Talk to an expert" form
    When I click on the hamburger menu
    And I click on the "Products" drop-down
    And I click on the "SMS API" item
    And I click on a "TALK TO AN EXPERT" button
    Then I should see the "TALK TO AN EXPERT" form

  Scenario: Check "Operator Connect" link
    When I click on the hamburger menu
    And I click on the "Products" drop-down
    And I click on the "Microsoft Teams" item
    And I click on "Operator Connect" link
    Then I should see "BENEFITS OF OPERATOR CONNECT" header

  Scenario: Proceed to the developers Telnyx site
    When I scroll the homepage down to the "Use a platform built by developers, for developers" section
    And I click on a "EXPLORE OUR DOCS" button
    Then I should see "developers Telnyx" page