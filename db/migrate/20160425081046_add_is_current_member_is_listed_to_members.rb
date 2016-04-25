class AddIsCurrentMemberIsListedToMembers < ActiveRecord::Migration
  def change
    add_column :members, :is_current_member, :boolean
    add_column :members, :is_listed, :boolean
  end
end
