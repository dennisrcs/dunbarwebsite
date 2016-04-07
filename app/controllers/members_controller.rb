class MembersController < ApplicationController

  def index
    @members = Member.all
  end

  def show
    id = params[:id]
    @member = Member.find(id)
  end

  def new
    # only renders 'new' view
  end

  def create
    # generates a temporary password and create user
    temp_password = generate_random_password()
    user = User.create(:username => params[:username], :email => params[:email], 
                       :password => temp_password, :password_confirmation => temp_password)

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
    user.update_attribute(:member, member)

    # removing temp files
    try_delete_tempfile(params[:avatar])
    try_delete_tempfile(params[:cv])

    # redirect to the created member page
    redirect_to member_path(member)
  end

  # if there's a temporary file, then delete it
  def try_delete_tempfile(file)
    tempfile = file.tempfile.path
    if File::exists?(tempfile)
      File::delete(tempfile)
    end
  end

  # generates a random password with size 10
  def generate_random_password
    alphabet = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
    return (0...10).map { alphabet[rand(alphabet.length)] }.join
  end

end
