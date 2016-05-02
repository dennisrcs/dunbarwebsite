def create_user
    @user = FactoryGirl.create(:user)
end

######################################################################
## Background
######################################################################


Given (/^I am logged in$/) do
    create_user
    visit '/login'
    fill_in "username", :with => @user[:username]
    fill_in "password", :with => @user[:password]
    click_button "login-form-button"
end

Given (/^I exist as a user$/) do
    create_user
end

<<<<<<< HEAD
Given (/^these publications exist:$/) do |table|
    table.hashes.each do |publication|
        Publication.create(publication)
    end
end

Given (/^this group info exist:$/) do |table|
    table.hashes.each do |group_info|
        GroupInfo.create(group_info)
    end
end
=======
>>>>>>> 353159568d933b2729459602b9b96a8858d56599
##########################################################################
## Action
#########################################################################
When (/^I logout$/) do
    visit '/logout'
end

When (/^I return to the site$/) do
   visit '/'
end

<<<<<<< HEAD
When (/^I choose to add new member$/) do
    visit '/members/new'
end

When(/^I choose to add new group info$/) do
  visit '/group_infos/new'
end

And (/^I upload a picture from "([^"]*)"$/) do |picture|
    path = File.join(::Rails.root, picture) 
    attach_file("avatar", path)
end
And (/^I upload a file from "([^"]*)"$/) do |file|
    path = File.join(::Rails.root, file) 
    attach_file("cv", path)
end

When(/^I upload a group file from "([^"]*)"$/) do |file|
    path = File.join(::Rails.root, file) 
    attach_file("file", path)
end

=======
>>>>>>> 353159568d933b2729459602b9b96a8858d56599
############################################################################
## Response
############################################################################
Then (/^I should see a flash "([^"]*)"$/) do |msg|
    page.has_content?(msg)
end

Then (/^I should be logged out$/) do 
    page.should have_content "Login"
    page.should_not have_content "Logout"
end
