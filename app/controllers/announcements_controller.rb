class AnnouncementsController < ApplicationController
  
  def index
    @announcements = New.all.order(created_at: :desc)
  end
  
  def show
  end
  
  def new
  end
  
  def edit
    @announcement = New.find params[:id]
  end
  
  def create
    announcement = New.create(:content => params[:content], :title => params[:title])
    announcement.save
    redirect_to announcements_path
  end
  
  def destroy
    @announcement = New.find(params[:id])
    @announcement.destroy
    flash.now[:info] = "News '#{@announcement.title}' deleted."
    redirect_to announcements_path
  end
  
  def update
    announcement = New.find(params[:id])
    announcement.update_attributes!(:content => params[:content], :title => params[:title])
    flash.now[:info] = "The news was successfully updated."
    redirect_to announcements_path
  end  

end
