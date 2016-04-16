Feature: Edit publication
  
  As a administrator
  So that I can edit existing publication wihtout manual tedium 
  
    Background:
      Given I am recently logged in 
      Given I am on the Home page

Scenario: Edit new publication (happy path)
  When I follow "Publications"
  Then I should be on the Publications page
  Then I should see "Edit" by a publication
  When I press "Edit"
  Then I should be on the Edit Publication page 
  When I fill in "Article title" with "Cellular Toxicity Induced Through Photorelease of a Caged Bioactive Molecule: Design of Potential Dual-Action Ru(II) Complexe"
  And I fill in "Contributors" with "Mark A. Sgambellone, Amanda David, Robert N. Garer, Kim R. Dunbar, and Claudia Turro"
  And I fill in "Journal title" with "J. Am. Chem. Soc."
  And I fill in "Year pbllished" with "2013"
  And I fill in "Additional information" with "135"
  And I fill in "Pages" with "11274-11282"
  And I fill in "URL" with "http://pubs.acs.org/doi/abs/10.1021/ja4045604"
  And I press "Update Publication"
Then I should be on the Publications page
And I should see the edited publication
