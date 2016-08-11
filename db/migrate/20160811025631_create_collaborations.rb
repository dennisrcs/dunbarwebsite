class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.string 'researcher'
      t.string 'affiliation'
      t.string 'description'
      t.string 'picture_path'
    end
  end
end
