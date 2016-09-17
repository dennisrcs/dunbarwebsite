class PeopleImagesController < ApplicationController
  
  def index
    @peopleImages = PeopleImage.all
  end
  
  def show
    redirect_to members_path
  end
  
  def new
  end
  
  def edit
    @peopleImage = PeopleImage.find params[:id]
  end
  
  def create
    # writing image to the NFS
    picture_path = PeopleImage.write_to_filesystem(params[:picture_path], 'uploads/images/')
    
    peopleImage = PeopleImage.create(
        :description => params[:description], 
        :link => params[:link], 
        :picture_path => picture_path)
    peopleImage.save
    # removing temp files
    try_delete_tempfile(params[:picture_path])
    redirect_to people_images_path
  end
  
  def destroy
    peopleImage = PeopleImage.find(params[:id])
    peopleImage.destroy
    flash[:info] = "People Image was deleted."
    redirect_to people_images_path
  end
  
  def update
    peopleImage = PeopleImage.find(params[:id])
    if params[:picture_path] != nil
      picture_path = PeopleImage.write_to_filesystem(params[:picture_path], 'uploads/images/')
      
      peopleImage.update_attributes!(
          :description => params[:description], 
          :link => params[:link], 
          :picture_path => picture_path)
      try_delete_tempfile(params[:picture_path])
    else
      peopleImage.update_attributes!(
          :description => params[:description], 
          :link => params[:link])
    end
    flash.now[:info] = "The image was successfully updated."
    redirect_to people_images_path
  end  
  
  def try_delete_tempfile(file)
    if file != nil
      tempfile = file.tempfile.path
      if File::exists?(tempfile)
        File::delete(tempfile)
      end
    end
  end
  
end