class CreateResearches < ActiveRecord::Migration
  def change
    create_table :researches do |t|
      t.string :title
      t.text :summary
      t.text :content

      t.timestamps null: false
    end
  end
end
