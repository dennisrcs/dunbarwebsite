class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string 'title'
      t.string 'date'
      t.string 'picture_path'
      t.string 'summary'
      t.string 'content'
    end
  end
end
