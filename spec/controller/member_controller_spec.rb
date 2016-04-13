require 'spec_helper'

describe MembersController, :type => :controller do
        
    describe 'create' do
        before :each do
            @user = User.create(:username => 'roberto', :email => 'roberto@gmail.com', :password => 'roberto123', :password_confirmation => 'roberto123')
            @memberattr = {:name => 'Roberto', :position => 'Undergraduate Student', :telephone => '5555555555', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Roberto! :)', :building => 'Bright building', :office => '5th Floor',
                        :avatar_path => '/uploads/images/roberto.png', :cv_path => '/uploads/cv/cv.pdf'}
            member = Member.create(@memberattr)
            @user.update_attribute(:member, member)
        end
        it 'should call random_password' do
            password = subject.send(:generate_random_password)
            !password.empty?
        end
        it 'should create an avatar for a new member' do
            avatar_path = Member.write_to_filesystem(@user[:avatar_path], 'uploads/images/')
            avatar_path =~ 'png'
        end
        
        it 'should upload a cv in the file system' do
            cv_path = Member.write_to_filesystem(@user[:cv_path], 'uploads/images/')
            cv_path =~ 'pdf'
        end
    end
end
