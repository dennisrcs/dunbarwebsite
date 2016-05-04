class StaticPagesController < ApplicationController
  def home
    @sliderImages = SliderImage.all
    @announcements = New.all
  end
end
