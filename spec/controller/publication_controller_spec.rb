require 'spec_helper'


describe PublicationsController, :type => :controller do
    describe "inxex" do
        it 'renders the new template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end
        
    describe "create" do
        before (:each) do
            @publication = create(:publication)
            @publication.should be_truthy
        end
        it "shoulld create a new publication" do
            post :create 
            expect(response).to redirect_to(publications_path)
        end
        it 'should delete temporary files' do
            @publication.should be_truthy
            subject.send(:try_delete_tempfile, (@publication[:publication_picture]))
        end
    end
    
    describe 'edit' do
        it 'should render the edit template for existing publication' do
            publication = create(:publication)
            publication.should be_truthy
            publication[:article].should eq 'How to code'
            get :edit, id: publication
            edpublication = Publication.find_by_id(publication)
            edpublication.should_not be nil
            edpublication[:article].should eq 'How to code'
        end
    end
    
    describe 'destroy' do
        before (:each) do
            @publication = create(:publication)
            @publication.should be_truthy
        end
        it 'should destroy the existing publication'do
            get :destroy, id: @publication
            expect(response).to redirect_to(publications_path)
        end
    end
    
    describe 'update' do
        before (:each) do
            @publication = create(:publication)
            @publication.should be_truthy
        end
        it 'should find the existing publication'do
            publication = Publication.stub(:find).with(@publication)
            publication.should_not be_nil
        end
        it 'should check whether the publication exist, and update existing publication'do
            get :update, id: @publication
            expect(response).to redirect_to(publications_path)
            @publication.stub(:update_attributes).and_return(@newartical)
            @newartical =~ 'How to code2'
            @publication.should be_truthy
            subject.send(:try_delete_tempfile, (@publication[:publication_picture]))
        end
        it 'should update some attributes in existing publication' do
            @publication.stub(:update_attributes).and_return(@newartical)
            @newartical =~ 'How to code2'
            #add more
        end
        it 'should show up a msg' do
            flash.now[:success] = "The Article was successfully updated."
            expect(flash.now[:success]).to be_present
        end
        it 'should redirect to publications_path' do
            get :update, id: @publication
            expect(response).to redirect_to(publications_path)
        end
    end

end