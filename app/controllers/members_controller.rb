class MembersController < ApplicationController

  def index
    @members = Member.all
  end

  def show
    id = params[:id]
    @member = Member.find_by_id(id)
    if @member == nil
      flash[:danger] = "Member not found"
      redirect_to members_path
    end
  end

  def new
    # only renders 'new' view
  end

  def edit
    id = params[:id]
    @member = Member.find_by_id(id)
    if @member == nil
      flash.now[:danger] = "Member not found"
      redirect_to members_path
    end
  end

  def create
    # generates a temporary password and create user
    temp_password = generate_random_password()
    
    is_admin = (params[:is_admin] == "1") ? true : false
    @user = User.new(:username => params[:username], :is_admin => is_admin, :email => params[:email], 
                       :password => temp_password, :password_confirmation => temp_password)

    if @user.save
      @user.send_activation_email
      flash[:info] = "An e-mail has been sent to the member so that the account can be activated."

      # writing image to the NFS
      avatar_path = Member.write_to_filesystem(params[:avatar], 'uploads/images/')
      
      # writing cv to the NFS
      cv_path = Member.write_to_filesystem(params[:cv], 'uploads/cv/')
      
      # creating member
      member = Member.create(:name => params[:name], :position => params[:position],
                             :telephone => params[:telephone], :fax => params[:fax],
                             :previous_affiliation => params[:previous_affiliation], :bio => params[:bio],
                             :building => params[:building], :office => params[:office],
                             :avatar_path => avatar_path, :cv_path => cv_path)
      
      @user.update_attribute(:member, member)
      
      # removing temp files
      try_delete_tempfile(params[:avatar])
      try_delete_tempfile(params[:cv])
      
      # redirect to the created member page
      redirect_to member_path(member)
    else
      flash[:danger] = "The account could not be created. Please try again."
      redirect_to new_member_path
    end

  end

  def update
    member = Member.find(params[:id])

    is_admin = (params[:is_admin] == "1") ? true : false
    member.user.update_attribute(:is_admin, is_admin)

    # writing avatar and cv to the NFS
    if params[:avatar] != nil
      avatar_path = Member.write_to_filesystem(params[:avatar], 'uploads/images/')
      params[:avatar_path] = avatar_path
    end

    if params[:cv] != nil
      cv_path = Member.write_to_filesystem(params[:cv], 'uploads/cv/')
      params[:cv_path] = cv_path
    end

    member.update_attributes(params)

    # removing temp files
    try_delete_tempfile(params[:avatar])
    try_delete_tempfile(params[:cv])

    # redirecting to profile
    redirect_to member_path(member)
  end

  def destroy
    member = Member.find(params[:id])
    if member != nil
      if logged_in? && current_user.id == member.user.id
        log_out
      end
      member.user.destroy
      member.destroy
      flash.now[:info] = "Member #{member.user.username} deleted successfully"
    end
    redirect_to members_path
  end

  # if there's a temporary file, then delete it
  def try_delete_tempfile(file)
    if file != nil
      tempfile = file.tempfile.path
      if File::exists?(tempfile)
       File::delete(tempfile)
      end
    end
  end

  # generates a random password with size 10
  def generate_random_password
    alphabet = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
    return (0...10).map { alphabet[rand(alphabet.length)] }.join
  end

end
