class CourseFile < ActiveRecord::Base
  attr_accessible :name, :file_path, :type
  enum type: [ :misc, :syllabus, :notes, :chapter_goals, :resource_research, :homework, :solutions, :exam_answers ]

  validates :name, presence: true
  validates :file_path, presence: true
end
