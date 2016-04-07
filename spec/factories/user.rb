FactoryGirl.define do
  factory :user do |user|
      user.username{"auser"}
      user.email{"user_#{rand(1000).to_s}@factory.com" }
      user.password{"secret123"}
  end
end