Feature: Edit an existing group info
  
  As a administrator
  So that I can edit existing group information wihtout manual tedium 
  
     Background:   
        Given this group info exist:
            |title            | is_restricted   | file_path |
            |Info for testing | false  | file_path |
        Given I am logged in as administrator
        Given I am on the home page
      
Scenario: Edit group info
  Then I should have an active session
  When I follow "Group Info"
  Then I should be on the Group Info page
  When I follow "Edit"
  Then I should see "Edit Group Info"
  When I fill in "Group info title" with "newinfo"
  And I upload a group file from "/public/uploads/cv/cv.pdf"
  And I press "Update Group Info"
  Then I should be on the Group Info page
  And I should see "newinfo" 