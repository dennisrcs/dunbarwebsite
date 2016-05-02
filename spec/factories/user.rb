FactoryGirl.define do
  factory :user do |user|
      user.username{"byter"}
      user.email{"user_#{rand(1000).to_s}@factory.com"}
      user.password{"byter123"}
      user.password_confirmation{"byter123"}
      
      after(:create) do |user|
        user.member ||= FactoryGirl.create(:member, :user => user)
      end
  end
  factory :member do |member|
    member.name{"Amember"}
    member.position{"Undergraduate Student"}
    member.telephone{"5555555555'"}
    member.fax{"0000000000"} 
    member.previous_affiliation{"Futurama"}
    member.bio{"Hey, my name is Roberto!"}
    member.building{"Bright building"}
    member.office{"5th Floor"}
    member.avatar_path{"uploads/images/roberto.png"} 
    member.cv_path{"uploads/cv/cv.pdf"}
    
    after(:create) do |member|
      member.user ||= FactoryGirl.create(:user, :member => member)
    end
  end
end