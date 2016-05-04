require 'spec_helper'

describe CoursesController, :type => :controller do
    describe 'index' do
        it 'renders the new template' do
            get :index
            expect(response).to render_template("index")
            expect(response.body).to eq ""
        end
    end
    
    describe 'create' do
        it 'should create a new course and redirect to it' do
            post :create
            expect(response).to redirect_to(course_path(Course.last))
        end
    end
    
    describe 'show' do
        before :each do
            @course = Course.create(:name => "chem101")
            
        end
        it 'should show existing course' do
            get :show, id: @course
            expect(response.body).to include("")
        end
        
        it 'should notify missing course' do
            get :show, id: '-1'
            expect(response).to redirect_to(courses_path)
            expect(flash[:danger] = "Course could not be found.").to be_present
        end
    end
    
    describe 'destroy' do
        before :each do
            @course = Course.create(:name => "chem101")
        end
        it 'should delete existing course' do
            get :destroy, id: @course
            expect(response).to redirect_to(courses_path)
        end
    end
    
    describe 'update' do
        before :each do
            @course = Course.create(:name => "chem101")
            flash[:info] = "Course #{@course.name} updated successfully!"
        end
        it 'should update existing file' do
            get :update, id: @course
            expect(response).to redirect_to(course_path(@course))
            expect(flash[:info]).to be_present
        end
    end
end