require 'spec_helper'

describe Publication do
    before :each do
        @pattr = {
            :article => "some article", 
            :contributors =>"list of contributors", 
            :journal => "some journal", 
            :year => "2016", 
            :more_info => "if available", 
            :pages =>"4", 
            :link =>"uploads/articles/article1.pdf", 
            :publication_picture =>"/uploads/publications/glass_water250.jpg"
        }
    end
    it 'should create a valid Publication type' do
        #created Publication is_an_instance_of Publication
        @p = Publication.create!(@pattr)
        @p.should(be_an_instance_of(Publication))
    end
    
    it 'should write data to the file system' do
       return_value = "/uploads/publications/glass_water250.jpg"
       path = Publication.stub(:write_to_filesystem).with(:publication_picture, 
       "uploads/publications")
       path =~ return_value
    end
end