Feature: login
  As a lab member
  so that I can access private content
  I want to login with my credentials 
  
Background: I am on the home page
  Given this user exists
  | byter | byters606@googlegroups.com | byter123 |
  Given I am on the home page
  
Scenario: Log in to the website (happy path)
    When I follow "Login"
    Then I should be on the Login page
    When I fill in "username" with "byter"
    And I fill in "password" with "byter123"
    And I press "Log in"
    Then I should see a flash "Welcome byter!"

Scenario: Log in to the website (sad path)
    When I follow "Login"
    Then I should be on the Login page
    When I fill in "username" with "joe"
    And  I fill in "password" with "doe"
    And I press "Log in"
    Then I should see "Invalid username/password combination"
    
    #separate this into all possible scenarios (good username, wrong password and vice versa).
    # use the same message though! beware of hackers!


