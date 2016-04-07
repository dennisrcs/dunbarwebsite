class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :name
      t.string :position
      t.string :telephone
      t.string :fax
      t.string :previous_affiliation
      t.string :bio
      t.string :building
      t.string :office
      t.string :avatar_path
      t.string :cv_path
    end
  end
end
