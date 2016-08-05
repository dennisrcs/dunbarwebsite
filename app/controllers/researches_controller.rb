class ResearchesController < ApplicationController
    
  def index
    @researches = Research.all
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
   
end
