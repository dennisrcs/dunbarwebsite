# This file should contain all the record creation needed to seed the database with its default values
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(:username => 'byter', :is_admin => true, :email => 'byters606@googlegroups.com', :password => 'byter123', :password_confirmation => 'byter123')
member1 = Member.create(:name => 'Santa', :position => 'PhD Student', :telephone => '321321321', :fax => '123123123', :previous_affiliation => 'University of Nowhere', 
                        :bio => 'Hey, this is me, Santa! :)', :building => 'Bright building', :office => 'Basement',
                        :avatar_path => '/uploads/images/santa.png', :cv_path => '/uploads/cv/cv.pdf')
user1.update_attribute(:member, member1)

user2 = User.create(:username => 'bender', :is_admin => false, :email => 'bender@gmail.com', :password => 'bender123', :password_confirmation => 'bender123')
member2 = Member.create(:name => 'Bender', :position => 'MSc Student', :telephone => '1111111111', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Bender! :)', :building => 'Bright building', :office => '1st Floor',
                        :avatar_path => '/uploads/images/bender.png', :cv_path => '/uploads/cv/cv.pdf')
user2.update_attribute(:member, member2)

user3 = User.create(:username => 'calculon', :is_admin => false, :email => 'calculon@gmail.com', :password => 'calculon123', :password_confirmation => 'calculon123')
member3 = Member.create(:name => 'Calculon', :position => 'PhD Student', :telephone => '2222222222', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Calculon! :)', :building => 'Bright building', :office => '2nd Floor',
                        :avatar_path => '/uploads/images/calculon.png', :cv_path => '/uploads/cv/cv.pdf')
user3.update_attribute(:member, member3)

user4 = User.create(:username => 'devil', :is_admin => false, :email => 'devil@gmail.com', :password => 'devil123', :password_confirmation => 'devil123')
member4 = Member.create(:name => 'Devil', :position => 'Professor', :telephone => '3333333333', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Devil! :)', :building => 'Bright building', :office => '3rd Floor',
                        :avatar_path => '/uploads/images/devil.png', :cv_path => '/uploads/cv/cv.pdf')
user4.update_attribute(:member, member4)

user5 = User.create(:username => 'police', :is_admin => false, :email => 'police@gmail.com', :password => 'police123', :password_confirmation => 'police123')
member5 = Member.create(:name => 'Police', :position => 'Phd Student', :telephone => '4444444444', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Police! :)', :building => 'Bright building', :office => '4th Floor',
                        :avatar_path => '/uploads/images/police.png', :cv_path => '/uploads/cv/cv.pdf')
user5.update_attribute(:member, member5)

user6 = User.create(:username => 'roberto', :is_admin => false, :email => 'roberto@gmail.com', :password => 'roberto123', :password_confirmation => 'roberto123')
member6 = Member.create(:name => 'Roberto', :position => 'Undergraduate Student', :telephone => '5555555555', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Roberto! :)', :building => 'Bright building', :office => '5th Floor',
                        :avatar_path => '/uploads/images/roberto.png', :cv_path => '/uploads/cv/cv.pdf')
user6.update_attribute(:member, member6)


