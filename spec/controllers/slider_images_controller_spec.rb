require 'spec_helper'

describe SliderImagesController, :type =>:controller do
    describe 'index' do
        it 'should render a template' do
            get :index
            expect(response).to render_template('index')
            expect(response.body).to eq("")
        end
    end
  
  describe 'show' do
      #nothing to be done
  end
  
  describe 'new' do
      #nothing to be done
  end
  
  describe 'edit' do
      before :each do
              @sliderImage = create(:sliderImage)
              @sliderImage.should be_truthy
          end
      it 'should find existing slide' do
          get :edit, id: @sliderImage
      end
  end
  
  describe 'create' do
      it 'should create a new slide' do
          post :create
          subject.send(:try_delete_tempfile, SliderImage.last[:slider_image_picture])
          expect(response).to redirect_to(slider_images_path)
      end
  end
  
  describe 'destroy' do
      before :each do
              @sliderImage = create(:sliderImage)
              @sliderImage.should be_truthy
          end
      it 'should destroy existing slide' do
          get :destroy, id: @sliderImage
          expect(response).to redirect_to slider_images_path
      end
  end
  
  describe 'update' do
      before :each do
              @sliderImage = create(:sliderImage)
              @sliderImage.should be_truthy
     end
      it 'should successfully update a slide' do
          get :update, id: @sliderImage
          expect(flash.now[:info] = "The slide was successfully updated.").to be_present
          expect(response).to redirect_to slider_images_path
      end  
  end
end