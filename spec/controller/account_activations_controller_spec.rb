require 'spec_helper'

describe AccountActivationsController, :type => :controller do
    describe 'edit' do
        before (:each) do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
        end
        it 'should find the user and assign token' do
            user = User.find_by(email: @user[:email])
            get :edit, id: @user
            @token = @user[:password]
            @token.should_not be_nil
            @user.stub(:activated?).and_return(true)
            @user.stub(:authenticate).with(user[:password]).and_return true
        end
    end
    
    describe 'update' do
        it 'if password and confirmation are same and exist and if user activates his password' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
            get :update, id: @user
            # @token = @user[:username]
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user[:username])
            password.should_not be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            user.stub(:activated?).with(user[:password]).and_return(true)
            User.log_in user
            flash[:info] = "Account activated succesfully!"
            expect(flash[:info]).to be_present
            expect(response).to redirect_to(member_path(user))
        end
        it 'if password and confirmation are same and exist and if user does not activate his password' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => false )
            @user.should be_truthy
            get :update, id: @user
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user[:username])
            password.should_not be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            user.stub(@user.activated?).and_return(false)
            flash[:danger] = "Password is too short (minimum is 8 characters)."
            expect(flash[:danger]).to be_present
            expect(response).to redirect_to(edit_account_activation_path(:id => @user, :email => @user.email))
        end
        it 'if password and confirmation not match' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => nil, :password_confirmation =>'123',
                                :activated => false, :id => 'byter')
            @user.should be_truthy
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user.id)
            password.should be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            password.should_not be eq password_confirmation
            flash[:danger] = "Password and password confirmation do not match!"
            expect(flash[:danger]).to be_present
            expect(response).to redirect_to(edit_account_activation_path(:id => @token, :email => @user.email))
        end
    end
end
