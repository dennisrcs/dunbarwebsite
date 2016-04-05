Feature: logout of the session
  
  Background:
    Given I am logged in
    
Scenario: Correct Logging out
When I follow "Logout"
Then my session should end   #be on the home page
And I should be on the home page
And I should see a flash "Successfully logging out"
When I go back    #is it a back button or a link?
Then I should not have an active session

Scenario: session timeout 
When I am inactive for more than 5 minutes
Then my session should end
And I should see message "The session has expired"
