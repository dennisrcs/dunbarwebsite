class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :content
      t.date :date

      t.timestamps null: false
    end
  end
end
