Feature: Broadleaf Login feature

  Scenario: AmazonLogin Test Scenario

    Given User is on amazon appplicaton
    When title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more
    And User clicks on Sign in link
    When User enters username
    And  User clicks on Continue
    When User enters password
    And   User clicks on Sign in button
    Then User is on homepage

