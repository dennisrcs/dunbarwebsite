Feature: Add new member
  
  As a administrator
  So that I can add new members wihtout manual tedium 
  
    Background:
      Given I am logged in as administrator
      
Scenario: Add new member
  Then I should have an active session
  When I follow "People"
  Then I should be on the People page
  And I should see a message "Add new member"  
  When I choose to add new member
  Then I should be on the Create New Member page 
  When I fill in "name" with "newmember123"
  And I fill in "position" with "grad123"
  And I fill in "Username" with "NewMember"
  And I fill in "E-mail" with "newmember123@tamu.edu"
  And I fill in "Telephone" with "999-99-99"
  And I fill in "Fax" with "999-999"
  And I fill in "Previous affiliation" with "Last school"
  And I fill in "bio" with "here is the additional info"
  And I fill in "Building" with "HRBB"
  And I upload a picture from "/public/uploads/images/bender.png"
  And I upload a file from "/public/uploads/cv/cv.pdf"
  And I press "Save Member"
  Then I should be on the member page