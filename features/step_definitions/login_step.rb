# And (/^I should see "(.*)"$/) do |arg|
#     page.should have_css('.flashnotice', text: "#{arg}")
# end
Given (/^this user exists$/) do |table|
    table.hashes.each do |user|
        User.create(user)
    end
end

Then (/^I should see a flash "([^"]*)"$/) do |msg|
    page.has_content?(msg)
end