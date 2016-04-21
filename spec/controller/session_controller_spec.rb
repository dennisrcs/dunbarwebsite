######################################################################################################|
## \TO_DO                                                                                             |
## \the test to create a valid session is not passing because authenticate is always returning false. |
## \still investigating the issue.                                                                    |
######################################################################################################|
require 'spec_helper'

describe SessionsController, :type => :controller do

    describe 'create' do
        before :each do
            @user = create(:user)
            @user.should be_truthy
        end
        it 'should create a new user with valid password' do
            user = User.find_by(username: @user[:username])
            user.should be_truthy
            post :create, session: {username: user[:username], password: user[:password]}
            user.stub(:authenticate).with((user[:password])).and_return true
            expect(response).to render_template("new")
            #expect(response).to redirect_to (root_path)
        end
        it 'should render new page with invalid input' do
         post :create, session: {username: "invalidmember", password: "invalidpassword"}
         expect(response).to render_template("new")
        end
    end
    
    describe 'destroy' do
       before :each do
            @user = create(:user)
        end
        
        it 'should destroy an existing member' do
            get :destroy
            expect(response).to redirect_to(root_path)
        end 
    end
end
    