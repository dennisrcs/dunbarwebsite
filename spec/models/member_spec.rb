require 'spec_helper'

describe Member do
    before :each do
        @memberattr = {
            :name => 'Roberto',
            :position => 'Undergraduate Student', 
            :telephone => '5555555555', 
            :fax => '0000000000', 
            :previous_affiliation => 'Futurama',
            :bio => 'Hey, my name is Roberto! :)', 
            :building => 'Bright building', 
            :office => '5th Floor',
            :avatar_path => '/uploads/images/roberto.png', 
            :cv_path => '/uploads/cv/cv.pdf'
        }
    end
    it 'should create a valid member type' do
        #created member is_an_instance_of Member
        @member = FactoryGirl.create(:member)
        @member.should(be_an_instance_of(Member))
    end
    it 'should write data to the file system' do
       return_value = "/uploads/images/roberto.png"
       path = Member.stub(:write_to_filesystem).with(:avatar_path, "uploads/images")
       path =~ return_value
    end
end