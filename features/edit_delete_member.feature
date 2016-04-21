Feature: Edit/Delete Member
  
  As a administrator
  So that I can edit memer's info and/or delete members wihtout manual tedium 
  
    Background:
      Given I am logged in

Scenario: Edit member info  
  When I am on my personal page
  #Then I should see "Edit profile"  
  When I follow "Edit profile"
  Then I should be on the Edit Member page 
  When I fill in "name" with "newmember123"
  And I fill in "position" with "grad123"
  And I fill in "Username" with "NewMember"
  And I fill in "E-mail" with "newmember123@tamu.edu"
  And I fill in "Telephone" with "999-99-99"
  And I fill in "Fax" with "999-999"
  And I fill in "Previous affiliation" with "Last school"
  And I fill in "Bio" with "here is the additional info"
  And I fill in "Buildings" with "HRBB"
  And I fill in "Picture" with "profile_picture123.jpg"
  And I fill in "Curriculum Vitae" with "cv_123.pdf"
  And I press "Save Member"
  Then I should return to the profile Member page
  And I should see all the new information

Scenario: Delete member  
  Then I should see a button "Delete profile"  
  When I follow "Delete profile"
  Then I should see a message "Are you sure?"
  When I click on "OK"
  Then I should return to the People age
  And I should not see the deleted member