Feature: login
  As a lab member
  so that I can access private content
  I want to login with my credentials 
  
Background: 
  Given I exist as a user
  Given I am on the home page
  
Scenario: Log in to the website (happy path)
    When I follow "Login"
    Then I should be on the Login page
    When I fill in "username" with "byter"
    And I fill in "password" with "byter123"
    And I press "Log in"
    Then I should see a message "Welcome byter!"
    And I should see "Logout"

Scenario: Log in with wrong username (sad path)
    When I follow "Login"
    Then I should be on the Login page
    When I fill in "username" with "joe"
    And  I fill in "password" with "byter123"
    And I press "Log in"
    Then I should see "Invalid username/password combination"
    
Scenario: Login with wrong password (sad path)
    When I follow "Login"
    Then I should be on the Login page
    When I fill in "username" with "byter"
    And  I fill in "password" with "doe"
    And I press "Log in"
    Then I should see "Invalid username/password combination"
    


