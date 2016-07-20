class AddCategoryToGroupInfos < ActiveRecord::Migration
  def change
    add_column :group_infos, :category, :integer
  end
end
