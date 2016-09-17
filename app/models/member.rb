class Member < ActiveRecord::Base
  attr_accessible :name, :position, :telephone, :fax, :researcherid, :previous_affiliation, :bio, :building, :office, :avatar_path, :cv_path, :is_current_member, :is_listed, :rank
  has_one :user

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
