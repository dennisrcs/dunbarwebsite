class PasswordResetsController < ApplicationController
  before_action :get_user,   only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]

  def new
  end

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = "Email sent with password reset instructions"
      redirect_to root_url
    else
      flash.now[:danger] = "Email address not found"
      render 'new'
    end
  end

  def edit
    @token = params[:id]
  end

  def update
    password = params[:user][:password]
    password_confirmation = params[:user][:password_confirmation]

    if password != nil && password_confirmation != nil && password == password_confirmation
      if @user.activate?(password)
        log_in @user
        flash[:info] = "Password reset successfully!"
        redirect_to members_path
      else
        flash[:danger] = "Password is too short (minimum is 8 characters)."
        redirect_to edit_password_reset_path(:id => params[:token], :email => @user.email)
      end
    else
      flash[:danger] = "Password and password confirmation do not match!"
      redirect_to edit_password_reset_path(:id => params[:token], :email => @user.email) 
    end
  end

  private

    def user_params
     params.require(:user).permit(:password, :password_confirmation)
    end

    # Before filters
    def get_user
     @user = User.find_by(email: params[:email])
    end
  
   # Confirms a valid user.
   def valid_user
     unless (@user && @user.activated? && @user.authenticated?(:reset, params[:id]))
       redirect_to root_url
     end
    end
  
    # Checks expiration of reset token.
    def check_expiration
     if @user.password_reset_expired?
       flash[:danger] = "Password reset has expired."
       redirect_to new_password_reset_url
     end
    end

end
