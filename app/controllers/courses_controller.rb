class CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find params[:id]
    @syllabus = Course.get_course_files(@course, 'syllabus')
    @notes = Course.get_course_files(@course, 'notes')
    @chapter_goals = Course.get_course_files(@course, 'chapter_goals')
    @resource_research = Course.get_course_files(@course, 'resource_research')
    @homework = Course.get_course_files(@course, 'homework')
    @solutions = Course.get_course_files(@course, 'solutions')
    @exam_answers = Course.get_course_files(@course, 'exam_answers')
    @misc = Course.get_course_files(@course, 'misc')
  end

end
