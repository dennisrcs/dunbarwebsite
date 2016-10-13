class Publication < ActiveRecord::Base
  attr_accessible :article, :contributors, :journal, :year, :more_info, :pages, :link, :publication_picture
  
  self.per_page = 10;
  
  def self.publicationNumber(page, index)
    if page == 0 || page == nil
      page = 1
    end
    return (Publication.count - Publication.per_page * (page.to_i - 1) - index).to_s + "."
  end
  
  def self.search(page)
    Publication.all.order(year: :desc).paginate(:per_page => Publication.per_page, :page => page)
  end
  
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
