class Course < ActiveRecord::Base
  has_many :course_files

  attr_accessible :name
  
  def self.get_syllabus(course)
    @syllabus_file = course.course_files.select { |f| f.file_type == 'syllabus'}
    return @syllabus_file.first;
  end
  
  def self.get_notes(course)
    @notes_files = course.course_files.select { |f| f.file_type == 'notes'}
    return @notes_files;
  end
  
  def self.get_chapter_goals(course)
    @chapter_goals_files = course.course_files.select { |f| f.file_type == 'chapter_goals'}
    return @chapter_goals_files
  end
end
