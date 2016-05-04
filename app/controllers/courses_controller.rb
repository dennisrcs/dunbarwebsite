class CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find params[:id]
    @syllabus = Course.get_syllabus(@course)
    @notes = Course.get_notes(@course)
    @chapter_goals = Course.get_chapter_goals(@course)
  end

end
