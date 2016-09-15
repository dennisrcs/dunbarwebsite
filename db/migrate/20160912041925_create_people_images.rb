class CreatePeopleImages < ActiveRecord::Migration
  def change
    create_table :people_images do |t|
      t.string :description
      t.string :link
      t.string :picture_path
    end
  end
end
