class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

  def new
    # only renders 'new' view
  end
  
  def create
    # writing image to the NFS
    event_picture_path = Event.write_to_filesystem(params[:picture], 'uploads/events/')
    
    # creating event
    event = Event.create(:title => params[:title], :date => params[:date],
                           :summary => params[:summary], :content => params[:content],
                           :picture_path => event_picture_path)
    event.save
    # removing temp files
    try_delete_tempfile(params[:picture])
    # redirect to the created event page
    redirect_to events_path
  end
  
  def update
    event = Event.find(params[:id])
    event.update_attributes!(:title => params[:content][:title][:value], 
                                :date => params[:content][:date][:value],
                                :content => params[:content][:content][:value])
    render text: ""
  end
  
  def edit_picture
    @event = Event.find(params[:id])
  end
  
  def update_picture
    event = Event.find(params[:id])
    
    # writing image to the NFS
    picture_path = Event.write_to_filesystem(params[:picture], 'uploads/events/')
    
    # updating event
    if picture_path != nil
      event.update_attributes!(:title => params[:title], :date => params[:date],
                                :summary => params[:summary], :picture_path => picture_path)
    else
      event.update_attributes!(:title => params[:title], :date => params[:date], :summary => params[:summary])
    end
    
    flash.now[:info] = "The event information was successfully updated."
    redirect_to events_path
  end
  
  def mercury_update
    event = Event.find(params[:id])
    event.title = params[:content][:title][:value]
    event.date = params[:content][:date][:value]
    event.content = params[:content][:content][:value]
    event.save!
    render text: ""
  end
  
  def destroy
    event = Event.find(params[:id])
    event.destroy
    flash[:info] = "Event '#{event.title}' deleted."
    redirect_to events_path
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