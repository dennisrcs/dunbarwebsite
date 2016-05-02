require 'spec_helper'

describe StaticPagesController < ActionController do

  it "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Home | Welcome to Dunbar's Website"
  end

  it "should get help" do
    get :publications
    assert_response :success
    assert_select "title", "Publications"
  end

  it "should get about" do
    get :members
    assert_response :success
    assert_select "title", "People"
  end
end
