require 'spec_helper'

describe NewsController, :type => :controller do
    describe 'index' do
        it 'renders the new template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end
    
    describe 'new' do
    end
    
    describe 'create' do
        before (:each) do
            @news = New.create(:content => 'this is the news',
                               :date => Time.zone.now)
            @news.should be_truthy
        end
        it 'should create a news' do
            post :create
            expect(response).to redirect_to(news_path(New.last))
        end
    end
    
    describe 'show' do
        it 'should do for existing news' do
            @news = New.create(:content => 'this is the news')
            @news.should be_truthy
            get :show, id: @news
            id = @news[:id]
            news = New.find_by_id(@news)
            news.should be_truthy
        end
        # it 'should do for nil news' do
        #     # @news = New.create(:content => 'unexisting news')
        #     # news = New.find_by_id(@news)
        #     # news.should be_nil
        #     flash[:danger] = "new not found"
        #     get :show, id: @news
        #     expect(flash[:danger]).to be_present
        #     expect(response).to redirect_to(news_path)
        # end
    end
    
    describe 'destroy' do
        before (:each) do
            @news = New.create(:content => 'this is the news')
            @news.should be_truthy
        end
        it 'should find the news and destroy it' do
            news = New.find(@news)
            news.should be_truthy
            flash[:notice] = "News '#{@news.content}' deleted."
            expect(flash[:notice]).to be_present
            get :destroy, id: @news
            expect(response).to redirect_to(root_path)
        end
    end
    
    describe 'update' do
        before (:each) do
            @news = New.create(:content => 'this is the news')
            @news.should be_truthy
        end
        it 'should find the news and update content' do
            news = New.find(@news)
            news.should be_truthy
            get :update, id: @news
            response.body.should == ""
        end
    end
    describe 'mercury_update' do
        before (:each) do
            @news = New.create(:content => 'this is the news')
            @news.should be_truthy
        end
        it 'should find the news and update content' do
            news = New.find(@news)
            news.should be_truthy
            get :mercury_update, id: @news
            response.body.should == ""
        end
    end
end



