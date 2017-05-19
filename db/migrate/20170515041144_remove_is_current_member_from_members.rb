class RemoveIsCurrentMemberFromMembers < ActiveRecord::Migration
  def change
    remove_column :members, :is_current_member, :boolean
  end
end
