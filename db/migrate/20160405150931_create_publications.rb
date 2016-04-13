class CreatePublications < ActiveRecord::Migration
  def change
    create_table :publications do |t|
      t.string :article
      t.string :contributors
      t.string :journal
      t.string :year
      t.string :more_info
      t.string :pages
      t.string :link
      t.string :publication_picture

      t.timestamps null: false
    end
  end
end
