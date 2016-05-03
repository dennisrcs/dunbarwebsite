Feature: Delete publication
  
  As a administrator
  So that I can delete existing publication wihtout manual tedium 
  
    Background:
      Given I am recently logged in 
      Given I am on the Home page

Scenario: Delete new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  #Then I should see "Delete"
  When I follow "Delete"
  And I press "OK"
  Then I should be on the Publications page 
  And I should see "Title1"
