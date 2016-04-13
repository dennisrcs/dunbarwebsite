Feature: Add new member
  
  As a administrator
  So that I can add new members wihtout manual tedium 
  
    Background:
      Given I am logged in 
      Given I am on the People page

Scenario: Add new member  
Then I should see a button "Add new member"  
When I follow  "Add new member"
Then I should be on the the Create New Memeber page 
When I fill in "Full Name" with "newmember123"
And I fill in "Position" with "grad123"
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
Then I should be on the Publications page
And I should see "Full Name" 