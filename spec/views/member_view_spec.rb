 #should be tested in the views I guess
        
        # it 'a non admin does not create a member' do
        #     stub(:current_user_admin?).and_return(false)
        #     user = User.create!(@userattr)
        #     member = Member.create!(@memberattr)
        #     user.stub(:update_attribute).with(:member, member)
        #     member.user.should be_falsey
        # end
        
        # it 'an admin creates a member' do
        #     stub(:current_user_admin?).and_return(true)
        #     user = User.create!(@userattr)
        #     member = Member.create!(@memberattr)
        #     user.stub(:update_attribute).with(:member, member)
        #     member.should_not be_nil
        #     member.user.should_not be_nil
        # end