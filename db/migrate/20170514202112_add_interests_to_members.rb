class AddInterestsToMembers < ActiveRecord::Migration
  def change
    add_column :members, :interests, :string
  end
end
