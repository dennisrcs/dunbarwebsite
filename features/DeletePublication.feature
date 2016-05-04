Feature: Delete publication
  
  As a administrator
  So that I can delete existing publication without manual tedium 
  
    Background:
      Given these publications exist:
        |article  | contributors                  | journal | year | more_info | pages | link       | publication_picture                                 |
        |Title1   | Dunbar, student1, student2    | science | 2015 | details1  | 6     | google.com | public/uploads/publications/glass_water250.jpg      |

      Given I am logged in as administrator
      Given I am on the home page

Scenario: Delete new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  When I follow "Delete"
 And I go to the Publications page 
  And I should not see "Title1"
