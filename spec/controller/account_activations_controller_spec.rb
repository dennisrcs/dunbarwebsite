require 'spec_helper'

describe AccountActivationsController, :type => :controller do
    describe 'edit' do
        it 'should find the user and assign token' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
            user = User.find_by(email: @user[:email])
            @token = @user[:username]
            user.should_not be_nil
            @token.should_not be_nil
        end
        it 'if user does not exist' do
            @user = User.create(:username => nil, :email => nil, :activated => false )
            @user.should be_nil
            user.stub(@user.activated?).and_return(false)
            user.stub(@user.uthenticate?).with(:activation => false, @token => nil).and_return(false)
            @user.should be_nil
        end
    end
    
    describe 'update' do
        it 'should retrieving parameters and if password and confirmation are same and exist and if user activates his password' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user[:username])
            password.should_not be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            user.stub(@user.activated?).and_return(true)
            User.log_in user
            flash[:info] = "Account activated succesfully!"
            expect(flash[:info]).to be_present
            expect(response).to redirect_to(member_path(user))
        end
        it 'should retrieving parameters and if password and confirmation are same and exist and if user does not activate his password' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => false )
            @token = @user[:username]
            @user.should be_truthy
            @token.should be_truthy
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user[:username])
            password.should_not be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            user.stub(@user.activated?).and_return(false)
            flash[:danger] = "Password is too short (minimum is 8 characters)."
            expect(flash[:danger]).to be_present
            expect(response).to redirect_to(:id => @token, :email => @user.email)
        end
        it 'if password and confirmation not match' do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => nil, :password_confirmation =>'123',
                                :activated => false )
            @token = @user[:username]
            @user.should be_truthy
            @token.should be_truthy
            password = @user[:password]
            password_confirmation = @user[:password_confirmation]
            user = User.find(@user[:username])
            password.should be_nil
            password_confirmation.should_not be_nil
            user.should_not be_nil
            password.should_not be eq password_confirmation
            flash[:danger] = "Password and password confirmation do not match!"
            expect(flash[:danger]).to be_present
            expect(response).to redirect_to(:id => @token, :email => @user.email)
        end
end
