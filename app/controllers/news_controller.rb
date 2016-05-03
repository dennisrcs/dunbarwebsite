class NewsController < ApplicationController
  
  def index
    @news = New.all
  end
  
  def new
    create
  end
  
  def create
    new = New.create(:content => 'Write the News Here')
    new.save
    redirect_to news_path(new)
  end
  
  def show
    id = params[:id]
    @new = New.find_by_id(id)
    if @new == nil
      flash[:danger] = "new not found"
      redirect_to news_path
    end
  end
  
  def destroy
    @new = New.find(params[:id])
    @new.destroy
    flash[:notice] = "News '#{@new.content}' deleted."
    redirect_to root_path
  end

  def update
    new = New.find(params[:id])
    new.update_attributes!(:content => params[:content][:content][:value])
    render text: ""
  end
   
  #def mercury_update
  #  new = New.find(params[:id])
  #  new.content = params[:content][:content][:value]
  #  new.save!
  #  render text: ""
  #end

end