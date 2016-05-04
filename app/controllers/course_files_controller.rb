class CourseFilesController < ApplicationController
   
  def destroy
    # retrieving parameters
    course_id = params[:course_id]
    file_id = params[:id]
       
    # finding and destroying file
    file = CourseFile.find file_id
    file.destroy!
    
    # filling flash and redirecting to course page
    flash[:info] = "File #{file.name} successfully deleted!"
    redirect_to course_path(course_id)
  end

  def new
    @file_types = CourseFile.file_types_list
  end

  def create
    course_id = params[:course_id]
     
    # writing file to the NFS
    file_path = CourseFile.write_to_filesystem(params[:file], 'uploads/courses/')
    
    # saving new file
    coursefile = CourseFile.new(:name => params[:name], :file_path => file_path)
    coursefile.file_type = params[:file_type]
    coursefile.course_id = course_id
    coursefile.save
    
    # deletes the temporary file
    try_delete_tempfile(params[:file])
    
    flash[:info] = "#{coursefile.name} Successfully added!"
    redirect_to course_path(course_id)
  end
  
  # if there's a temporary file, then delete it
  def try_delete_tempfile(file)
    if file != nil
      tempfile = file.tempfile.path
      if File::exists?(tempfile)
       File::delete(tempfile)
      end
    end
  end
  
end
