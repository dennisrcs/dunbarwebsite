require 'spec_helper'

describe AnnouncementsController, :type => :controller do
    describe 'index' do
        it 'renders the announcement template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end
    
    describe 'new' do
    end
    
    describe 'create' do
        before (:each) do
            @announcements = New.create(:content => 'this is the announcements',
                               :date => Time.zone.now)
            @announcements.should be_truthy
        end
        it 'should create a announcements' do
            post :create
            expect(response).to redirect_to(announcements_path)
        end
    end
    
    # describe 'show' do
    #     it 'should do for existing announcements' do
    #         @announcements = New.create(:content => 'this is the announcements')
    #         @announcements.should be_truthy
    #         get :show, id: @announcements
    #         id = @announcements[:id]
    #         announcements = New.find_by_id(@announcements)
    #         announcements.should be_truthy
    #     end
    #     # it 'should do for nil announcements' do
    #     #     # @announcements = New.create(:content => 'unexisting announcements')
    #     #     # announcements = New.find_by_id(@announcements)
    #     #     # announcements.should be_nil
    #     #     flash[:danger] = "announcement not found"
    #     #     get :show, id: @announcements
    #     #     expect(flash[:danger]).to be_present
    #     #     expect(response).to redirect_to(announcements_path)
    #     # end
    # end
    
    describe 'destroy' do
        before (:each) do
            @announcements = New.create(:content => 'this is the announcements')
            @announcements.should be_truthy
        end
        it 'should find the announcements and destroy it' do
            announcements = New.find(@announcements)
            announcements.should be_truthy
            flash[:notice] = "News '#{@announcements.content}' deleted."
            expect(flash[:notice]).to be_present
            get :destroy, id: @announcements
            expect(response).to redirect_to(announcements_path)
        end
    end
    
    describe 'update' do
        before (:each) do
            @announcements = New.create(:content => 'this is the announcements')
            @announcements.should be_truthy
        end
        it 'should find the announcements and update content' do
            announcements = New.find(@announcements)
            announcements.should be_truthy
            get :update, id: @announcements
            response.should redirect_to(announcements_path)
        end
    end
    # describe 'mercury_update' do
    #     before (:each) do
    #         @announcements = New.create(:content => 'this is the announcements')
    #         @announcements.should be_truthy
    #     end
    #     it 'should find the announcements and update content' do
    #         announcements = New.find(@announcements)
    #         announcements.should be_truthy
    #         get :mercury_update, id: @announcements
    #         response.body.should == ""
    #     end
    # end
end



