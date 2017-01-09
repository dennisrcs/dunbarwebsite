class StaticPagesController < ApplicationController
  def home
    @sliderImages = SliderImage.all
    @announcements = New.getTopNews
    gon.members = Member.all
  end
end
