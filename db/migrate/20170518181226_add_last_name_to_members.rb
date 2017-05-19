class AddLastNameToMembers < ActiveRecord::Migration
  def change
    add_column :members, :last_name, :string
  end
end
