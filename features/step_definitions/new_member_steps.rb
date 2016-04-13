Then(/^I should see a button "([^"]*)"$/) do |arg1|
  page.has_content?("Add new member")
end

#When(/^I click on  "([^"]*)"$/) do 
 # visit '/members/new'
#end

#When (/^I go to Add new member$/) do
#    visit '/members/new'
#end