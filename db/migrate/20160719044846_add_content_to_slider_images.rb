class AddContentToSliderImages < ActiveRecord::Migration
  def change
    add_column :slider_images, :content, :string
  end
end
