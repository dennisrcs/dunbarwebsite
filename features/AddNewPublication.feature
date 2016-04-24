Feature: Add new publication
  
  As a administrator
  So that I can add new publication wihtout manual tedium 
  
    Background:
      Given I am logged in as administrator
      Given I am on the home page

Scenario: Add new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  Then I should see a message "Add new Publication"  
  When I follow "Add new Publication"
  Then I should be on the Create New Publication page 
  When I fill in "Article title" with "Cellular Toxicity Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"
  And I fill in "Contributors" with "Mark A. Sgambellone, Amanda David, Robert N. Garer, Kim R. Dunbar, and Claudia Turro"
  And I fill in "Journal title" with "J. Am. Chem. Soc."
  And I fill in "Year published" with "2013"
  And I fill in "Additional information" with "135"
  And I fill in "Pages" with "11274-11282"
  And I fill in "URL" with "http://pubs.acs.org/doi/abs/10.1021/ja4045604"
  And I press "Create Publication"
Then I should be on the Publications page
And I should see "Cellular Toxicity Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"

Scenario: Add new publication without Article title (sad path)
  When I follow "Publications"
  Then I should be on the Publications page
  Then I should see "Add new Publication"  
  When I follow "Add new Publication"
  Then I should be on the Create New Publication page 
  When I fill in "Contributors" with "Mark A. Sgambellone, Amanda David, Robert N. Garer, Kim R. Dunbar, and Claudia Turro"
  And I fill in "Journal title" with "J. Am. Chem. Soc."
  And I fill in "Year published" with "2013"
  And I fill in "Additional information" with "135"
  And I fill in "Pages" with "11274-11282"
  And I fill in "URL" with "http://pubs.acs.org/doi/abs/10.1021/ja4045604"
  And I press "Create Publication"
  Then I should see "DOI"
