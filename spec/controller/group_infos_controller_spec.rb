require 'spec_helper'

describe GroupInfosController, :type => :controller do
    describe 'index' do
        it 'renders the new template' do
            get :index
            expect(response).to render_template('index')
            expect(response.body).to eq ""
        end
    end
    
    describe 'new' do
        it 'should' do
        end
    end
    
    describe 'edit' do
        before (:each) do
            @group_info = GroupInfo.new(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => 'uploads/group_info/')
            @group_info.should be_truthy
        end
        it 'should find the group_info' do
            get :edit, id: @group_info
            group_info = GroupInfo.find_by(@group_info)
            group_info.should_not be_nil
        end
    end
    
    describe 'create' do
        before (:each) do
            @group_info = GroupInfo.new(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => 'uploads/group_info/')
            @group_info.should be_truthy
        end
        it 'should create a new research group' do
            post :create
            is_restricted = @group_info[:is_restricted]
            is_restricted.should be_truthy
            file_path = GroupInfo.write_to_filesystem(@group_info[:file], 'uploads/group_info/')
            file_path.should be_truthy
            group_info = GroupInfo.new(:title => @group_info[:title],
                                       :is_restricted => @group_info[:is_restricted],
                                       :file_path => @group_info[:file_path])
            group_info.should_not be_nil
        end
        it 'if group_info saved' do
            flash[:info] = "Group info successfully added!"
            expect(flash[:info]).to be_present
            flash[:danger] = "A problem occurred when trying to add a new group info!"
            expect(flash[:danger]).to be_present
        end
        it 'should redirect_to group_infos_path'do
            expect(response).to redirect_to(group_infos_path)
        end
    end
    
    describe 'update' do
        before (:each) do
            @group_info = GroupInfo.new(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => 'uploads/group_info/')
            @group_info.should be_truthy
        end
        it 'should find the research group_info' do 
            
        end
    end
end