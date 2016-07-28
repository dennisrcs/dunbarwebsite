class CourseFile < ActiveRecord::Base
  attr_accessible :name, :file_path, :file_type
  enum file_type: [ :misc, :syllabus, :notes, :chapter_goals, :resource_research, :homework, :solutions, :exam_answers ]
  
  def self.file_types_list 
    [ ['Syllabus', :syllabus], ['Lecture Notes', :notes], ['Chapter Goals', :chapter_goals], 
    ['Resources for Research Paper', :resource_research], ['Homework', :homework],
    ['Solutions', :solutions], ['Exam key answers', :exam_answers], ['Miscellaneous', :misc] ]
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

  validates :name, presence: true
  validates :file_path, presence: true
end
