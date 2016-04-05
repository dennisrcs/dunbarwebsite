class Publication < ActiveRecord::Base
  
  attr_accessible :article, :contributors, :journal, :year, :more_info, :pages, :link#, :publication_picture
  
  mount_uploader :publication_picture, Publication_pictureUploader
  
  #insert more details of model
  
end
