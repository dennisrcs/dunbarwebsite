# This file should contain all the record creation needed to seed the database with its default values
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users seed
user1 = User.create(:username => 'byter', :is_admin => true, :activated => true, :activated_at => Time.zone.now, :email => 'byters606@googlegroups.com', :password => 'byter123', :password_confirmation => 'byter123')
member1 = Member.create(:name => 'Santa', :position => 'PhD Student', :researcherid => "F-5384-2011", :telephone => '321321321', :fax => '123123123', :previous_affiliation => 'University of Nowhere', 
                        :bio => 'Hey, this is me, Santa! :)', :building => 'Bright building', :office => 'Basement',
                        :avatar_path => '/uploads/images/dennis.png', :cv_path => '/uploads/cv/cv.pdf')
user1.update_attribute(:member, member1)

user2 = User.create(:username => 'bender', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'bender@gmail.com', :password => 'bender123', :password_confirmation => 'bender123')
member2 = Member.create(:name => 'Bender', :position => 'MSc Student', :telephone => '1111111111', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Bender! :)', :building => 'Bright building', :office => '1st Floor',
                        :avatar_path => '/uploads/images/diego.png', :cv_path => '/uploads/cv/cv.pdf')
user2.update_attribute(:member, member2)

user3 = User.create(:username => 'calculon', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'calculon@gmail.com', :password => 'calculon123', :password_confirmation => 'calculon123')
member3 = Member.create(:name => 'Calculon', :position => 'PhD Student', :telephone => '2222222222', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Calculon! :)', :building => 'Bright building', :office => '2nd Floor',
                        :avatar_path => '/uploads/images/diane.png', :cv_path => '/uploads/cv/cv.pdf')
user3.update_attribute(:member, member3)

user4 = User.create(:username => 'devil', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'devil@gmail.com', :password => 'devil123', :password_confirmation => 'devil123')
member4 = Member.create(:name => 'Devil', :position => 'Undergraduate', :telephone => '3333333333', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Devil! :)', :building => 'Bright building', :office => '3rd Floor',
                        :avatar_path => '/uploads/images/irving.png', :cv_path => '/uploads/cv/cv.pdf')
user4.update_attribute(:member, member4)

user5 = User.create(:username => 'police', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'police@gmail.com', :password => 'police123', :password_confirmation => 'police123')
member5 = Member.create(:name => 'Police', :position => 'Professor', :researcherid => 'B-6488-2015', :telephone => '4444444444', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Police! :)', :building => 'Bright building', :office => '4th Floor',
                        :avatar_path => '/uploads/images/bozhen.png', :cv_path => '/uploads/cv/cv.pdf')
user5.update_attribute(:member, member5)

user6 = User.create(:username => 'roberto', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'roberto@gmail.com', :password => 'roberto123', :password_confirmation => 'roberto123')
member6 = Member.create(:name => 'Roberto', :position => 'Undergraduate Student', :telephone => '5555555555', :fax => '0000000000', :previous_affiliation => 'Futurama',
                        :bio => 'Hey, my name is Roberto! :)', :building => 'Bright building', :office => '5th Floor',
                        :avatar_path => '/uploads/images/xuesu.png', :cv_path => '/uploads/cv/cv.pdf')
user6.update_attribute(:member, member6)

# publications seed
publication1 = Publication.create(:article => "Sequence-Dependent Guest Release Triggered by Orthogonal Chemical Signals", :contributors => "Ana M. Castilla, Tanya K. Ronson, and Jonathan R. Nitschke", :journal => "J. Am. Chem. Soc.", :year => "2016", :more_info => "138", :pages => "2342–2351", :publication_picture => "/uploads/publications/pub4.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b13016")

publication3 = Publication.create(:article => "Subcomponent Flexibility Enables Conversion between D4-Symmetric CdII8L8 and T-Symmetric CdII4L4 Assemblies", :contributors => "Jesús Mosquera, Tanya K. Ronson, and Jonathan R. Nitschke", :journal => "J. Am. Chem. Soc.", :year => "2016", :more_info => "138", :pages => "1812–1815", :publication_picture => "/uploads/publications/pub3.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b12955")

publication3 = Publication.create(:article => "Catenation and encapsulation induce distinct reconstitutions within a dynamic library of mixed-ligand Zn4L6 cages", :contributors => "Samuel P. Black,   Daniel M. Wood,   Felix B. Schwarz, Tanya K. Ronson,   Julian J. Holstein,   Artur R. Stefankiewicz, Christoph A. Schalley,   Jeremy. K. M. Sanders and  Jonathan R. Nitschke", :journal => "Chem. Sci.", :year => "2016", :more_info => "7", :pages => "2614-2620", :publication_picture => "/uploads/publications/pub1.gif", :link => "http://pubs.rsc.org/en/content/articlelanding/sc/2016/c5sc04906g#!divAbstract")

publication4 = Publication.create(:article => "Ligand Aspect Ratio as a Decisive Factor for the Self-Assembly of Coordination Cages.", :contributors => "Suzanne M. Jansze, Giacomo Cecot, Matthew D. Wise, Konstantin O. Zhurov, Tanya K. Ronson, Ana M. Castilla, Alba Finelli, Philip Pattison, Euro Solari, Rosario Scopelliti, Genrikh E. Zelinskii, Anna V. Vologzhanina, Yan Z. Voloshin, Jonathan R. Nitschke, and Kay Severin", :journal => "J. Am. Chem. Soc.", :year => "2016", :more_info => "138", :pages => "2046–2054", :publication_picture => "/uploads/publications/pub2.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b13190")
