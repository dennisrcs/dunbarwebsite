Then(/^I should see a button "([^"]*)"$/) do |arg1|
  page.has_content?("Add new publication")
end