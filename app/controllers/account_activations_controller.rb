class AccountActivationsController < ApplicationController

  def edit
    @user = User.find_by(email: params[:email].downcase)
    @token = params[:id]
    if !@user || @user.activated? || !@user.authenticated?(:activation, @token)
      @user = nil
    end
  end

  def update
    # retrieving parameters
    password = params[:password]
    password_confirmation = params[:password_confirmation]
    user = User.find(params[:id])

    if password != nil && password_confirmation != nil && password == password_confirmation
      if user.activate?(password)
        log_in user
        flash[:info] = "Account activated succesfully!"
        redirect_to member_path(user)
      else
        flash[:danger] = "Password is too short (minimum is 8 characters)."
        redirect_to edit_account_activation_path(:id => params[:token], :email => user.email)
      end
    else
      flash[:danger] = "Password and password confirmation do not match!"
      redirect_to edit_account_activation_path(:id => params[:token], :email => user.email)
    end
  end

end
