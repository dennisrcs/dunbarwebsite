Feature: Edit/Delete Member
  
  As a administrator
  So that I can edit memer's info and/or delete members wihtout manual tedium 
  
    Background:
<<<<<<< HEAD
      Given this user exists:
        |username |email           | password | :password_confirmation | is_admin | activated | activated_at  | reset_sent_at |
        | myname  |myname@email.com| myname123| myname123              | false    | true      | Time.zone.now | Time.zone.now |
    Given this member exists for user "myname":
  
        | name     | position | telephone | fax    | researcherid | previous_affiliation | bio            | building | office | avatar_path                      | cv_path                  | is_current _member | is_listed |
        | myname | grad     | 9999999   | 999999 | 1234         | some college         | hey! I am here | HRBB     |  407   | public/uploads/images/bender.png | public/uploads/cv/cv.pfd | true               | true      |
        And I am logged in as administrator
Scenario: Edit member info 
  When I follow "People"
  Then I should be on the People page
  When I click on the picture for "myname"
  Then I should be on the personal page for "myname"
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
=======
      Given I am logged in 
      Given I am on any profile Member page

Scenario: Edit member info  
Then I should see a button "Edit profile"  
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
>>>>>>> f96228d98e38e23391725238383c9b3a9042e060

Scenario: Delete member  
Then I should see a button "Delete profile"  
When I follow "Delete profile"
Then I should see a message "Are you sure?"
When I click on "OK"
Then I should return to the People age
And I should not see the deleted member