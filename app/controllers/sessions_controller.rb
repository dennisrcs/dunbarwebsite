class SessionsController < ApplicationController
 
  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      flash[:info] = "Welcome #{user.username}!"
      redirect_to root_path
    else
      flash.now[:danger] = 'Invalid username/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    flash[:info] = 'You have successfully logged out!'
    redirect_to root_path
  end
  
end
