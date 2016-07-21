class GroupInfo < ActiveRecord::Base
  attr_accessible :title, :category, :file_path, :is_restricted
  
  enum category: [ :misc, :group_rules, :safety, :lab_techniques, :synthesis, :magnetism, :equipments, :electrochemistry, :crystallography, :NMR, :software ]
  
  def self.categories_list 
    [
      ['Group Rules & Guidelines', :group_rules], ['Safety', :safety], ['Lab Techniques & Hints', :lab_techniques], ['Synthesis', :synthesis],
      ['Magnetism', :magnetism], ['Instruments / Equipment usage', :equipments], ['Electrochemistry', :electrochemistry], ['Crystallography', :crystallography],
      ['NMR', :NMR], ['Useful software', :software], ['Miscellaneous', :misc]
    ]
  end
  
  def self.checkIsRestricted(category)
    return category.to_s != "group_rules"
  end
  
  def self.getFiles(category)
    return GroupInfo.send category
  end
  
  after_create :setRestriction

  validates :title, presence: true
  validates :file_path, presence: true

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
  
  def setRestriction
    if category == "group_rules"
      update_attribute(:is_restricted, false)
    end
  end
end
