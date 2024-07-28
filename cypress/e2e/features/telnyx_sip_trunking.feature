Feature: Telnyx "SIP Trunking" page

  Scenario: Open the "SIP Trunking pricing" page
    Given I open the "Telnyx SIP Trunking" page
    When I scroll the page down to the "See our SIP trunking pricing" section
    And I click on the "SEE PRICING" button
    Then I should see the "SIP Trunking pricing" page

  Scenario: Check portal link
    Given I open the "Telnyx SIP Trunking" page
    When I click on the "portal" link
    Then I should see the "SIGN UP" form

  Scenario: Change country
    Given I open the "Telnyx SIP Trunking" page
    When I scroll the page down to the "See our SIP trunking pricing " section
    And I click on the "SEE PRICING" button
    And I scroll the page down to the "Pay as you go" section
    And I select the "Germany" item from the country drop-down
    Then I should see the "SIP Trunking pricing for Germany" header
