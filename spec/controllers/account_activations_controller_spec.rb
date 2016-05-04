require 'spec_helper'

describe AccountActivationsController, :type => :controller do
    describe 'edit' do
        before (:each) do
            @userattr = {
                :username => 'byter', 
                :email => 'byter@gmail.com',
                :password => 'byter123', 
                :password_confirmation =>'byter123',
                :activated => true, :activated_at => Time.zone.now
            }
            @user = User.create(@userattr)
            @user.should be_truthy
        end
        it 'should find the user and assign token' do
            user1 = User.find_by(email: @user[:email].downcase)
            user1.should_not be_nil
            get :edit, id: @user
            @user.should_not be_nil
        end
    end
    
    describe 'update' do
        it 'should successfully update if passowrd and confirmation match' do
            # @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
            #                     :password => 'byter123', :password_confirmation =>'byter123',
            #                     :activated => true, :activated_at => Time.zone.now)
            # @user.should be_truthy
            # put :update, id: @user
          
            # password = @user[:password]
            # password_confirmation = @user[:password_confirmation]
            # user = User.find(@user[:username])
            # password.should_not be_nil
            # password_confirmation.should_not be_nil
            # user.should_not be_nil
            # user.stub(:activated?).with(user[:password]).and_return(true)
            # User.log_in user
            # flash[:info] = "Account activated succesfully!"
            # expect(flash[:info]).to be_present
            # expect(response).to redirect_to(member_path(user))
        end
        it 'if password and confirmation are same and exist and if user does not activate his password' do
            userattr = {:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter23', :password_confirmation =>'byter23',
                                :activated => false }
            # get :update, id: User.last
            # password = @user[:password]
            # password_confirmation = @user[:password_confirmation]
            # user = User.find(@user[:username])
            # password.should_not be_nil
            # password_confirmation.should_not be_nil
            # user.should_not be_nil
            # user.stub(@user.activated?).and_return(false)
            # flash[:danger] = "Password is too short (minimum is 8 characters)."
            # expect(flash[:danger]).to be_present
            # expect(response).to redirect_to(edit_account_activation_path(:id => @user, :email => @user.email))
        end
        it 'if password and confirmation not match' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter', :password_confirmation =>'123',
                                :activated => false, :id => 'byter')
            @user.should be_truthy
            # password = @user[:passowrd]
            # password_confirmation = @user[:password_confirmation]
            # user = User.find_by(username: @user.username)
            # password.should be_nil
            # password_confirmation.should_not be_nil
            # user.should_not be_nil
            # password.should_not be eq password_confirmation
            # flash[:danger] = "Password and password confirmation do not match!"
            # expect(flash[:danger]).to be_present
            # expect(response).to redirect_to(edit_account_activation_path(:id => @token, :email => @user.email))
        end
    end
end
