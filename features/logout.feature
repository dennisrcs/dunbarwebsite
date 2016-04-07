Feature: logout of the session
  
  As a logged in user 
  So that I can protect my account from unauthorized access
  I wan to be able to log out
  
  Background:
    Given I am logged in 
    
Scenario: Correct Logging out
When I logout
Then I should be on the home page
And I should see a flash "Successfully logging out"
When I return to the site
Then I should be logged out