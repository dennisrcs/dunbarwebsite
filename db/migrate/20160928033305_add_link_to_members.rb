class AddLinkToMembers < ActiveRecord::Migration
  def change
    add_column :members, :link, :string
  end
end
