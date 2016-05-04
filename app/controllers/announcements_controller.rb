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
    flash[:notice] = "News '#{@announcement.content}' deleted."
    redirect_to announcements_path
  end
  
  def update
    announcement = New.find(params[:id])
    announcement.update_attributes!(:content => params[:content])
    flash.now[:info] = "The news was successfully updated."
    redirect_to announcements_path
  end  
  
  #def show
    #id = params[:id]
    #@new = New.find_by_id(id)
    #if @new == nil
    #  flash[:danger] = "new not found"
    #  redirect_to news_path
    #end
  #end
  
#  def update
#    new = New.find(params[:id])
#    new.update_attributes!(:content => params[:content][:content][:value])
#    render text: ""
#  end
   
#  def mercury_update
#    new = New.find(params[:id])
#    new.content = params[:content][:content][:value]
#    new.save!
#    render text: ""
#  end

end