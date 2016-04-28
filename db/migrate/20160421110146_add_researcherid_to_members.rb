class AddResearcheridToMembers < ActiveRecord::Migration
  def change
    add_column :members, :researcherid, :string
  end
end
