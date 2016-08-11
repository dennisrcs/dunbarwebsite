class SliderImagesController < ApplicationController
  
  def index
    @sliderImages = SliderImage.all
  end
  
  def show
  end
  
  def new
  end
  
  def edit
    @sliderImage = SliderImage.find params[:id]
  end
  
  def create
    # writing image to the NFS
    slider_image_picture_path = SliderImage.write_to_filesystem(params[:slider_image_picture], 'uploads/slider/')
    
    sliderImage = SliderImage.create(
        :title => params[:title], 
        :content => params[:content],
        :link => params[:link], 
        :slider_image_picture => slider_image_picture_path)
    sliderImage.save
    # removing temp files
    try_delete_tempfile(params[:slider_image_picture])
    redirect_to slider_images_path
  end
  
  def destroy
    @sliderImage = SliderImage.find(params[:id])
    @sliderImage.destroy
    flash[:notice] = "Slider Image '#{@sliderImage.title}' is deleted."
    redirect_to slider_images_path
  end
  
  def update
    sliderImage = SliderImage.find(params[:id])
    if params[:slider_image_picture] != nil
      slider_image_picture_path = SliderImage.write_to_filesystem(params[:slider_image_picture], 'uploads/slider/')
      
      sliderImage.update_attributes!(
          :title => params[:title], 
          :link => params[:link],
          :content => params[:content],
          :slider_image_picture => slider_image_picture_path)
      try_delete_tempfile(params[:slider_image_picture])
    else
      sliderImage.update_attributes!(
        :title => params[:title], 
        :content => params[:content],
        :link => params[:link])
    end
    flash.now[:info] = "The slide was successfully updated."
    redirect_to slider_images_path
  end  
  
  def try_delete_tempfile(file)
    if file != nil
      tempfile = file.tempfile.path
      if File::exists?(tempfile)
        File::delete(tempfile)
      end
    end
  end
  
end