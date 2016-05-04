Feature: Edit/Delete Member
  
  As a administrator
  So that I can edit member's info and/or delete members wihtout manual tedium 
  
    Background:
      Given this user exists:
        |username |email           | password | :password_confirmation | is_admin | activated | activated_at  | reset_sent_at |
        | myname  |myname@email.com| myname123| myname123              | false    | true      | Time.zone.now | Time.zone.now |

      Given this member exists for user "myname":
  
        | name   | position | telephone | fax    | researcherid | previous_affiliation | bio            | building | office | avatar_path                      | cv_path                  | is_current _member | is_listed |
        | myname | PhD     | 9999999   | 999999 | 1234         | some college         | hey! I am here | HRBB     |  407   | public/uploads/images/bender.png | public/uploads/cv/cv.pfd | true               | true      |
    
      Given I am logged in as administrator
    
Scenario: Edit member info 
  When I go to the personal page for "myname"
  When I follow "Edit"
  Then I should be on the Edit Member page for "myname"
  When I fill in "name" with "myname"
  And I fill in "position" with "grad123"
  And I fill in "Username" with "NewMember"
  And I fill in "E-mail" with "newmember123@tamu.edu"
  And I fill in "Telephone" with "999-99-99"
  And I fill in "Fax" with "999-999"
  And I fill in "Previous affiliation" with "Last school"
  And I fill in "bio" with "here is the additional info"
  And I fill in "building" with "HRBB"
  And I press "Save Member"
  Then I should be on the personal page for "myname"
  And I should see "grad123"
  And I should not see "PhD"

Scenario: Delete member  
When I go to the personal page for "myname"  
When I follow "Delete"
Then I should be on the People page
And I should not see "myname"