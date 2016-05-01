class CreateSliderImages < ActiveRecord::Migration
  def change
    create_table :slider_images do |t|
      t.string :title
      t.text :link
      t.string :slider_image_picture

      t.timestamps null: false
    end
  end
end
