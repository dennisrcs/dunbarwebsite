class Research < ActiveRecord::Base
    attr_accessible :title, :picture_path, :summary, :content
    
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
