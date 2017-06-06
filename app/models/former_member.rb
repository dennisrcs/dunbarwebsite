class FormerMember < ActiveRecord::Base
  attr_accessible :description, :category, :year

  validates :description, presence: true
  validates :year, presence:true

  enum category: [ :admin, :visiting_scholar, :postdoc, :phd_student, :msc_student, :undergrad_student, :other ]

  def self.categories_list
    [ ['Visiting Scholar', :visiting_scholar], ['Postdoc', 'postdoc'], ['PhD Student', :phd_student],
    ['MSc Student', :msc_student], ['Ungraduate Student', :undergrad_student], ['Other', :other] ]
  end

  def self.get_category(categ_type)
    categories = Hash.new
    categories[:postdoc] = 'Postdoc'
    categories[:visiting_scholar] = 'Visiting Scholar'
    categories[:phd_student] = 'PhD Student'
    categories[:msc_student] = 'MSc Student'
    categories[:undergrad_student] = 'Ungraduate Student'
    categories[:other] = 'Other'

    return categories[categ_type]
  end

  def self.filterMembers(categ, categ2)
    members = FormerMember.all
    result = members.select do |elem|
        elem.category.to_sym == categ
    end
    if categ2 != nil
      result2 = members.select do |elem|
        elem.category.to_sym == categ2
      end
      result = result + result2
    end
    return result.sort_by{ |m| -m.year }
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
