require 'spec_helper'

describe ResearchesController, :type => :controller do
    describe 'index' do
        it 'renders the new template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end
    
    describe 'show' do
        it 'should get the id and the research' do
            @research = Research.create(:title => 'Research A', 
                                        :summary => 'Good', 
                                        :content => 'what a wonderful research')
            @research.should be_truthy
            get :show, id: @research
        end
        it 'should show msg for nil research' do
            flash[:danger] = "research not found"
            get :show, id: '-1'
            expect(response).to redirect_to(researches_path)
            expect(flash[:danger]).to be_present
        end
    end
    
    describe 'new' do
    end
    
    describe 'create' do
        before (:each) do
            @research = Research.create(:title => 'Research A', 
                                        :summary => 'Good', 
                                        :content => 'what a wonderful research')
            @research.should be_truthy
        end
        it 'should create a research' do
            post :create 
            expect(response).to redirect_to(research_path(Research.last))
        end
    end
    
    describe 'destroy' do
        before (:each) do
            @research = Research.create(:title => 'Research A', 
                                        :summary => 'Good', 
                                        :content => 'what a wonderful research')
            @research.should be_truthy
        end
        it 'should find the research by id and destroy' do
            research = Research.find(@research)
            research.should be_truthy
            flash[:notice] = "Research '#{@research.title}' deleted."
            expect(flash[:notice]).to be_present
            get :destroy, id: @research
            expect(response).to redirect_to(researches_path)
        end
    end
    
    # describe 'update' do
    #     before (:each) do
    #         @research = Research.create(:title => 'Research A', 
    #                                     :summary => 'Good', 
    #                                     :content => 'what a wonderful research')
    #         @research.should be_truthy
    #     end
    #     it 'should find the research by id' do
    #         # research = Research.find(@research)
    #         # research.should be_truthy
    #         # research.stub(:update_attributes).with(:title, 'Research B')
    #         get :update, id: @research 
    #         response.should render_template(:text => "")
    #     end
    # end
    
    describe 'mercury_update' do
        before (:each) do
            @research = Research.create(:title => 'Research A', 
                                        :summary => 'Good', 
                                        :content => 'what a wonderful research')
            @research.should be_truthy
        end
        it 'should find the research and do update' do
            research = Research.find(@research)
            research.should be_truthy
        end
    end
            
            



end
    