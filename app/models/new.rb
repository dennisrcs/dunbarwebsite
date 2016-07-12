class New < ActiveRecord::Base
  attr_accessible :title, :content, :date
  
  def self.getTopNews
     return New.all.order(created_at: :desc).first(3) 
  end
end
