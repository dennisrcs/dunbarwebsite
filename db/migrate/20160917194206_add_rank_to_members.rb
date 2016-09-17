class AddRankToMembers < ActiveRecord::Migration
  def change
    add_column :members, :rank, :integer
  end
end
