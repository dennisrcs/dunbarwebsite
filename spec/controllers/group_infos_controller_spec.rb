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
            @group_info.save
            @group_info.should be_truthy
        end
        it 'should find the group_info' do
            get :edit, id: @group_info.id
            group_info = GroupInfo.find(@group_info.id)
            group_info.should_not be_nil
        end
    end
    
    describe 'create' do
        before (:each) do
            @group_info = GroupInfo.create(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => '/uploads/group_info/rules.pdf')
            @group_info.should be_truthy
        end
        it 'should create a new research group' do
            post :create
            expect(response).to redirect_to(group_infos_path)
        end
    end
    
    describe 'update' do
        before (:each) do
            @group_info = GroupInfo.create(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => 'uploads/group_info/',
                                        :file => 'a.pdf')
            @group_info.should be_truthy
        end
        it 'should find the research group_info' do 
            group_info = GroupInfo.find(@group_info)
            group_info.should be_truthy
            is_restricted = @group_info[:is_restricted]
        end
        it 'should check file and update' do
            get :update, id: @group_info
            expect(response).to redirect_to(group_infos_path)
        end
    end
    
    describe 'destroy' do
        before (:each) do
            @group_info = GroupInfo.create(:title => 'A Research', 
                                        :is_restricted => 'on', 
                                        :file_path => 'uploads/group_info/',
                                        :file => 'a.pdf')
            @group_info.should be_truthy
        end
        it 'should get group_info, check, and destroy'do
            get :destroy, id: @group_info
            expect(response).to redirect_to(group_infos_path)
        end
    end

            
end