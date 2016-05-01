class SliderImagesController < ApplicationController
  
  def index
    @sliderImages = SliderImage.all
  end

  def show
  end

  def new
    # only renders 'new' view
  end
  
  def edit
    @sliderImage = SliderImage.find params[:id]
  end

  def create
    # writing image to the NFS
    sliderImage_picture_path = SliderImage.write_to_filesystem(params[:sliderImage_picture], 'uploads/sliderImages/')
    
    # creating sliderImage
    sliderImage = SliderImage.create(:title => params[:title], :link => params[:link], :sliderImage_picture => sliderImage_picture_path)
    sliderImage.save
    # removing temp files
    try_delete_tempfile(params[:sliderImage_picture])
    # redirect to the created sliderImage page
    redirect_to home
  end
  
   def destroy
    @sliderImage = SliderImage.find(params[:id])
    @sliderImage.destroy
    flash[:info] = "SliderImage '#{@sliderImage.article}' deleted."
    redirect_to home
   end
   
   
   def update
    sliderImage = SliderImage.find params[:id]
     
    if !( params[:sliderImage_picture].nil? || params[:sliderImage_picture].empty?)
      sliderImage_picture_path = SliderImage.write_to_filesystem(params[:sliderImage_picture], 'uploads/sliderImages/')
      
      sliderImage.update_attributes!(:title => params[:title], :link => params[:link], :sliderImage_picture => sliderImage_picture_path)
      try_delete_tempfile(params[:sliderImage_picture])
    else
      sliderImage.update_attributes!(:title => params[:title], :link => params[:link])
    end
    flash.now[:info] = "The slide image was successfully updated."
    redirect_to home
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

