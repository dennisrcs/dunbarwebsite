class Course < ActiveRecord::Base
  has_many :course_files

  attr_accessible :name
  
  def self.get_course_files(course, filetype)
    if course == nil || course.course_files == nil || course.course_files.length == 0
      return nil
    else
      files = course.course_files.select { |f| f.file_type == filetype }
      return (files.length == 0) ? nil : files
    end
  end

end
