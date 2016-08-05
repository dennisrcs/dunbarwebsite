class ResearchesController < ApplicationController
    
  def index
    @researches = Research.all.order(created_at: :desc)
  end

  def show
    id = params[:id]
    @research = Research.find_by_id(id)
    if @research == nil
      flash[:danger] = "research not found"
      redirect_to researches_path
    end
  end
  
  def new
    # only renders 'new' view
  end
  
  def create
    # writing image to the NFS
    picture_path = Research.write_to_filesystem(params[:picture], 'uploads/research_images/')
    
    # create research
    research = Research.create(:title => params[:title], :summary => params[:summary], 
                       :content=> params[:content], :picture_path => picture_path)

    # redirect to the created member page
    redirect_to research_path(research)
  end
    
  def destroy
    @research = Research.find(params[:id])
    @research.destroy
    flash[:notice] = "Research '#{@research.title}' deleted."
    redirect_to researches_path
  end
  
  def update
    research = Research.find(params[:id])
    research.update_attributes!(:title => params[:content][:title][:value], 
                                :summary => params[:content][:summary][:value],
                                :content => params[:content][:content][:value])
    render text: ""
  end
   
  def mercury_update
    research = Research.find(params[:id])
    research.title = params[:content][:title][:value]
    research.summary = params[:content][:summary][:value]
    research.content = params[:content][:content][:value]
    research.save!
    render text: ""
  end
   
  def edit_picture
    @research = Research.find(params[:id])
  end
  
  def update_picture
    research = Research.find(params[:id])
    
    # writing image to the NFS
    picture_path = Research.write_to_filesystem(params[:picture], 'uploads/research_images/')
    research.update_attributes!(:picture_path => picture_path)
    
    flash.now[:info] = "The research picture was successfully updated."
    redirect_to researches_path
  end
end
