class Publication < ActiveRecord::Base
<<<<<<< 750a0e0f912652e70d42e0c085659c870a7016c7
  
  attr_accessible :article, :contributors, :journal, :year, :more_info, :pages, :link#, :publication_picture
  
  #mount_uploader :publication_picture, Publication_pictureUploader
  
  #insert more details of model
=======
  attr_accessible :article, :contributors, :journal, :year, :more_info, :pages, :link, :publication_picture
>>>>>>> Adding edit Publication fixing minor bugs
  
  # writes 'data' to the public folder, following 'path' structure
  def self.write_to_filesystem(data, path)
    result_path = nil
    if data != nil
      result_path = path + data.original_filename
      File.open(Rails.root.join('public', result_path), 'wb') do |file|
        file.write(data.read)
      end
      result_path = '/' + result_path
    end
    return result_path
  end
end
