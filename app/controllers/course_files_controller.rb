class CourseFilesController < ApplicationController
   
   def destroy
       course_id = params[:course_id]
       file_id = params[:id]
       
       file = CourseFile.find file_id
       file.destroy!
       redirect_to course_path(course_id)
   end
    
end
