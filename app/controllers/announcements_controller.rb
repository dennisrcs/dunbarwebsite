class AnnouncementsController < ApplicationController
  
  def index
    @announcements = New.all
  end
  
  def show
  end
  
  def new
  end
  
  def edit
    @announcement = New.find params[:id]
  end
  
  def create
    announcement = New.create(:content => params[:content])
    announcement.save
    redirect_to announcements_path
  end
  
  def destroy
    @announcement = New.find(params[:id])
    @announcement.destroy
    flash.now[:info] = "News '#{@announcement.content}' deleted."
    redirect_to announcements_path
  end
  
  def update
    announcement = New.find(params[:id])
    announcement.update_attributes!(:content => params[:content])
    flash.now[:info] = "The news was successfully updated."
    redirect_to announcements_path
  end  

end
