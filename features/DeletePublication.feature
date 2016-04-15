Feature: Delete publication
  
  As a administrator
  So that I can delete existing publication wihtout manual tedium 
  
    Background:
      Given I am recently logged in 
      Given I am on the Home page

Scenario: Delete new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  Then I should see "Delete" by a publication
  When I press "Delete"
  Then I should be on the Publication page 
  And I should not see the publication
