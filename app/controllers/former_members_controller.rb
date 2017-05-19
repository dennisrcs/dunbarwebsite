class FormerMembersController < ApplicationController
   
  def new
    @categories = FormerMember.categories_list
  end

  def create
    former_member_id = params[:id]
    former_member = FormerMember.new(:description => params[:description], :category => params[:category], :year => params[:year])

    if former_member.save
      flash[:info] = "Former member successfully added!"
    else
      flash[:danger] = "A problem occurred when adding former member."
    end
    redirect_to members_path
  end

  def update
    former_member = FormerMember.find(params[:id])
    former_member.update_attributes!(:description => params[:description], :category => params[:category], :year => params[:year])
    flash.now[:info] = "The news was successfully updated."
    redirect_to members_path
  end

  def destroy
    former_member = FormerMember.find(params[:id])
    former_member.destroy
    flash[:info] = "Former member deleted."
    redirect_to members_path
  end  

  def edit
    @former_member = FormerMember.find_by_id(params[:id])
    @categories = FormerMember.categories_list
    if @former_member == nil
      flash.now[:danger] = "Former member not found"
      redirect_to members_path
    end 
  end
end
