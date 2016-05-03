# require 'spec_helper'

# describe PasswordResetsController, :type =>:controller do
#     describe 'new' do
#     end

#   request_create = proc do
#     post :create, :email => Factory(:user).email
#   end

#   request_edit = proc do
#     get :edit, :id => Factory(:user).perishable_token
#   end

#   request_update = proc do
#     @user = Factory(:user)
#     put :update, :id => @user.perishable_token, :user => { :password => "newpassword" }
#   end

#   # Remove these if you don't want to include the Shoulda macros
#   should_require_no_user "on GET to :new", &request_new
#   should_require_no_user "on POST to :create", &request_create
#   should_require_no_user "on GET to :edit", &request_edit
#   should_require_no_user "on PUT to :update", &request_update

#   context "when not logged in" do
#     context "on GET to :new" do
#       setup &request_new

#       should_respond_with :success
#       should_render_template :new
#     end

#     context "on POST to :create" do
#       setup &request_create

#       should_assign_to :user
#       should_respond_with :redirect
#       should_redirect_to("the root path") { root_path }
#       should "send an email" do
#         assert_sent_email
#       end
#     end

#     context "on GET to :edit" do
#       setup &request_edit

#       should_assign_to :user
#       should_respond_with :success
#       should_render_template :edit
#     end

#     context "on PUT to :update" do
#       setup &request_update

#       should_assign_to :user
#       should_respond_with :redirect
#       should_redirect_to("the users profile") { @user }
#     end
#   end
# end