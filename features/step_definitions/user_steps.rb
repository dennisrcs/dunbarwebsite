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

Given (/^I am logged in as administrator$/) do
    adminattr = {
        :username => 'adminuser',
        :is_admin => true,
        :email => 'adminuser23@email.com',
        :password => 'adminuser123',
        :password_confirmation => 'adminuser123',
        :activated => true,
        :activated_at => Time.zone.now
    }
    User.create(adminattr)
    visit '/login'
    fill_in "username", :with => adminattr[:username]
    fill_in "password", :with => adminattr[:password]
    click_button "login-form-button"
end

Given (/^I exist as a user$/) do
    adminattr = {
        :username => 'byter',
        :is_admin => true,
        :email => 'byter@email.com',
        :password => 'byter123',
        :password_confirmation => 'byter123',
        :activated => true,
        :activated_at => Time.zone.now
    }
    User.create(adminattr)
end

Given (/^these publications exist:$/) do |table|
    table.hashes.each do |publication|
        Publication.create(publication)
    end
end
Given (/^this user exists:$/) do |table|
    table.hashes.each do |user|
        @user1 = User.create(user)
    end
end

Given (/^this member exists for user "myname":$/) do |table|
    table.hashes.each do |member|
        @member1 = Member.create(member)
    end
    @user1.update_attribute(:member, @member1)
end

##########################################################################
## Action
#########################################################################
When (/^I logout$/) do
    visit '/logout'
end

When (/^I return to the site$/) do
   visit '/'
end

When (/^I choose to add new member$/) do
    visit '/members/new'
end

And (/^I upload a picture from "([^"]*)"$/) do |picture|
    path = File.join(::Rails.root, picture) 
    attach_file("avatar", path)
end
And (/^I upload a file from "([^"]*)"$/) do |file|
    path = File.join(::Rails.root, file) 
    attach_file("cv", path)
end

When (/^I click on the picture for "([^"]*)"$/) do |name|
    #click_image(@user1)
    find(".img.member-picture").click
end

Then (/^the personal page for "([^"]*)"$/) do |name|
    member_path(@user1)
end
############################################################################
## Response
############################################################################
Then (/^I should see a message "([^"]*)"$/) do |msg|
    assert_text(msg)
end

Then (/^I should be logged out$/) do 
    page.should have_content "Login"
    page.should_not have_content "Logout"
end

Then (/^I should have an active session$/) do
    page.should have_content "Logout"
    page.should_not have_content "Login"
end