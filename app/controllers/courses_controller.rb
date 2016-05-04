class CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def edit
    @course = Course.find_by(:id => params[:id])
  end

  def create
    course = Course.new(:name => params[:name])
    if course.save
      flash[:info] = "Course #{course.name} successfully added"
      redirect_to course_path(course)
    else
      flash[:danger] = "An error occurred when adding a new course, please try again"
      redirect_to courses_path
    end
  end

  def show
    @course = Course.find_by(:id => params[:id])
    if @course == nil
      flash[:danger] = "Course could not be found."
      redirect_to courses_path
    else
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

  def destroy
    course = Course.find params[:id]
    course.destroy!
    flash[:info] = "Course #{course.name} has been successfully deleted!"
    redirect_to courses_path
  end

  def update
    course = Course.find params[:id]
    course.update_attribute(:name, params[:name])
    flash[:info] = "Course #{course.name} updated successfully!"
    redirect_to course_path(course)
  end

end
