class PublicationsController < ApplicationController
  
  def index
    @publications = Publication.all
  end

  def show
  end

  def new
    # only renders 'new' view
  end
  
  def edit
    @publication = Publication.find params[:id]
  end

  def create
    # writing image to the NFS
    publication_picture_path = Publication.write_to_filesystem(params[:publication_picture], 'uploads/publications/')
    
    # creating publication
    publication = Publication.create(:article => params[:article], :contributors => params[:contributors],
                           :journal => params[:journal], :year => params[:year], 
                           :more_info => params[:more_info], :pages => params[:pages],
                           :link => params[:link], :publication_picture => publication_picture_path)
    publication.save
    # removing temp files
    try_delete_tempfile(params[:publication_picture])
    # redirect to the created publication page
    redirect_to publications_path
  end
  
   def destroy
    @publication = Publication.find(params[:id])
    @publication.destroy
    flash[:info] = "Publication '#{@publication.article}' deleted."
    redirect_to publications_path
   end
   
   
   def update
    publication = Publication.find params[:id]
     
    if !( params[:publication_picture].nil? || params[:publication_picture].empty?)
      publication_picture_path = Publication.write_to_filesystem(params[:publication_picture], 'uploads/publications/')
      
      publication.update_attributes!(:article => params[:article], :contributors => params[:contributors],
                           :journal => params[:journal], :year => params[:year], 
                           :more_info => params[:more_info], :pages => params[:pages],
                           :link => params[:link], :publication_picture => publication_picture_path)
      try_delete_tempfile(params[:publication_picture])
    else
      publication.update_attributes!(:article => params[:article], :contributors => params[:contributors],
                           :journal => params[:journal], :year => params[:year], 
                           :more_info => params[:more_info], :pages => params[:pages],
                           :link => params[:link])
    end
    flash.now[:info] = "The Article was successfully updated."
    redirect_to publications_path
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
