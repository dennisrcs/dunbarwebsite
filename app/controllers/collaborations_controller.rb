class CollaborationsController < ApplicationController
  def index
    @collaborations = Collaboration.all
  end

  def show
    redirect_to collaborations_path
  end

  def new
    # only renders 'new' view
  end
  
  def create
    # writing image to the NFS
    collaboration_picture_path = Collaboration.write_to_filesystem(params[:collaboration_picture], 'uploads/collaborations/')
    
    # creating publication
    collaboration = Collaboration.new(:researcher => params[:researcher], :affiliation => params[:affiliation],
                           :description => params[:description], :link => params[:link], :picture_path => collaboration_picture_path)
    collaboration.save
    # removing temp files
    try_delete_tempfile(params[:collaboration_picture])
    # redirect to the created publication page
    redirect_to collaborations_path
  end
  
  def edit
    @collaboration = Collaboration.find params[:id]
  end
  
  def update
    collaboration = Collaboration.find params[:id]
     
    if params[:collaboration_picture] != nil
      collaboration_picture_path = Collaboration.write_to_filesystem(params[:collaboration_picture], 'uploads/collaborations/')
      
      collaboration.update_attributes!(:researcher => params[:researcher], :affiliation => params[:affiliation],
                           :description => params[:description], :link => params[:link], :picture_path => collaboration_picture_path)
      try_delete_tempfile(params[:collaboration_picture])
    else
     collaboration.update_attributes!(:researcher => params[:researcher], :affiliation => params[:affiliation], :description => params[:description], :link => params[:link])
    end
    flash.now[:info] = "The collaboration was successfully updated."
    redirect_to collaborations_path
  end
  
  def destroy
    collaboration = Collaboration.find(params[:id])
    collaboration.destroy
    flash[:info] = "Collaboration with '#{collaboration.researcher}' deleted."
    redirect_to collaborations_path
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
