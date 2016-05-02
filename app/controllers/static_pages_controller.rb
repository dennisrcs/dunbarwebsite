class StaticPagesController < ApplicationController
  def home
    @sliderImages = SliderImage.all
  end
end
