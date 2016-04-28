class CreateGroupInfo < ActiveRecord::Migration
  def change
    create_table :group_infos do |t|
      t.string :title
      t.string :file_path
      t.boolean :is_restricted, :default => true
    end
  end
end
