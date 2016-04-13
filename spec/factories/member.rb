FactoryGirl.define do
  factory :member do |member|
    member.name{"Roberto"}
    member.position{"Undergraduate Student"} 
    member.telephone{"5555555555"} 
    member.fax{"0000000000"} 
    member.previous_affiliation{"Futurama"}
    member.bio{"Hey, my name is Roberto!"} 
    member.building{"Bright building"} 
    member.office{"5th Floor"}
    member.avatar_path{"/uploads/images/roberto.png"} 
    member.cv_path{"/uploads/cv/cv.pdf"}
  end
end