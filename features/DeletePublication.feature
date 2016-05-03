Feature: Delete publication
  
  As a administrator
  So that I can delete existing publication wihtout manual tedium 
  
    Background:
      Given I am recently logged in 
      Given I am on the Home page

Scenario: Delete new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
<<<<<<< HEAD
  #Then I should see "Delete"
  When I follow "Delete"
  And I press "OK"
  Then I should be on the Publications page 
  And I should see "Title1"
=======
  Then I should see "Delete" by a publication
  When I press "Delete"
  Then I should be on the Publication page 
  And I should not see the publication
>>>>>>> 353159568d933b2729459602b9b96a8858d56599
