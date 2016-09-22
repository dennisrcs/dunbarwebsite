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
    link = Link.create(:title => params[:title], :url => params[:url])
    link.save
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
    link.update_attributes!(:title => params[:title], :url => params[:url])
    flash[:info] = "The link was successfully updated."
    redirect_to links_path
  end  

end
