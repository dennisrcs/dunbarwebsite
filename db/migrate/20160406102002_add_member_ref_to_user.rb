class AddMemberRefToUser < ActiveRecord::Migration
  def change
    add_reference :users, :member, index: true
  end
end
