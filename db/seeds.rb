# This file should contain all the record creation needed to seed the database with its default values
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users seed
user1 = User.create(:username => 'byter', :is_admin => true, :activated => true, :activated_at => Time.zone.now, :email => 'denisrcs@gmail.com', :password => 'byter123', :password_confirmation => 'byter123')
member1 = Member.create(:name => 'Dennis Silva', :position => 'PhD Student', :researcherid => "F-5384-2011", :telephone => '321321321', :fax => '123123123', :previous_affiliation => 'University of Pernambuco', 
                        :bio => 'Hey, this is me, Dennis Silva! :)', :building => 'Bright building', :office => 'Basement',
                        :is_current_member => true, :is_listed => true,
                        :avatar_path => '/uploads/images/dennis.png', :cv_path => '/uploads/cv/cv.pdf')
user1.update_attribute(:member, member1)

user2 = User.create(:username => 'bender', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'dudiannahu@gmail.com', :password => 'bender123', :password_confirmation => 'bender123')
member2 = Member.create(:name => 'Diego Martinez', :position => 'MSc Student', :telephone => '1111111111', :fax => '0000000000', :previous_affiliation => 'Universidad de México',
                        :bio => 'Hey, my name is Diego Martinez! :)', :building => 'Bright building', :office => '1st Floor',
                        :is_current_member => true, :is_listed => true,
                        :avatar_path => '/uploads/images/diego.png', :cv_path => '/uploads/cv/cv.pdf')
user2.update_attribute(:member, member2)

user3 = User.create(:username => 'calculon', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'calculon@gmail.com', :password => 'calculon123', :password_confirmation => 'calculon123')
member3 = Member.create(:name => 'Diane Duwacu', :position => 'PhD Student', :telephone => '2222222222', :fax => '0000000000', :previous_affiliation => 'Oklahoma University',
                        :bio => 'Hey, my name is Diane Duwacu! :)', :building => 'Bright building', :office => '2nd Floor',
                        :is_current_member => false, :is_listed => true,
                        :avatar_path => '/uploads/images/diane.png', :cv_path => '/uploads/cv/cv.pdf')
user3.update_attribute(:member, member3)

user4 = User.create(:username => 'devil', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'devil@gmail.com', :password => 'devil123', :password_confirmation => 'devil123')
member4 = Member.create(:name => 'Irving Solis', :position => 'Undergraduate', :telephone => '3333333333', :fax => '0000000000', :previous_affiliation => 'Universidad Nacional Autonoma do Mexico',
                        :bio => 'Hey, my name is Irving Solis! :)', :building => 'Bright building', :office => '3rd Floor',
                        :is_current_member => false, :is_listed => true,
                        :avatar_path => '/uploads/images/irving.png', :cv_path => '/uploads/cv/cv.pdf')
user4.update_attribute(:member, member4)

user5 = User.create(:username => 'police', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'police@gmail.com', :password => 'police123', :password_confirmation => 'police123')
member5 = Member.create(:name => 'Bozhen Liu', :position => 'Professor', :researcherid => 'B-6488-2015', :telephone => '4444444444', :fax => '0000000000', :previous_affiliation => 'Cornell University',
                        :bio => 'Hey, my name is Bozhen Liu! :)', :building => 'Bright building', :office => '4th Floor',
                        :is_current_member => true, :is_listed => true,
                        :avatar_path => '/uploads/images/bozhen.png', :cv_path => '/uploads/cv/cv.pdf')
user5.update_attribute(:member, member5)

user6 = User.create(:username => 'xiaoxuesu', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'xuesuxiao@gmail.com', :password => 'xiaoxuesu123', :password_confirmation => 'xiaoxuesu123')
member6 = Member.create(:name => 'Xuesu Xiao', :position => 'Undergraduate Student', :telephone => '5555555555', :fax => '0000000000', :previous_affiliation => 'Carnegie Mellon University',
                        :bio => 'Hey, my name is Xuesu Xiao! :)', :building => 'Bright building', :office => '5th Floor',
                        :is_current_member => false, :is_listed => false,
                        :avatar_path => '/uploads/images/xuesu.png', :cv_path => '/uploads/cv/cv.pdf')
user6.update_attribute(:member, member6)

# publications seed
publication1 = Publication.create(:article => "Sequence-Dependent Guest Release Triggered by Orthogonal Chemical Signals",
:contributors => "Ana M. Castilla, Tanya K. Ronson, and Jonathan R. Nitschke", :journal => "J. Am. Chem. Soc.", :year => "2016", :more_info => "138", :pages => "2342–2351",
:publication_picture => "/uploads/publications/pub4.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b13016")

publication3 = Publication.create(:article => "Subcomponent Flexibility Enables Conversion between D4-Symmetric CdII8L8 and T-Symmetric CdII4L4 Assemblies",
:contributors => "Jesús Mosquera, Tanya K. Ronson, and Jonathan R. Nitschke", :journal => "J. Am. Chem. Soc.", :year => "2016", :more_info => "138", :pages => "1812–1815",
:publication_picture => "/uploads/publications/pub3.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b12955")

publication3 = Publication.create(:article => "Catenation and encapsulation induce distinct reconstitutions within a dynamic library of mixed-ligand Zn4L6 cages",
:contributors => "Samuel P. Black,   Daniel M. Wood,   Felix B. Schwarz, Tanya K. Ronson,   Julian J. Holstein,   Artur R. Stefankiewicz, Christoph A. Schalley, 
Jeremy. K. M. Sanders and  Jonathan R. Nitschke", :journal => "Chem. Sci.", :year => "2016", :more_info => "7", :pages => "2614-2620", 
:publication_picture => "/uploads/publications/pub1.gif", :link => "http://pubs.rsc.org/en/content/articlelanding/sc/2016/c5sc04906g#!divAbstract")

publication4 = Publication.create(:article => "Ligand Aspect Ratio as a Decisive Factor for the Self-Assembly of Coordination Cages.",
:contributors => "Suzanne M. Jansze, Giacomo Cecot, Matthew D. Wise, Konstantin O. Zhurov, Tanya K. Ronson, Ana M. Castilla, Alba Finelli, Philip Pattison,
Euro Solari, Rosario Scopelliti, Genrikh E. Zelinskii, Anna V. Vologzhanina, Yan Z. Voloshin, Jonathan R. Nitschke, and Kay Severin", :journal => "J. Am. Chem. Soc.",
:year => "2016", :more_info => "138", :pages => "2046–2054", :publication_picture => "/uploads/publications/pub2.gif", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b13190")

group_info1 = GroupInfo.create(:title => "Basic Group Information", :is_restricted => true, :file_path => "/uploads/group_info/rules.pdf")
group_info2 = GroupInfo.create(:title => "Bond Valence Calculator", :is_restricted => false, :file_path => "/uploads/group_info/bond_valence_calculator.pdf")
group_info3 = GroupInfo.create(:title => "Cyanide Precautions", :is_restricted => true, :file_path => "/uploads/group_info/cyanide_precautions.pdf")
group_info4 = GroupInfo.create(:title => "New Employee Arrivel Info", :is_restricted => true, :file_path => "/uploads/group_info/new_employee_arrival_info.pdf")




news1 = New.create(:content => "Francisco Birk is currently visiting Ph.D. student in Jagiellonian University (Kraków, Poland)
working in Dawid Pinkowicz’s lab synthetizing group 5 and 6 cyanometallates. Enjoy the stay!")

news2 = New.create(:content => "Kelsey Schulte passed her prelim this month. Congratulations!")

news3 = New.create(:content => "The end of the semester brings us a plethora of thesis dissertations – Xuan Zhang, Toby J. 
Woods, Jill V. Ellenbarger and Codi A. Sanders. Good luck to the protagonist!")

research1 = Research.create(:title => "Supramolecular Chemistry of Anions", :summary => "Research in the Supramolecular Chemistry of Anions is a newer 
project in the Dunbar Group. The project has developed into a highly interdisciplinary endeavor, encompassing coordination chemistry, computational 
chemistry, and, biochemistry. Anion-π interactions, i.e., the noncovalent forces between electron-deficient aromatic systems and anions, have been 
relatively unexplored as compared to cation-pi interactions, primarily due to the counter-intuitive nature of aromatic rings being attracted to a 
negative charge. The vital role of anions in many key chemical and biological processes and the involvement of pi rings in molecular anion 
recognition and transport processes, however, indicate that anion-pi contacts may be prominent players in fields as diverse as medicine and 
environmental chemistry. Our tutorial review in Chemical Society Reviews presents a good overview of the aims and scope of the field.", 
:content => "<p>Research in the Supramolecular Chemistry of Anions is a newer project in the Dunbar Group.  The project has developed 
into a highly interdisciplinary endeavor, encompassing coordination chemistry, computational chemistry, and, biochemistry. Anion-π interactions, 
i.e., the noncovalent forces between electron-deficient aromatic systems and anions, have been relatively unexplored as compared to cation-pi 
interactions, primarily due to the counter-intuitive nature of aromatic rings being attracted to a negative charge. The vital role of anions 
in many key chemical and biological processes and the involvement of pi rings in molecular anion recognition and transport processes, however, 
indicate that anion-pi contacts may be prominent players in fields as diverse as medicine and environmental chemistry. Our tutorial review in 
<i>Chemical Society Reviews</i> presents a good overview of the aims and scope of the field.<sup>1-4</sup></p><p>The main question that we are 
posing is: \"How does the interplay between anions and electron-deficient aromatic ligands mediate the structures and properties of supramolecular 
architectures\"? An initial foray into the nature of supramolecular interactions involving anions - specifically the anion-pi interaction was 
initiated in response to our discovery of two related metallocyclophanes, the nuclearity of which is dictated by the identity of the encapsulated 
anion.<sup>1</sup> Reactions of fully-solvated Ni<sup>II</sup> ions with the ligand 3,6-bis(2'-pyridyl)-1,2,4,5-tetrazine (bptz) yield the square 
[Ni<sub>4</sub>(bptz)<sub>4</sub>(NCCH<sub>3</sub>)<sub>8</sub>⊂BF<sub>4</sub>]<sup>7+</sup> (Figure 1, left) and pentagonal 
[Ni<sub>5</sub>(bptz)<sub>5</sub>(NCCH<sub>3</sub>)<sub>10</sub>⊂SbF<sub>6</sub>]<sup>9+</sup> (Figure 1, right) motifs in the presence of 
[BF<sub>4</sub>]<sup>-</sup> and [SbF<sub>6</sub>]<sup>-</sup> anions, respectively. Intriguingly, the pentagonal motif can be converted to 
the square motif simply by adding the [BF<sub>4</sub>]<sup>-</sup> ions to the pentagon in solution. The reverse conversion may also be effected. 
The previous findings along with the observation of an alignment between the central tetrazine core of bptz and [BF<sub>4</sub>]<sup>-</sup> 
in the square motif's crystal structure, suggest that anion-pi interactions are an integral part of the template effect.</p><center>
<img width=\"282\" height=\"282\" src=\"/uploads/research_images/clip_image002.gif\" alt=\"NiSqSide.tif\">
<img width=\"307\" height=\"282\" src=\"/uploads/research_images/clip_image003.gif\" alt=\"NiPentFront.tif\"><br clear=\"all\">
<img width=\"271\" height=\"165\" src=\"/uploads/research_images/clip_image005.gif\" alt=\"NiSqTop.tif\">
<img width=\"311\" height=\"165\" src=\"/uploads/research_images/clip_image006.gif\" alt=\"NiPentTop.tif\"></center>
<p></p><p><b>Figure 1.</b> : Side (above) and top (below) views of the cationic [Ni<sub>4</sub>(bptz)<sub>4</sub>(NCCH<sub>3</sub>)<sub>8</sub>
⊂BF<sub>4</sub>]<sup>7+</sup> (square, left) and [Ni<sub>5</sub>(bptz)<sub>5</sub>(NCCH<sub>3</sub>)<sub>10</sub>⊂SbF<sub>6</sub>]<
sup>9+</sup> (pentagon, right) species. Non-encapsulated anions, solvent molecules and hydrogen atoms have been omitted for clarity. Atom 
colors: C = gray, N = blue, F = green, B = purple, Sb = yellow and Ni = tan.<sup>1</sup></p><p>The aforementioned observations led us to 
explore the nature of anion-pi interactions in both experimental and computational systems, with a focus on the role of the electronic 
nature of the ligand and the anion identity. Our work revealed that when bptz reacts with salts of Ag<sup>I</sup>, the ensuing structure 
depends on the identity of the anion which interacts strongly with the ligand through anion-pi interactions (the most striking example being 
the propeller-type structure with AgSbF<sub>6</sub>).<sup>2</sup> Conversely  if a ligand with a more electron-rich central ring is used, such 
as 3,6-bis(2'-pyridyl)pyridazine (bppn), a grid structure arises regardless of the anion used, and the structure maximizes pi-pi stacking 
interactions at the expense of anion-pi interactions (Figure 2). By using similar tricyclic ligands with varying binding motifs and electronic 
distributions we are aim to further probe the anion-templation effect in complexes of first-row transition metals.</p><p></p>
<center><img width=\"232\" height=\"334\" src=\"/uploads/research_images/clip_image007.gif\" alt=\"agprop.tif\">
		<img width=\"346\" height=\"334\" src=\"/uploads/research_images/clip_image008.gif\" alt=\"aggrid.tif\"><br clear=\"all\">
		<img width=\"247\" height=\"100\" src=\"/uploads/research_images/clip_image009.gif\" alt=\"bptz_esp.tif\">
		<img width=\"242\" height=\"100\" src=\"/uploads/research_images/clip_image010.gif\" alt=\"bppn_esp.tif\">
		</center><p></p>
<p><b>Figure 2.</b> : Structures resulting from the reaction of AgSbF<sub>6</sub> with bptz (propeller, top left) and bppn (grid, top right), 
with the electrostatic potential maps of bptz (lower left) and bppn (lower right). Electrostatic potential maps created at a 0.02 isodensity 
value and a color scale 126 (blue) to -63  (red) kcal/mol using Cerius<sup>2</sup>. Atom colors: C = gray, H = white, N = blue, F = green, B = 
purple, Sb = yellow and Ag = brown.<sup>2</sup></p><p>As part of our broader interest in anion-pi interactions, we have recently been studying 
the interesting electron-deficient ligand HAT(CN)<sub>6</sub> (1,4,5,8,9,12-hexaazatriphenylene-hexacarbonitrile) (Figure 3, left) which 
co-crystallizes with [n-Bu<sub>4</sub>N][I] to afford {([n-Bu<sub>4</sub>N][I])<sub>3</sub>[HAT(CN)<sub>6</sub>]<sub>2</sub>}·3C<sub>6</sub>
H<sub>6</sub> (1). This material exhibits charge-transfer from the [I]<sup>-</sup> ions to the HAT(CN)<sub>6</sub> rings as well as anion-pi 
interactions at the ring centroid.<sup>3,4</sup>  The crystal structure of <b>1</b> indicates four crystallographic positions partially 
occupied by three iodide anions (Figure 3, center); three of the four iodide positions are centered over the periphery of the HAT(CN)
<sub>6</sub> ring while the fourth position is located directly over the centroid on the opposite face of the ring (Figure 3, center).  
The resulting structure exhibits an ABCD type stacking with alternating layers of HAT(CN)<sub>6</sub> molecules and iodide anions 
(Figure 3, right).  The two distinct anion sites and the established anion-π interactions are the focus of ongoing studies in our 
group.</p><p></p>
<center><img width=\"222\" height=\"195\" src=\"/uploads/research_images/clip_image011.gif\" alt=\"hatcn6_transparent.tif\">
		<img width=\"226\" height=\"195\" src=\"/uploads/research_images/clip_image012.gif\" alt=\"hatcn6_top.tif\">
		<img width=\"133\" height=\"195\" src=\"/uploads/research_images/clip_image013.gif\" alt=\"hatcn6_stack.tif\">
		</center><p></p>
<p><b>Figure 3.</b> : (Left) Structure of HAT(CN)<sub>6</sub>; (center) {([n-Bu<sub>4</sub>N][I])<sub>3</sub>[HAT-(CN)<sub>6</sub>]<sub>2</sub>}.3C
<sub>6</sub>H<sub>6</sub> looking down the c axis (the three iodide ions are distributed among four crystallographic positions) and (right) 
space-filling diagram of the repeat layers in ([n-Bu<sub>4</sub>N][I])<sub>3</sub>HAT-(CN)<sub>6</sub>]<sub>2</sub>; the cations have been 
omitted for clarity. Atom colors:  C = gray, H = white, N = blue, I = yellow.<sup>3</sup></p><p>Our computational studies (with both Density 
Functional Theory and <i>ab initio</i> methods) are used to corroborate our experimental findings, and the results suggest that highly pi-acidic 
aromatic systems are more amenable to anion-pi interactions. Continuing research involves expanding the computational models to include multiple 
anions and multiple arenes to explore the anion-pi interaction in extended systems as well as single-point energy and geometry optimization 
computations on structures derived from crystallographic studies.</p><p>Perhaps even more fascinating than the role of anions in 
metallosupramolecular chemistry is the possible role of anion-pi interactions in biological systems due to the pivotal role of anions in many 
key chemical and biological processes.<sup>4</sup> The presence of electron-poor aromatic moieties in biomolecules such as proteins and nucleic acids led us to ask whether anion-pi interactions may play a role in protein functions, e.g., anion-transport, or other enzyme activities.  Current research in the Dunbar group aims at addressing the role of anion-π interactions in proteins and other molecules of biological interest via computational and statistical analyses of known protein structures.</p><p><b>References</b><br>
1.	Campos-Fernandez, C. S.; Schottel, B. L.; Chifotides, H. T.; Bera, J. K.; Bacsa, J.; Koomen, J. M.; Russell, D. H.; Dunbar, K. R. J. Am. Chem. Soc., 2005, 127, 12909-12923.<br>
2.	Schottel, B. L.; Chifotides, H. T.; Shatruk, M.; Chouai, A.; Bacsa, J.;  Perez, L. M.; Dunbar, K. R.  J. Am. Chem. Soc. 2006, 128, 5895-5912.<br>
3.	Szalay, P. S.; Galan-Mascaros, J. R.; Schottel, B. L.; Basca, J.; Perez, L. M.; Ichimura, I. S.; Chouai, A.; Dunbar, K. R. J. Cluster Sci. 2004, 15, 503-530.<br>
4.	Schottel, B. L.; Chifotides, H. T.; Dunbar, K. R. Chem. Soc. Rev. 2008, 37, 68-83.</p>
")




#slider image seed
PBA_magnetism = SliderImage.create(:title =>"Desing of metal cyanide clusters of desired geometries that give rise to a variety of magnetic phenomena,
e.g.  spin-crossover, photomagnetism, and single molecule magnetism.", :link => "", :slider_image_picture => "/uploads/slider/PBA_magnetism.png")

ChemSci_2016_TCNQ = SliderImage.create(:title => "New bifunctional TCNQ based material: [Co(terpy)2](TCNQ)3·CH3CN exhibits a high room temperature 
conductivity of 0.13 S cm−1 and an anomaly in conductivity at ∼190 K as evidenced by variable temperature structural, 
magnetic and conductivity studies.", :link => "", :slider_image_picture => "/uploads/slider/ChemSci_2016_TCNQ.png")

JACS_2015_trimers = SliderImage.create(:title => "New Mn(III)-NC-M(III)-CN-Mn(III) complexes exhibing switchable single-molecule magnet (SMM) and 
exchange-bias behavior depending on the interstitial methanol content.", :link => "", :slider_image_picture => "/uploads/slider/JACS_2015_trimers.png")


course1 = Course.create(:name => "CHEM 634")

syllabus = CourseFile.new(:name => "syllabus", :file_path => "/uploads/courses/qualifying.pdf")
syllabus.file_type = :syllabus
syllabus.course_id = course1.id
syllabus.save

10.times do |m|
   file = CourseFile.new(:name => "#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :notes
   file.course_id = course1.id
   file.save
end

5.times do |m|
   file = CourseFile.new(:name => "Goal #{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :chapter_goals
   file.course_id = course1.id
   file.save
end

8.times do |m|
   file = CourseFile.new(:name => "Resource #{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :resource_research
   file.course_id = course1.id
   file.save
end

5.times do |m|
   file = CourseFile.new(:name => "HW#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :homework
   file.course_id = course1.id
   file.save
end

5.times do |m|
   file = CourseFile.new(:name => "Solution#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :solutions
   file.course_id = course1.id
   file.save
end

5.times do |m|
   file = CourseFile.new(:name => "Answer#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :exam_answers
   file.course_id = course1.id
   file.save
end

course2 = Course.create(:name => "CHEM 362")

syllabus2 = CourseFile.new(:name => "syllabus", :file_path => "/uploads/courses/qualifying.pdf")
syllabus2.file_type = :syllabus
syllabus2.course_id = course2.id
syllabus2.save

8.times do |m|
   file = CourseFile.new(:name => "#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :notes
   file.course_id = course2.id
   file.save
end

5.times do |m|
   file = CourseFile.new(:name => "HW#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :homework
   file.course_id = course2.id
   file.save
end

2.times do |m|
   file = CourseFile.new(:name => "Answer#{m}", :file_path => "/uploads/courses/qualifying.pdf")
   file.file_type = :exam_answers
   file.course_id = course2.id
   file.save
end