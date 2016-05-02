class GroupInfosController < ApplicationController
  
  def index
    @group_infos = GroupInfo.all
  end

  def new
    # only renders 'new' view
  end

  def edit
    @group_info = GroupInfo.find params[:id]
  end

  def create
    # writing file to the NFS
    
    is_restricted = (params[:is_restricted] == "1" || params[:is_restricted] == "on") ? true : false
    file_path = GroupInfo.write_to_filesystem(params[:file], 'uploads/group_info/')
    group_info = GroupInfo.new(:title => params[:title], :is_restricted => is_restricted, :file_path => file_path)

    if group_info.save
      flash[:info] = "Group info successfully added!"
    else
      flash[:danger] = "A problem occurred when trying to add a new group info!"
    end
    
    try_delete_tempfile(params[:file])
    redirect_to group_infos_path
  end

  def update
    group_info = GroupInfo.find(params[:id])

    is_restricted = (params[:is_restricted] == "1" || params[:is_restricted] == "on") ? true : false
    # writing avatar and cv to the NFS
    if params[:file] != nil
      file_path = GroupInfo.write_to_filesystem(params[:file], 'uploads/group_info/')
      params[:file_path] = file_path
    end

    # update attributes and try deleting temp file
    group_info.update_attributes(params)
    try_delete_tempfile(params[:file])
   
    # redirect to group info index
    redirect_to group_infos_path
  end

  def destroy
    group_info = GroupInfo.find(params[:id])
    if group_info != nil
      group_info.destroy
      flash[:info] = "Group info entitled #{group_info.title} was deleted successfully!"
    end
    redirect_to group_infos_path
  end

  #if there's a temporary file, then delete it
  def try_delete_tempfile(file)
    if file != nil
      tempfile = file.tempfile.path
      if File::exists?(tempfile)
        File::delete(tempfile)
      end
    end
  end

end
