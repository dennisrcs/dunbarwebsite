# This file should contain all the record creation needed to seed the database with its default values
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users seed
user1 = User.create(:username => 'dunbar', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'dunbar@gmail.com', :password => 'dunbar123', :password_confirmation => 'dunbar123')
member1 = Member.create(:name => 'Dr. Kim R. Dunbar', :position => 'Distriguinshed Professor', :telephone => '(979) 513-4983', :fax => '(979) 513-4413', :previous_affiliation => 'Michigan State University',
                        :bio => 'Professor Dunbar received her Ph.D. in inorganic chemistry from Purdue University in 1984 with Professor Richard A. Walton and carried out postdoctoral research at Texas'\
                        ' A&M University from 1985-86 under the direction of the late F. Albert Cotton. She joined the Texas A&M chemistry faculty in 1999 after being a faculty member at Michigan State University'\
                        ' from 1987-1999 where she was served as University Distinguished Professor from 1998-1999. In 2004, she was named a Davidson Professor of Science at Texas A&M University and a joint holder'\
                        ' of the Davidson Chair in Science, meriting particular distinction as the first female chair holder in the history of the College of Science.'\
                        " Kim Dunbar's research in synthetic and structural inorganic chemistry, recently funded by the National Science Foundation, Department of Energy, the American Chemical Society-Petroleum"\
                        " Research Fund and the Welch Foundation, is focused on the application of coordination chemistry principles to the solution of diverse problems ranging from new magnetic and conducting"\
                        " materials to anticancer agents."\
                        " Major professional honors include an Alfred P. Sloan Foundation Fellowship, a Camille and Henry Dreyfus Teacher-Scholar Award, and Fellowships in the American Association for the Advancement"\
                        " of Science and the American Institute of Chemists. She received a Distinguished Alumna Award from her graduate alma mater Purdue University in 2004 and her undergraduate institution Westminster"\
                        " College in 2000."\
                        " She serves her profession as Associate Editor of Inorganic Chemistry and is past Secretary and Chair of the American Chemical Society's Division of Inorganic Chemistry. She has mentored over"\
                        " 60 graduate students and postdoctoral researchers and has worked with over 30 undergraduates. She frequently hosts visiting professors and scholars from all over the world and collaborates"\
                        " extensively with colleagues from Europe and Asia as well as North America."\
                        " Dr. Dunbar was recently recognized by Texas A&M University with the inaugural Graduate Mentoring Award from The Association of Former Students at Texas A&M University in 2006. She is the author"\
                        " of over 280 research publications and 16 book chapters or reviews.",
                        :building => 'Chemistry Building', :office => '2311', :rank => 0, :link => 'http://www.google.com.br',
                        :is_current_member => true, :is_listed => true, :researcherid => "B-6488-2015", :birthplace => 'Pittsburgh, United States',
                        :avatar_path => '/uploads/images/dunbar.png', :cv_path => '/uploads/cv/cv.pdf')
user1.update_attribute(:member, member1)

user2 = User.create(:username => 'andrezza', :is_admin => true, :activated => true, :activated_at => Time.zone.now, :email => 'andrezza@gmail.com', :password => 'andrezza123', :password_confirmation => 'andrezza123')
member2 = Member.create(:name => 'Andrezza Antonio', :position => 'Assistant', :telephone => '(979) 533-1153', :fax => '(979) 113-5457', :previous_affiliation => 'Unilever', 
                        :bio => 'Hey, this is me, Andrezza! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => true, :is_listed => true, :rank => 1, :birthplace => 'São Paulo, Brazil',
                        :avatar_path => '/uploads/images/andrezza.jpg', :cv_path => '/uploads/cv/cv.pdf')
user2.update_attribute(:member, member2)

user3 = User.create(:username => 'silvia', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'silvia@gmail.com', :password => 'silvia123', :password_confirmation => 'silvia123')
member3 = Member.create(:name => 'Silvia Gomez', :position => 'Postdoc', :researcherid => "F-5384-2011", :telephone => '(979) 973-3543', :fax => '(979) 127-3126', :previous_affiliation => 'University of Spain',
                        :bio => 'Hey, my name is Silvia Gomez! :)', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Madrid, Spain',
                        :is_current_member => false, :is_listed => true, :rank => 2, :link => 'https://www.linkedin.com/in/dennis-cunha-63094351',
                        :avatar_path => '/uploads/images/silvia.png', :cv_path => '/uploads/cv/cv.pdf')
user3.update_attribute(:member, member3)

user4 = User.create(:username => 'zhe', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'ynglinga@tamu.edu', :password => 'zheshen123', :password_confirmation => 'zheshen123')
member4 = Member.create(:name => 'Zhe (Svein) Shen', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Zhejiang University, Hangzhou, China',
                        :bio => 'My work is aimed at the synthesis of transition and rare earth molecular magnets with organocyanide radicals with the goal being to combine magnetic and conducting sub-lattices to achieve multi-functional materials. I am also working on metal-radical complexes as new Single Molecule Magnets', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Hangzhou, China',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/zhe.jpg', :cv_path => '/uploads/cv/cv.pdf')
user4.update_attribute(:member, member4)

user5 = User.create(:username => 'haomiao', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'haomiao.xie@chem.tamu.edu', :password => 'haomiaoxie123', :password_confirmation => 'haomiaoxie123')
member5 = Member.create(:name => 'Haomiao Xie', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Nanjing University, Nanjing, China',
                        :bio => 'My research is focused on investigating synergistic interactions of magnetic and conducting properties of metal-organocyanide radical systems, in particular, those based on 7,7,8,8-tetracyanoquinodimethane (TCNQ) and its derivatives. The main goals are to realize multifunctional molecular materials and to tune the structure-property relationships by tweaking the magnetic and conducting components.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Nanjing, China',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/dog.png', :cv_path => '/uploads/cv/cv.pdf')
user5.update_attribute(:member, member5)

user6 = User.create(:username => 'an', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'platinum1001@tamu.edu', :password => 'anvu1234', :password_confirmation => 'anvu1234')
member6 = Member.create(:name => 'An Vu', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'University of the Incarnate Word, San Antonio, Texas',
                        :bio => 'Currently, I am working on new directions for ruthenium compounds directed for use photodynamic cancer therapy.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'San Antonio, Texas',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/vu.jpg', :cv_path => '/uploads/cv/cv.pdf')
user6.update_attribute(:member, member6)

user7 = User.create(:username => 'kelsey', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'kelsey.schulte@chem.tamu.edu', :password => 'kelseyschulte123', :password_confirmation => 'kelseyschulte123')
member7 = Member.create(:name => 'Kelsey Schulte', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Colorado State University, Fort Collins, Colorado',
                        :bio => 'My research is focused on synthesizing new single molecule magnets with specific rigid geometries. I am particularly interested in trigonal pyramidal complexes of transition metal coordination and organometallic compounds with high anisotropy. These compounds can further be used as building blocks for multinuclear, cyanide bridged magnetic molecules.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Fort Collins, Colorado',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/kelsey.jpg', :cv_path => '/uploads/cv/cv.pdf')
user7.update_attribute(:member, member7)

user8 = User.create(:username => 'ryan', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'ryan.coll@chem.tamu.edu', :password => 'ryancoll123', :password_confirmation => 'ryancoll123')
member8 = Member.create(:name => 'Ryan P. Coll', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Wake Forest University, Winston-Salem, North Carolina',
                        :bio => 'My project focuses on the electronic tuning of partial paddlewheel dirhodium(II,II) complexes for photodynamic therapy application as well as for photo-induced drug delivery.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Wiston-Salem, North Carolina',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/ryan.jpg', :cv_path => '/uploads/cv/cv.pdf')
user8.update_attribute(:member, member8)

user9 = User.create(:username => 'david', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'david.kempe@chem.tamu.edu', :password => 'davidkempe123', :password_confirmation => 'davidkempe123')
member9 = Member.create(:name => 'David Kempe', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Abilene Christian University, Abilene, Texas',
                        :bio => 'My research on the magnetism project in the Dunbar group focuses on cyanometallate chemistry of paramagnetic 4d and 5d metals with the goal being to engender anisotropic exchange in polynuclear Single Molecule Magnets. This approach to SMMs is a new direction and is predicted to ultimately lead to high barriers for reversal of the magnetization.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Abilene, Texas',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/david.jpg', :cv_path => '/uploads/cv/cv.pdf')
user9.update_attribute(:member, member9)

user10 = User.create(:username => 'brian', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'bdolinar@tamu.edu', :password => 'briandolinar123', :password_confirmation => 'briandolinar123')
member10 = Member.create(:name => 'Dr. Brian Dolinar', :position => 'Postdoctoral Research Associate', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'University of Notre Dame, South Bend, Indiana',
                        :bio => 'My work focuses on the synthesis of radical- and neutral-bridged dilanthanide single molecule magnets (SMMs). I use a variety of bridging and supporting ligands to tune the coordination environment and elicit better coupling between the metal ions, resulting in enhanced SMM properties.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'South Bend, Indiana',
                        :is_current_member => true, :is_listed => true, :rank => 2, :link => '',
                        :avatar_path => '/uploads/images/brian.jpg', :cv_path => '/uploads/cv/cv.pdf')
user10.update_attribute(:member, member10)

user11 = User.create(:username => 'agustin', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'agustin.millet@tamu.edu', :password => 'agustinmillet123', :password_confirmation => 'agustinmillet123')
member11 = Member.create(:name => 'Agustin Millet', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'University of Buenos Aires, Buenos Aires, Argentina',
                        :bio => 'My research project involves the synthesis and characterization of new partial paddlewheel dirhodium(II,II) compounds with strongly donating and accepting ligands for H2 production, CO2 reduction, and photodynamic therapy for cancer treatment. ', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Buenos Aires, Argentina',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/agustin.jpg', :cv_path => '/uploads/cv/cv.pdf')
user11.update_attribute(:member, member11)

user12 = User.create(:username => 'matthew', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'mbrew012@tamu.edu', :password => 'matthewbrewer123', :password_confirmation => 'matthewbrewer123')
member12 = Member.create(:name => 'Matthew Brewer', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Old Dominion University, Norfolk, Virginia',
                        :bio => 'Interests: These include miniature painting, tabletop gaming, confectionery, homebrewing, playing the tin whistle, and finding the ideal honey varietal.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Norfolk, Virginia',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/matthew.JPG', :cv_path => '/uploads/cv/cv.pdf')
user12.update_attribute(:member, member12)

user13 = User.create(:username => 'francisco', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'Francisco.birk@chem.tamu.edu', :password => 'franciscobirk123', :password_confirmation => 'franciscobirk123')
member13 = Member.create(:name => 'Francisco Birk', :position => 'Ph.D Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'University of Florida, Gainesville, Florida',
                        :bio => 'My research is focused on the synthesis and characterization of new 4d and 5d cyanometallate complexes as building blocks for high-temperature nanomolecular magnets. The 4d and 5d metals have significantly larger spin-orbit coupling constants and exhibit anisotropic exchange when coupled to other metals through the cyanide bridge in polynuclear systems.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Gainesville, Florida',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/dog.png', :cv_path => '/uploads/cv/cv.pdf')
user13.update_attribute(:member, member13)

user14 = User.create(:username => 'ellen', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'songe@tamu.edu', :password => 'ellensong123', :password_confirmation => 'ellensong123')
member14 = Member.create(:name => 'Ellen Song', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'University of Guelph, Guelph, Ontario, Canada',
                        :bio => 'My research focuses on the use of dirhodium and diiridium complexes as potential photodynamic therapy agents. In particular, I am working on synthesizing functionalized ligands to increase the cellular uptake of these complexes, as well as investigating new ligands to tune the photochemical properties of the complexes.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Ontario, Canada',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/ellen.jpg', :cv_path => '/uploads/cv/cv.pdf')
user14.update_attribute(:member, member14)

user15 = User.create(:username => 'eryn', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'egwhite@tamu.edu', :password => 'erynwhite123', :password_confirmation => 'erynwhite123')
member15 = Member.create(:name => 'Eryn White', :position => 'B.S. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Wharton County Jr. College, Wharton, Texas',
                        :bio => 'My project is focused on the synthesis and characterization of dirhodium(II, II) paddlewheel complexes for potential use as photodynamic therapy drugs.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Wharton, Texas',
                        :is_current_member => true, :is_listed => true, :rank => 4, :link => '',
                        :avatar_path => '/uploads/images/eryn.jpg', :cv_path => '/uploads/cv/cv.pdf')
user15.update_attribute(:member, member15)

user16 = User.create(:username => 'dimitris', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'dimitrios.alexandrop@tamu.edu', :password => 'dimitrisalexandropoulos123', :password_confirmation => 'dimitrisalexandropoulos123')
member16 = Member.create(:name => 'Dimitris Alexandropoulos', :position => 'Postdoctoral Fellow', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Brock University, Canada',
                        :bio => 'My research is mainly focused on the design, synthesis and characterization of molecular inorganic materials and their applications in the field of molecular magnetism. More specifically, I am studying the magnetic exchange interactions of organic radicals with paramagnetic 3d, 4f or mixed 3d/4f metal ions by designing dinuclear model complexes. I am also interested in transition metal azide clusters of paramagnetic transition metal ions.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Ontario, Canada',
                        :is_current_member => true, :is_listed => true, :rank => 2, :link => '',
                        :avatar_path => '/uploads/images/dimitrios.jpg', :cv_path => '/uploads/cv/cv.pdf')
user16.update_attribute(:member, member16)

user17 = User.create(:username => 'sayan', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'sayan.saha@chem.tamu.edu', :password => 'sayansaha123', :password_confirmation => 'sayansaha123')
member17 = Member.create(:name => 'Sayan Saha', :position => 'Ph.D. Student', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'Indian Institute of Technology (IIT) Kanpur, Kanpur, India',
                        :bio => 'One of my projects focuses on modifying Ru compounds to shift the irradiation energy towards the therapeutic window for photodynamic therapy. A second project involves the study of the cellular co-localization of metal-metal bonded Rh2 compounds with attached fluorophores. Both endeavors involve extensive organic and inorganic synthetic skills and an in-depth knowledge of various characterization techniques including Electronic Spectroscopy, Electrochemistry, Computational Calculations, Mass Spectrometry, Single Crystal X-ray diffraction, Photochemical Studies, and Cellular Assays.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Kanpur, India',
                        :is_current_member => true, :is_listed => true, :rank => 3, :link => '',
                        :avatar_path => '/uploads/images/dog.png', :cv_path => '/uploads/cv/cv.pdf')
user17.update_attribute(:member, member17)

user18 = User.create(:username => 'minxia', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'yaomx@njtech.edu.cn', :password => 'minxiayao123', :password_confirmation => 'minxiayao123')
member18 = Member.create(:name => 'Min-Xia Yao', :position => 'Visiting Scholar', :researcherid => "", :telephone => '', :fax => '', :previous_affiliation => 'NanJing Tech University, Nanjing, China',
                        :bio => 'My research is focused on designing and synthesizing low dimensional and multifunctional molecular magnetic materials, especially chiral single-molecule/single chain magnets (SMMs/SCMs) and SMMs/SCMs exhibiting conducting properties.', :building => 'Chemistry Building', :office => '2311', :birthplace => 'Nanjing, China',
                        :is_current_member => true, :is_listed => true, :rank => 1.5, :link => '',
                        :avatar_path => '/uploads/images/dog.png', :cv_path => '/uploads/cv/cv.pdf')
user18.update_attribute(:member, member18)
