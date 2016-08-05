class AddPictureToResearches < ActiveRecord::Migration
  def change
    add_column :researches, :picture_path, :string
  end
end
