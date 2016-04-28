FixtureBuilder::Configuration.class_eval do

  def rebuild_fixtures?
    (@file_hashes != read_config) || Dir.glob('spec/fixtures/**/*.yml').empty?
  end

  def files_to_check
    @files_to_check ||= []
  end

  def delete_tables
    ActiveRecord::Base.connection.execute('SET FOREIGN_KEY_CHECKS=0')
    tables.each { |t| ActiveRecord::Base.connection.delete(delete_sql % ActiveRecord::Base.connection.quote_table_name(t)) }
  ensure
    ActiveRecord::Base.connection.execute('SET FOREIGN_KEY_CHECKS=1')
  end

end

FixtureBuilder.configure do |builder|
  builder.files_to_check = Dir["spec/support/fixture_builder.rb"]
  builder.skip_tables += ["current_post_stats_view"]
  builder.factory do

    united_states = Country.create! :name => "United States", :country_code => "US"
    Country.create! :name => "Canada", :country_code => "CA"

    admin_user = User.create! do |user|
      user.first_name = "Admin"
      user.last_name = "User"
      user.email = "admin@super_site_.com"
      user.password = "password"
      user.password_confirmation = "password"
      user.role = "admin"
    end
    name("admin", admin_user)

  end
end