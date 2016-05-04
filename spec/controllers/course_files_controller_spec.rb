require 'spec_helper'

describe CourseFilesController, :type => :controller do
    describe 'new' do
        before :each do
            @course = Course.create(:name => "chem101")
        end
        it 'renders the new template' do
            get :new, {:course_id => @course}
            expect(response).to render_template("new")
            expect(response.body).to eq ""
        end
    end
    
    describe 'create' do
        before :each do
            @course = Course.create(:name => "chem101")
        end
        it 'should redirect to the new file' do
            post :create, {:course_id => @course}
            expect(response).to redirect_to (course_path(@course))
        end
    end
    
    describe 'destroy' do
        before :each do
            @course = Course.create(:name => "chem101")
            @course_file = CourseFile.create(:name => "study guide", :file_path => "/uploads/courses/qualifying.pdf", :file_type => :notes)
        end
        it 'should delete existing file' do
            get :destroy, {:course_id => @course, :id => @course_file}
            expect(response).to redirect_to (course_path(@course))
        end
    end
end