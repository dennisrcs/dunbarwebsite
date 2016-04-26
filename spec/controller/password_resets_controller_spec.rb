require 'spec_helper'

describe PasswordResetsController, :type =>:controller do
    describe 'new' do
    end
    
    describe 'create' do
        it 'should create user params' do
            user = User.create(user_params)
            user.should_not be_nil
        end
    end
    
    describe 'create' do
        before (:each) do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
        end
        it 'should find the user by email' do
            user = User.find_by(email: @user[:email])
            post :create, password_reset: {email: user[:email], password: user[:password]}
            user.should_not be nil
        end
        it 'user exist' do
            user = User.find_by(email: @user[:email])
            post :create, password_reset: {email: user[:email], password: user[:password]}
            @user.stub(:create_reset_digest)
            @user.stub(:send_password_reset_email)
            flash[:info] = "Email sent with password reset instructions"            
            expect(flash[:info]).to be_present
            expect(response).to redirect_to(root_url)
        end
        it 'user does not exist' do
            user = User.find_by(email: @user[:email])
            post :create, password_reset: {email: "invalidemail", password: 'invalidpassword'}
            flash.now[:danger] = "Email address not found"
            expect(flash.now[:danger]).to be_present
            expect(response).to render_template(password_resets_path(:new))
        end

    end
    
    describe 'edit' do
        before (:each) do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123')
            @user.should be_truthy
        end
        it 'should show existing id' do
            get :edit, id: @user[:email]
            @token = @user[:email]
            @token.should_not be_nil
        end
    end
    
    describe 'update' do
        before (:each) do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
            @user.should be_truthy
            @token = @user[:email]
        end
        it 'password and password_confirmation are same, user is activated' do
            user = User.find_by(email: @user[:email])
            password = user[:password]
            password_confirmation = user[:password_confirmation]
            expect(password).to eq 'byter123'
            expect(password_confirmation).to eq 'byter123'
            @user.stub(:activate).and_return(true)
            User.log_in @user
            flash[:info] = "Password reset successfully!"
            expect(flash[:info]).to be_present
            get :update, id: @user
            expect(response).to redirect_to(member_path(@user))
        end
        it 'password and password_confirmation are same, user is not activated' do
            flash[:danger] = "Password is too short (minimum is 8 characters)."
            expect(flash[:danger]).to be_present
            get :update, id: @user
            expect(response).to redirect_to(:id => @token, :email => @user[:email])
        end
        it 'password and password_confirmation are nil' do
            flash[:danger] = "Password and password confirmation do not match!"
            expect(flash[:danger]).to be_present
            get :update, id: @user
            expect(response).to redirect_to(:id => @token, :email => @user[:email])
        end
    end
    
    describe 'user_params' do
        before (:each) do
            user_params = {:username => "byter",
                     :email => "byter@gmail.com",
                     :password => "byter123",
                     :password_confirmation => "byter123"
                     }
            @user = User.create(user_params)
        end
        it 'user parameters' do
            params.require(@user)
            params.permit(:password, :password_confirmation)
        end
    end
    
    describe 'check_expiration' do
        before (:each) do
            @user = User.create(:username => 'byter', :email => 'byter@gmail.com',
                                :password => 'byter123', :password_confirmation =>'byter123',
                                :activated => true, :activated_at => Time.zone.now)
        end
        it 'should show for expired' do
            @user.stub(password_reset_expired?).and_return true
            flash[:danger] = "Password reset has expired."
            expect(flash[:danger]).to be_present
            get :check_expiration, id: @user
            expect(response).to redirect_to(new_password_reset_url)
        end
    end

         
            
end