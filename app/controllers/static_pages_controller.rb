class StaticPagesController < ApplicationController
  def home
    @sliderImages = SliderImage.all
    @announcements = New.all
    gon.members = Member.all
  end
end
