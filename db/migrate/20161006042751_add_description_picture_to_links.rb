class AddDescriptionPictureToLinks < ActiveRecord::Migration
  def change
    add_column :links, :description, :string
    add_column :links, :picture_path, :string
  end
end
