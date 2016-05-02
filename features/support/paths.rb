# TL;DR: YOU SHOULD DELETE THIS FILE
#
# This file is used by web_steps.rb, which you should also delete
#
# You have been warned
module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in web_steps.rb
  #
  def path_to(page_name)
    case page_name
    
    when /^the Create New Member page$/ 
      new_member_path
<<<<<<< HEAD
      
    when /^the Create New Publication page$/ 
      new_publication_path
      
     when /^the Create New Group Info page$/ 
      new_group_info_path  
      
    when /^the Edit Publication page$/ 
      publication_path(@publication)
      
    when /^my personal page$/
      member_path(User.last.member)
    
=======
 
>>>>>>> 353159568d933b2729459602b9b96a8858d56599
    when /^the People\s?page$/
      '/members'
     when /^the Group Info\s?page$/
      '/group_infos'  
      
    when /^the Login\s?page$/
      login_path

    when /^the home\s?page$/
      '/'
      
    when /^the Publications\s?page$/
      '/publications'

    # Add more mappings here.
    # Here is an example that pulls values out of the Regexp:
    #
    #   when /^(.*)'s profile page$/i
    #     user_profile_path(User.find_by_login($1))

    else
      begin
        page_name =~ /^the (.*) page$/
        path_components = $1.split(/\s+/)
        self.send(path_components.push('path').join('_').to_sym)
      rescue NoMethodError, ArgumentError
        raise "Can't find mapping from \"#{page_name}\" to a path.\n" +
          "Now, go and add a mapping in #{__FILE__}"
      end
    end
  end
end

World(NavigationHelpers)
