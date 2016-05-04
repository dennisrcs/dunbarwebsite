Feature: Edit publication
  
  As a administrator
  So that I can edit existing publication wihtout manual tedium 
  
     Background:
      Given these publications exist:
        |article  | contributors                  | journal | year | more_info | pages | link       | publication_picture                                 |
        |Title1   | Dunbar, student1, student2    | science | 2015 | details1  | 6     | google.com | public/uploads/publications/glass_water250.jpg      |
      Given I am logged in as administrator
      Given I am on the home page

Scenario: Edit new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  When I follow "Edit"
  Then I should see "Edit Publication" 
  When I fill in "Article title" with "Cellular Toxicity Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"
  And I fill in "Contributors" with "Mark A. Sgambellone, Amanda David, Robert N. Garer, Kim R. Dunbar, and Claudia Turro"
  And I fill in "Journal title" with "J. Am. Chem. Soc."
  And I fill in "Year published" with "2013"
  And I fill in "Additional information" with "135"
  And I fill in "Pages" with "11274-11282"
  And I fill in "URL" with "http://pubs.acs.org/doi/abs/10.1021/ja4045604"
  And I press "Update Publication"
  Then I should be on the Publications page
  And I should see "Cellular Toxicity Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"


# cucumber is not able to catch the exceptions for the sad path because they are not included in controllers for Publications.
##############################################################################################################################

# Scenario: Edit new publication (sad path) 
#   When I follow "Publications"
#   Then I should be on the Publications page
#   When I follow "Edit"
#   Then I should see "Edit Publication" 
#   When I fill in "Article title" with "Cellular Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"
#   And I fill in "Contributors" with ""
#   And I fill in "Journal title" with "J. Am. Chem. Soc."
#   And I fill in "Year published" with "2013"
#   And I fill in "Additional information" with "135"
#   And I fill in "Pages" with "11274-11282"
#   And I fill in "URL" with "http://pubs.acs.org/doi/abs/10.1021/ja4045604"
#   And I press "Update Publication"
#   Then I should see "Edit Publication"
  
