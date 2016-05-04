Feature: Add new group info
  
  As a administrator
  So that I can add new group nformation wihtout manual tedium 
  
    Background:
      Given I am logged in as administrator
      
Scenario: Add new group info
  Then I should have an active session
  When I follow "Group Info"
  Then I should be on the Group Info page
  And I should see "Add new group info"  
  When I choose to add new group info
  Then I should be on the Create New Group Info page 
  When I fill in "Group info title" with "newinfo"
  And I upload a group file from "/public/uploads/cv/cv.pdf"
  And I press "Create Group Info"
  Then I should be on the Group Info page
  And I should see "newinfo" 