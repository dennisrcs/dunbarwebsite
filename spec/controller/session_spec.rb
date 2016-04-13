require 'spec_helper'

describe SessionsController, :type => :controller do
    describe 'login' do
        it 'should create a new session for logged in user' do
            create(:user)
            assert 'sessions/new'
        end
        
        it 'should close the session after 3 seconds of inaction' do
            SessionsController.stub(session_timedout!).and_return(true)
            assert 'session/destroy'
        end
    end
    
    describe 'logout' do
        before :each do
            @m=double(User, :username => "joe", :email => "joe@example.com", :password => "joe123")
            User.stub(:find).with("joe").and_return(@m)
            @m.stub(:log_out!).and_return(true)
        end
        it 'should delete session upon logout' do
            assert 'session/destroy'
        end
        
    end
end
    