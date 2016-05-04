class CreateCourse < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.timestamps
    end

    create_table :course_files do |t|
      t.belongs_to :course, index:true
      t.string :name
      t.string :file_path
      t.integer :file_type
    end
  end
end
