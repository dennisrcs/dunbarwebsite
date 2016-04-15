Feature: Edit publication
  
  As a administrator
  So that I can edit existing publication wihtout manual tedium 
  
    Background:
      Given I am recently logged in 
      Given I am on the Home page

Scenario: Edit new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  Then I should see "Edit" by a publication
  When I press "Edit"
  Then I should be on the the Publication page 
  And I should not see the publication
