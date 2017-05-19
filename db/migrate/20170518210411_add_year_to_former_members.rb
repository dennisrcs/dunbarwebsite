class AddYearToFormerMembers < ActiveRecord::Migration
  def change
    add_column :former_members, :year, :integer
  end
end
