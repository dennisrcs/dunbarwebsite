class AddBirthplaceToMembers < ActiveRecord::Migration
  def change
    add_column :members, :birthplace, :string
  end
end
