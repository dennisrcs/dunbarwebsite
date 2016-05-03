class Course < ActiveRecord::Base
  has_many :course_files

  attr_accessible :name
end
