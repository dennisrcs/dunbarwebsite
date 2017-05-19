class Member < ActiveRecord::Base
  attr_accessible :name, :last_name, :position, :telephone, :fax, :researcherid, :previous_affiliation, :bio, :interests, :building, :office, :avatar_path, :cv_path, :is_listed, :rank, :link, :birthplace
  has_one :user

  validates :name, presence: true
  validates :last_name, presence:true
  validates :position, presence: true
  validates :rank, presence: true

  def self.filterByRank(rank, sort)
    members = Member.all
    results = members.select do |m|
      m.rank == rank
    end
    if sort
      return results.sort_by{|m| m.last_name.downcase}
    else
      return results
    end
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
