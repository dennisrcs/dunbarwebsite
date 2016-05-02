require 'spec_helper'

describe SliderImage do
    before :each do
        @pattr = {
            :title => "some article", 
            :link =>"uploads/articles/article1.pdf", 
            :sliderImage_picture =>"/uploads/slider/HAT.png"
        }
        @p = SliderImage.create!(@pattr)
    end
    it 'should create a valid SliderImage type' do
        #created SliderImage is_an_instance_of SliderImage
        @p.should(be_an_instance_of(SliderImage))
    end
    
    it 'should write data to the file system' do
       return_value = "/uploads/slider/HAT.png"
       @path = SliderImage.send(:write_to_filesystem,@p[:sliderImage_picture],  "/uploads/slider")
       @path =~ return_value
    end
    
end