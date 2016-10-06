class LinksController < ApplicationController
  
  def index
    @links = Link.all
  end
  
  def show
    redirect_to links_path
  end
  
  def new
  end
  
  def edit
    @link = Link.find params[:id]
  end
  
  def create
    # writing image to the NFS
    picture_path = Link.write_to_filesystem(params[:picture], 'uploads/links/')
    
    link = Link.create(:title => params[:title], :url => params[:url],
                       :description => params[:description], :picture_path => picture_path)
    link.save
    
    # removing temp files
    try_delete_tempfile(params[:picture])
    
    redirect_to links_path
  end
  
  def destroy
    link = Link.find(params[:id])
    link.destroy
    flash[:info] = "Link '#{link.title}' deleted."
    redirect_to links_path
  end
  
  def update
    link = Link.find(params[:id])
    
    if params[:picture] != nil
      picture_path = Link.write_to_filesystem(params[:picture], 'uploads/links/')
      link.update_attributes!(:title => params[:title], :url => params[:url], :description => params[:description], :picture_path => picture_path)
      # removing temp files
      try_delete_tempfile(params[:picture])             
    else
      link.update_attributes!(:title => params[:title], :url => params[:url], :description => params[:description])
    end
    
    flash[:info] = "The link was successfully updated."
    redirect_to links_path
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
