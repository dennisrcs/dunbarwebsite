class CreateFormerMembers < ActiveRecord::Migration
  def change
    create_table :former_members do |t|
      t.string :description
      t.integer :category
    end
  end
end
