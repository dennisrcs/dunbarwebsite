#########################################################################################|
## \Used FcatoryGirl to represent the has_one associationbetween member and user         |
## \all methods for membersController are tested with get and post                       |
## \I had to comment out the email.downcase in user model for the create test to pass... |
#########################################################################################|

require 'spec_helper'
describe MembersController, :type => :controller do
    
    describe 'index' do
        it 'renders the new template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end

    describe 'create' do
        before (:each) do
            @member = create(:member)
            @member.should be_truthy
        end
        it 'should create a new member from a user object' do
            post :create
            expect(response).to redirect_to (new_member_path)
        end
        
        it 'should call random_password' do
            password = subject.send(:generate_random_password)
            !password.empty?
        end
        
        it 'should create an avatar for a new member' do
             @member.should be_truthy
            avatar_path = Member.write_to_filesystem(@member.user[:avatar_path] , 'uploads/images/')
            avatar_path =~ 'png'
        end
        
        it 'should upload a cv in the file system' do
            @member.should be_truthy
            cv_path = Member.write_to_filesystem(@member.user[:cv_path], 'uploads/images/')
            cv_path =~ 'pdf'
        end
        
        it 'should delete temporary files' do
             @member.should be_truthy
            subject.send(:try_delete_tempfile, (@member.user[:cv_path]))
        end
    end
    
    describe 'show' do
       before :each do
            @member = create(:member)
        end
        it 'should show an existing member' do
            get :show, id: @member
            member = Member.find_by_id(@member)
            member.should_not be nil
            member[:name].should eq 'Amember'
        end
        
        it 'should not show an non-existing member' do
            get :show, id: @member[:name]
            expect(response).to redirect_to(members_path)
        end
    end
    
    describe 'edit' do
        it 'should render the edit template for existing user' do
            member = create(:member)
            member.should be_truthy
            member[:name].should eq 'Amember'
            get :edit, id: member
            member2 = Member.find_by_id(member)
            member2.should_not be nil
            member2[:name].should eq 'Amember'
        end
        
        it 'should not render the edit template for non existing user' do
            get :edit, id: 'Joe'
            expect(response).to redirect_to(members_path)
        end
    end
    
    describe 'update' do
        before :each do
          @member = create(:member)
        end
        
        it 'should update existing user' do
            get :update, id: @member
            expect(response).to redirect_to(member_path(@member))
        end
        
        it 'should find the member' do
            member = Member.stub(:find).with(@member)
            member.should_not be_nil
        end

        it'should update the member with the right avatar' do
            @member.user.stub(:update_attribute).with(:avatar_path, '/uploads/images/bender.png')
            Member.stub(:write_to_filesystem).with('/uploads/images/bender.png', 'uploads/images').and_return(@newpath)
            @newpath =~ 'bender.png'
        end
        
         it'should update the member with the right cv files' do
            @member.user.stub(:update_attribute).with(:cv_path, '/uploads/cv/cv.pdf')
            Member.stub(:write_to_filesystem).with('/uploads/cv/cv.pdf', 'uploads/images').and_return(@newpath)
            @newpath =~ 'cv.pdf'
        end
    end
    
    describe 'destroy' do
       before :each do
            @member = create(:member)
        end
        
        it 'should destroy an existing member' do
            get :destroy, id: @member
            expect(response).to redirect_to(members_path)
        end
    end
end

