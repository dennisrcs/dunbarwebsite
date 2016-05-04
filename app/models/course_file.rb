class CourseFile < ActiveRecord::Base
  attr_accessible :name, :file_path, :file_type
  enum file_type: [ :misc, :syllabus, :notes, :chapter_goals, :resource_research, :homework, :solutions, :exam_answers ]
  
  def self.file_types_list 
    [ ['Miscellaneous', :misc], ['Syllabus', :syllabus], ['Lecture Notes', :notes], ['Chapter Goals', :chapter_goals], ['Resources for Research Paper', :resource_research], ['Homework', :homework], ['Solutions', :solutions], ['Exam key answers', :exam_answers] ]
  end

  validates :name, presence: true
  validates :file_path, presence: true
end
