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
                        :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => true, :is_listed => true, :researcherid => "B-6488-2015",
                        :avatar_path => '/uploads/images/dunbar.png', :cv_path => '/uploads/cv/cv.pdf')
user1.update_attribute(:member, member1)

user2 = User.create(:username => 'andrezza', :is_admin => true, :activated => true, :activated_at => Time.zone.now, :email => 'andrezza@gmail.com', :password => 'andrezza123', :password_confirmation => 'andrezza123')
member2 = Member.create(:name => 'Andrezza Antonio', :position => 'Assistant', :telephone => '(979) 533-1153', :fax => '(979) 113-5457', :previous_affiliation => 'Unilever', 
                        :bio => 'Hey, this is me, Andrezza! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => true, :is_listed => true,
                        :avatar_path => '/uploads/images/andrezza.jpg', :cv_path => '/uploads/cv/cv.pdf')
user2.update_attribute(:member, member2)

user3 = User.create(:username => 'silvia', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'silvia@gmail.com', :password => 'silvia123', :password_confirmation => 'silvia123')
member3 = Member.create(:name => 'Silvia Gomez', :position => 'Postdoc', :researcherid => "F-5384-2011", :telephone => '(979) 973-3543', :fax => '(979) 127-3126', :previous_affiliation => 'University of Spain',
                        :bio => 'Hey, my name is Silvia Gomez! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => true, :is_listed => true,
                        :avatar_path => '/uploads/images/silvia.png', :cv_path => '/uploads/cv/cv.pdf')
user3.update_attribute(:member, member3)

user4 = User.create(:username => 'devil', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'devil@gmail.com', :password => 'devil123', :password_confirmation => 'devil123')
member4 = Member.create(:name => 'Irving Solis', :position => 'PhD Student', :telephone => '(979) 169-9253', :fax => '(979) 779-7382', :previous_affiliation => 'Universidad Nacional Autonoma do Mexico',
                        :bio => 'Hey, my name is Irving Solis! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => false, :is_listed => true,
                        :avatar_path => '/uploads/images/irving.png', :cv_path => '/uploads/cv/cv.pdf')
user4.update_attribute(:member, member4)

user5 = User.create(:username => 'police', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'police@gmail.com', :password => 'police123', :password_confirmation => 'police123')
member5 = Member.create(:name => 'Bozhen Liu', :position => 'MSc Student', :researcherid => 'B-6488-2015', :telephone => '(979) 941-0023', :fax => '(979) 441-6421', :previous_affiliation => 'Cornell University',
                        :bio => 'Hey, my name is Bozhen Liu! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => false, :is_listed => true,
                        :avatar_path => '/uploads/images/bozhen.png', :cv_path => '/uploads/cv/cv.pdf')
user5.update_attribute(:member, member5)

user6 = User.create(:username => 'xiaoxuesu', :is_admin => false, :activated => true, :activated_at => Time.zone.now, :email => 'xuesuxiao@gmail.com', :password => 'xiaoxuesu123', :password_confirmation => 'xiaoxuesu123')
member6 = Member.create(:name => 'Xuesu Xiao', :position => 'Undergraduate Student', :telephone => '(979) 835-1259', :fax => '(979) 148-7289', :previous_affiliation => 'Carnegie Mellon University',
                        :bio => 'Hey, my name is Xuesu Xiao! :)', :building => 'Chemistry Building', :office => '2311',
                        :is_current_member => false, :is_listed => false,
                        :avatar_path => '/uploads/images/xuesu.png', :cv_path => '/uploads/cv/cv.pdf')
user6.update_attribute(:member, member6)

# publications seed
publication1 = Publication.create(:article => "Anion−π Interactions in Supramolecular Architectures",
:contributors => "Helen T. Chifotides and Kim R. Dunbar", :journal => "Acc. Chem. Res.",
:year => "2013", :more_info => "46 (4)", :pages => "894–906", :publication_picture => "/uploads/publications/new_pub5.png", :link => "http://pubs.acs.org/doi/abs/10.1021/ar300251k")

publication2 = Publication.create(:article => "Optimizing the Electronic Properties of Photoactive Anticancer Oxypyridine-Bridged Dirhodium(II,II) Complexes",
:contributors => "Zhanyong Li, Amanda David, Bryan A. Albani, Jean-Philippe Pellois, Claudia Turro, and Kim R. Dunbar", :journal => "J. Am. Chem. Soc.",
:year => "2014", :more_info => "136 (49)", :pages => "17058–17070", :publication_picture => "/uploads/publications/new_pub4.png", :link => "http://pubs.acs.org/doi/abs/10.1021/ja5078359")

publication3 = Publication.create(:article => "Strong Direct Magnetic Coupling in a Dinuclear CoII Tetrazine Radical Single-Molecule Magnet",
:contributors => "Toby J. Woods, Maria Fernanda Ballesteros-Rivas, Sergei M. Ostrovsky, Andrew V. Palii, Oleg S. Reu, Sophia I. Klokishner and Kim R. Dunbar", :journal => "Chem. - A Eur. J.",
:year => "2015", :more_info => "21", :pages => "10302–10305", 
:publication_picture => "/uploads/publications/new_pub3.png", :link => "http://onlinelibrary.wiley.com/wol1/doi/10.1002/chem.201501726/abstract")

publication4 = Publication.create(:article => "Cyanide Single-Molecule Magnets Exhibiting Solvent Dependent Reversible “On” and “Off” Exchange Bias Behavior",
:contributors => "Dawid Pinkowicz, Heather I. Southerland, Carolina Avendaño, Andrey Prosvirin, Codi Sanders, Wolfgang Wernsdorfer, Kasper S. Pedersen, Jan Dreiser, 
Rodolphe Clérac, Joscha Nehrkorn○, Giovanna G. Simeoni, Alexander Schneggo, Karsten Holldack, and Kim R. Dunbar", :journal => "J. Am. Chem. Soc.", 
:year => "2015", :more_info => "137 (45)", :pages => "14406–14422",
:publication_picture => "/uploads/publications/new_pub2.png", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b09378")

publication5 = Publication.create(:article => "A cobalt(II) spin-crossover compound with partially charged TCNQ radicals and an anomalous conducting behavior",
:contributors => "Xuan Zhang, Zhao-Xi Wang, Haomiao Xie, Ming-Xing Li, Toby J. Woods and Kim R. Dunbar", :journal => "Chem. Sci.", :year => "2016", :more_info => "7", :pages => "1569-1574",
:publication_picture => "/uploads/publications/new_pub1.png", :link => "http://pubs.rsc.org/en/content/articlelanding/2016/sc/c5sc03547c")

# More publications seeds

# publications seed
Publication.create(:article => "Anion−π Interactions in Supramolecular Architectures",
:contributors => "Helen T. Chifotides and Kim R. Dunbar", :journal => "Acc. Chem. Res.",
:year => "2005", :more_info => "46 (4)", :pages => "894–906", :publication_picture => "/uploads/publications/new_pub5.png", :link => "http://pubs.acs.org/doi/abs/10.1021/ar300251k")

Publication.create(:article => "Optimizing the Electronic Properties of Photoactive Anticancer Oxypyridine-Bridged Dirhodium(II,II) Complexes",
:contributors => "Zhanyong Li, Amanda David, Bryan A. Albani, Jean-Philippe Pellois, Claudia Turro, and Kim R. Dunbar", :journal => "J. Am. Chem. Soc.",
:year => "2017", :more_info => "136 (49)", :pages => "17058–17070", :publication_picture => "/uploads/publications/new_pub4.png", :link => "http://pubs.acs.org/doi/abs/10.1021/ja5078359")

Publication.create(:article => "Strong Direct Magnetic Coupling in a Dinuclear CoII Tetrazine Radical Single-Molecule Magnet",
:contributors => "Toby J. Woods, Maria Fernanda Ballesteros-Rivas, Sergei M. Ostrovsky, Andrew V. Palii, Oleg S. Reu, Sophia I. Klokishner and Kim R. Dunbar", :journal => "Chem. - A Eur. J.",
:year => "2017", :more_info => "21", :pages => "10302–10305", 
:publication_picture => "/uploads/publications/new_pub3.png", :link => "http://onlinelibrary.wiley.com/wol1/doi/10.1002/chem.201501726/abstract")

Publication.create(:article => "Cyanide Single-Molecule Magnets Exhibiting Solvent Dependent Reversible “On” and “Off” Exchange Bias Behavior",
:contributors => "Dawid Pinkowicz, Heather I. Southerland, Carolina Avendaño, Andrey Prosvirin, Codi Sanders, Wolfgang Wernsdorfer, Kasper S. Pedersen, Jan Dreiser, 
Rodolphe Clérac, Joscha Nehrkorn○, Giovanna G. Simeoni, Alexander Schneggo, Karsten Holldack, and Kim R. Dunbar", :journal => "J. Am. Chem. Soc.", 
:year => "2012", :more_info => "137 (45)", :pages => "14406–14422",
:publication_picture => "/uploads/publications/new_pub2.png", :link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b09378")

Publication.create(:article => "A cobalt(II) spin-crossover compound with partially charged TCNQ radicals and an anomalous conducting behavior",
:contributors => "Xuan Zhang, Zhao-Xi Wang, Haomiao Xie, Ming-Xing Li, Toby J. Woods and Kim R. Dunbar", :journal => "Chem. Sci.", :year => "2009", :more_info => "7", :pages => "1569-1574",
:publication_picture => "/uploads/publications/new_pub1.png", :link => "http://pubs.rsc.org/en/content/articlelanding/2016/sc/c5sc03547c")

# group info

group_info1 = GroupInfo.create(:title => "Basic Group Information", :is_restricted => true, :file_path => "/uploads/group_info/rules.pdf")
group_info2 = GroupInfo.create(:title => "Bond Valence Calculator", :is_restricted => false, :file_path => "/uploads/group_info/bond_valence_calculator.pdf")
group_info3 = GroupInfo.create(:title => "Cyanide Precautions", :is_restricted => true, :file_path => "/uploads/group_info/cyanide_precautions.pdf")
group_info4 = GroupInfo.create(:title => "New Employee Arrivel Info", :is_restricted => true, :file_path => "/uploads/group_info/new_employee_arrival_info.pdf")

news1 = New.create(:title => "Francisco in Jagiellonian University", :content => "Francisco Birk is currently visiting Ph.D. student in Jagiellonian University (Kraków, Poland)
working in Dawid Pinkowicz’s lab synthetizing group 5 and 6 cyanometallates. Enjoy the stay!")

news2 = New.create(:title => "Kelsey passed her prelim", :content => "Kelsey Schulte passed her prelim this month. Congratulations!")

news3 = New.create(:title => "Xuan, Toby, Jill and Cody to defend this month", :content => "The end of the semester brings us a plethora of thesis dissertations – Xuan Zhang, Toby J. 
Woods, Jill V. Ellenbarger and Codi A. Sanders. Good luck to the protagonist!")

news4 = New.create(:title => "New paper on Journal of the American Chemistry Society", :content => "The paper Cyanide Single Molecule Magnets Exhibiting Reversible, Solvent Dependent 'On' and 'Off' Exchange Bias Behavior
has just been accepted on the Journal of the American Chemistry Society!")

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

research2 = Research.create(:title => "Metal Anti-Tumor Agents", :summary => "<p>The  discovery of the anticancer 
drug cisplatin over 40 years ago spawned a new era  of modern metal-based pharmaceuticals. Among the  
recognized non-platinum containing antitumor agents are dinuclear  carboxylate species of Rh, Re and Ru but early  investigations that 
commenced in the 1970’s steadily declined, in part, due to  the fact that the compounds did not surpass the anticancer activity of  cisplatin. 
The revival of this research area in our laboratories, and,  indeed by others working in the field of metals in medicine over the past  decade, 
has led to renewed interest in the cellular  metabolism and biological targets of metal antitumor active compounds.</p>
<p>We  are investigating the interactions ofmetal-metal bonded systems <i>vis-à-vis</i> their interactions with DNA, the primary target of 
platinum and platinum group  metal anticancer agents. Our work has unearthed new concepts regarding viable  substitution pathways and binding 
modes of dimetal units with DNA<sup>1</sup> the results of which are being applied to the  design of new and improved dirhodium anticancer 
active candidates.</p>",:content => "
<p>The  discovery of the anticancer drug cisplatin over 40 years ago spawned a new era  of modern metal-based pharmaceuticals. Among the  
recognized non-platinum containing antitumor agents are dinuclear  carboxylate species of Rh, Re and Ru but early  investigations that 
commenced in the 1970’s steadily declined, in part, due to  the fact that the compounds did not surpass the anticancer activity of  cisplatin. 
The revival of this research area in our laboratories, and,  indeed by others working in the field of metals in medicine over the past  decade, 
has led to renewed interest in the cellular  metabolism and biological targets of metal antitumor active compounds.</p>
<p>We  are investigating the interactions ofmetal-metal bonded systems <i>vis-à-vis</i> their interactions with DNA, the primary target of 
platinum and platinum group  metal anticancer agents. Our work has unearthed new concepts regarding viable  substitution pathways and binding 
modes of dimetal units with DNA<sup>1</sup> the results of which are being applied to the  design of new and improved dirhodium anticancer 
active candidates.</p>
<p>The primary targets under investigation in our  laboratories are dirhodium paddlewheel complexes of the type Rh<sub>2</sub>(O<sub>2</sub
>CR)<sub>4</sub>L<sub>2</sub>  (Figure 1A) or [Rh<sub>2</sub>(O<sub>2</sub>CCH<sub>3</sub>)<sub>2</sub>(N-N)<sub>2</sub>L<sub>2</sub>]<sup>2+</sup> 
(Figure 1B; N-N = chelating ligands such as bpy, dppz).<sup>2</sup> Their  adducts with DNA fragments are studied by 1D and 2D NMR spectroscopies, 
mass  spectrometry, as well as molecular modeling. Our unprecedented findings  indicate that, contrary to conventional wisdom, the equatorial 
sites in the  dirhodium complexes are favorably poised to bind DNA purine bases (e.g.,  guanine, adenine) and DNA fragments (e.g., d(GpG), d(pGpG), 
d(ApA), d(GpA),  d(ApG));<sup>3-6</sup> these interactions lead to the formation of rare  nucleobase tautomers implicated in DNA mutations. 
Superposition  of the low energy Rh<sub>2</sub>(O2CCH3)<sub>2</sub>{d(pGpG)}  conformer, generated by from  2D NMR data and simulated annealing  
calculations, with the crystal structure of <i>cis</i>-[Pt(NH<sub>3</sub>)<sub>2</sub>{d(pGpG)}],  reveals remarkable similarities between the 
adducts; the two octahedral rhodium  atoms are capable of engaging in <i>cis</i> binding to GG intrastrand sites by establishing <i>N7/O6</i> 
bridges that span the Rh–Rh bond (Figure 2).<sup>4</sup>&nbsp; Furthermore, detailed 2D NMR data  analyses performed on the double-stranded DNA 
12mer d(CTCTC5<sup>*</sup>A6<sup>*</sup>ACTTCC)·d(GGAAGTTGAGAG) revealed that the  duplex forms an <i>intrastrand</i> adduct  with the dirhodium 
unit binding to residues C5 and A6 (Figure 3), which  significantly destabilizes the duplex.7 Coordinative binding, to the  dirhodium unit, of 
A6 takes place via N7 whereas binding of the C5 base takes  place via the exocyclic N4 site resulting in the <i>anti</i> cytosine rotamer in its 
metal-stabilized rare iminooxo form.<sup>7</sup>  Formation and stabilization of rare base forms and mispairs can be one of the  factors that 
contribute to the antitumor activity of dirhodium compounds.</p>
<p></p><center><img width=\"426\" height=\"201\" src=\"/uploads/research_images/clip_image002.jpg\"></center><br clear=\"all\"><p></p>
<p><strong>Figure 1. </strong>Structures  of (A)<strong> </strong>Rh<sub>2</sub>(O<sub>2</sub>CR)<sub>4</sub>L<sub>2</sub>  and (B) 
[Rh<sub>2</sub>(O<sub>2</sub>CCH<sub>3</sub>)<sub>2</sub>(N-N)<sub>2</sub>L<sub>2</sub>]<sup>2+</sup>.</p>
<p></p><center><img width=\"252\" height=\"252\" src=\"/uploads/research_images/clip_image004.jpg\"></center><br clear=\"all\"><p></p>
<p><strong>Figure 2. </strong>Superposition of low energy  Rh<sub>2</sub>(O<sub>2</sub>CCH<sub>3</sub>)<sub>2</sub>{d(pGpG)} conformer  
(colored model), generated from 2D NMR data and simulated annealing  calculations, with the crystallographically determined <i>cis</i>-
[Pt(NH<sub>3</sub>)<sub>2</sub>{d(pGpG)}] (light blue).</p>
<p></p><center><img width=\"360\" height=\"270\" src=\"/uploads/research_images/clip_image006.jpg\"></center><br clear=\"all\"><p></p>
<p><strong>Figure  3.</strong> Model of the DNA  duplex d(CTCTC<sup>*</sup>A<sup>*</sup>ACTTCC)·d(GGAAGTTGAGAG) cross-linked by 
the dirhodium unit<i> cis</i>-[Rh2(<i>m</i>-O2CCH3)2(<i>h</i><sup>1</sup>-O2CCH3)]<sup>+</sup>at the cytosine-adenine  step; DNA base 
colors: A: pink; C: light blue;  G: green; T: yellow. Blue ribbon: phosphodiester backbone. Atom colors: Rh:  green; O: red; C: grey; H: white. </p>
<p></p><center><img width=\"547\" height=\"182\" src=\"/uploads/research_images/clip_image008.jpg\"></center><br clear=\"all\"><p></p>
<p><strong>Figure  4.</strong> Phase contrast and fluorescent image of HeLa cells treated  with Rh<sub>2</sub>(O<sub>2</sub>CCH<sub>3</sub>)
<sub>4</sub>. <strong>Left</strong>: Phase contrast. <strong>Center</strong>: SYTOX<strong><sup>®</sup> </strong>Blue fluorescence emission. 
<strong>Right</strong>: Overlay of the phase contrast and SYTOX<strong><sup>®</sup> </strong>Blue fluorescence emission (pseudo-colored blue)  
images.</p>
<p>In our laboratories, we also perform cytotoxicity  studies of various cancer cell lines (e.g., Hela cells) as well as biochemical  
techniques (e.g., gel electrophoresis, PAGE, viscosity measurements) in the  presence of dirhodium compounds to further probe their 
interactions with  biological targets of interest such as key enzymes of the cellular cycle (e.g.,  polymerases, topoisomerases and 
endonucleases). To better understand their  possible mechanism(s) of activity, the interactions of dirhodium complexes with  DNA are studied 
<i>in vitro</i> and <i>in cellulo</i>. For the <i>in vitro</i> experiments we use different biophysical assays including  viscosity measurements, 
determination of DNA binding constants and  photocleavage experiments whereas for the <i>in  cellulo</i> experiments we apply different 
techniques such as the comet assay,  the annexin V assay, the glutathione modification assay and fluorescence dye  techniques (Figure 4).</p>
<p><strong>References</strong><br>
	1. Chifotides, H. T.; Dunbar, K. R. <i>Acc. Chem. Res.</i>, <strong>2005</strong>, <i>38</i>, 146-156.<br>
	2. H. T. Chifotides and K. R.  Dunbar ‘Rhodium Compounds’, Chapter 12 In ‘<i>Multiple  Bonds Between Metal Atoms</i>’, 3<sup>rd</sup> Edition, 
F. A. Cotton, C.  Murillo and R.A. Walton, Eds., Springer-Science  and Business Media, Inc.: New York, <strong>2005</strong>,  pp 465-589. <br>
	3. Chifotides, H. T.; Koshlap,  K. M.; Pérez, L. M.; Dunbar, K. R. <i>J. Am.  Chem. Soc.</i> <strong>2003</strong>, <i>125</i>, 10703-10713.<br>
	4. Chifotides, H. T.; Koshlap, K.  M.; Pérez, L. M.; Dunbar, K. R. <i>J. Am.  Chem. Soc.</i> <strong>2003</strong>, <i>125</i>, 10714-10724.<br>
	5. Chifotides, H. T.; Dunbar, K. R. <i>J. Am. Chem. Soc.</i> <strong>2007</strong>,<strong> </strong><i>129</i>, 12480-12490.<br>
	6. Chifotides, H. T.; Dunbar, K. R. <i>Chem. Eur. J.</i> <strong>2008</strong>, <i>14</i>, 9902-9913.<br>
	7. Kang, M.; Chifotides, H. T.;  Dunbar, K. R. <i>Biochemistry</i>, <strong>2008</strong>, <i>47</i>, 2265-2276. </p>
")

research2 = Research.create(:title => "Molecular Materials Based on TCNQ", :summary => "We are interested in molecular magnets and molecular 
conductors based on coordination polymers of 7,7,8,8-tetracyanoquinodimethane (TCNQ) because the materials are lighter than the traditional 
ones, they are typically obtained at room temperature, and the properties can be tuned by installing substituents on the ring that change the 
steric bulk and redox behavior of the ligand. The TCNQ ligand is very stable in its radical anion form and, as such, it is very useful as a 
spin carrier in coordination compounds. In fact, the magnetic communication between metal ions is greatly enhanced in comparison with 
diamagnetic linkers of similar size. The co-assembly of TCNQ radicals with transition metal, main group and lanthanide metal ions leads 
to materials that exhibit interesting magnetic and/or electronic properties. The coordination chemistry of TCNQ is diverse, as illustrated 
by the formation of 0-D complexes, 1-D chains, 2-D frameworks and 3-D nets. We have synthesized and characterized representative examples 
of each dimensionality. Our research is directed at obtaining crystalline phases that can be analyzed by single crystal diffraction techniques 
and correlating the structural features with the physical properties in order to build a database of information that we can draw upon for future 
design of materials with improved properties.", :content => "
<p>We are interested in molecular magnets and molecular conductors based on coordination polymers of 7,7,8,8<tt>-</tt>tetracyanoquinodimethane (TCNQ) because the materials are lighter than the traditional ones, they are typically obtained at room temperature, and the properties can be tuned by installing substituents on the ring that change the steric bulk and redox behavior of the ligand. The TCNQ ligand is very stable in its radical anion form and, as such, it is very useful as a spin carrier in coordination compounds. In fact, the magnetic communication between metal ions is greatly enhanced in comparison with diamagnetic linkers of similar size. The co<tt>-</tt>assembly of TCNQ radicals with transition metal, main group and lanthanide metal ions leads to materials that exhibit interesting magnetic and/or electronic properties. The coordination chemistry of TCNQ is diverse, as illustrated by the formation of 0<tt>-</tt>D complexes, 1<tt>-</tt>D chains, 2<tt>-</tt>D frameworks and 3<tt>-</tt>D nets. We have synthesized and characterized representative examples of each dimensionality.  Our research is directed at obtaining crystalline phases that can be analyzed by single crystal diffraction techniques and correlating the structural features with the physical properties in order to build a database of information that we can draw upon for future design of materials with improved properties.</p>
<p></p><center><b>Discrete M<tt>-</tt>TCNQ complexes</b></center><p></p>
<p>The 0<tt>-</tt>dimensional {Tb[TCNQF<sub>4</sub>]<sub>2</sub>[H<sub>2</sub>O]<sub>6</sub>} (TCNQF<sub>4</sub>)(3H<sub>2</sub>O) mononuclear 
complex is an example of a lant hanide<tt>-</tt>organic radical with fascinating and complex behavior. A detailed micro<tt>-</tt>SQUID study at 
low temperature, conducted in collaboration with Dr. Wolfgang Wernsdorfer from the Institut Neel at Grenoble, revealed an unprecedented interplay 
between single molecule magnetic behavior (SMM) and a phonon bottleneck effect (PB). The dilution studies with diamagnetic Y<sup>III</sup> ions 
indicate that the \"sea of organic S = 1/2 radicals\" is responsible for the PB effect observed and the SMM behavior arises from the magnetically 
anisotropic Tb<sup>III</sup> ions.</p>
<p><left><img src=\"/uploads/research_images/TbTCNQF4.png\" width=\"300\" height=\"300\"></left></p><center><img src=\"/uploads/research_images/TbTCNQF4hyst.png\" 
width=\"300\" height=\"300\">
</center><right><img src=\"/uploads/research_images/TbTCNQF4ac.png\" width=\"300\" height=\"300\"></right><p></p>
<p>Molecular structure of the Tb-TCNQF<sub>4</sub> cationic complex (top left). Field-dependent micro<tt>-</tt>SQUID magnetization scans collected 
for Tb<tt>-</tt>TCNQF<sub>4</sub> at 0.04 K showing double<tt>-</tt>s shape hysteresis (top right). Interstitial water molecules and hydrogen atoms 
have been omitted for the sake of clarity. Tb = green, O = red, N = blue, C = gray, F = yellow. Temperature dependence of the imaginary component 
χ'' of the AC magnetic susceptibility of Tb<tt>-</tt>TCNQF<sub>4</sub> measured under zero applied field in an oscillating field of 3 Oe at 
different frequencies (bottom).</p>
<p></p><center><b>M<tt>-</tt>TCNQ 3D frameworks</b></center><p></p>
<p>Crystalline 3D materials based on TCNQ are also under investigation in our laboratories. Our work is contributing to the understanding of 
important electronic materials with non<tt>-</tt>volatile memory effects that have been known for decades but whose properties are still not 
well understood. We discovered that there are two phases of Cu(TCNQ)<sup>1</sup> (see figure) and Ag(TCNQ). Cu(TCNQ) phase I and Ag(TCNQ) 
are 1<tt>-</tt>D semiconductors with electron mobility being facilitated through TCNQ columns with evenly spaced TCNQ radical units. Cu(TCNQ) 
phase I is one of the most extensively studied semiconductors among all coordination polymers and exhibits a reversible switching from a 
highly resistive state to a conducting state promoted by the application of an electric field or irradiation, which makes it an excellent 
candidate for non-volatile memory.<sup>2,3</sup> The promise for commercial applications is sufficiently high such that researchers have 
fabricated devices with nanowires, nanorods and nanoribbons of Cu(TCNQ) as well as Ag(TCNQ).<sup>4-9</sup></p>
<p><left><img src=\"/uploads/research_images/CuTCNQ1.jpg\" width=\"379\" height=\"375\"></left><right><img src=\"/uploads/research_images/CuTCNQ2.jpg\" 
width=\"379\" height=\"375\"></right></p>
<p>A perspective view of Cu(TCNQ) phase I (left), in which the π<tt>-</tt>π stacking of 3.2 Å is observed along the short axis (a axis). 
A perspective view of Cu(TCNQ) phase II in which there are no π<tt>-</tt>π interactions because the shortest distance between rings is 5.3 
Å (right). Color code: Cu = green, C = gray, N = blue, H = light pink.</p>
<p><sup>1</sup>New Insight into the Nature of Cu(TCNQ):  Solution Routes to Two Distinct Polymorphs and Their Relationship to Crystalline 
Films that Display Bistable Switching Behavior.  Robert A. Heintz, Hanhua Zhao, Xiang Ouyang, Giulio Grandinetti, Jerry Cowen and Kim R. 
Dunbar <i>Inorg. Chem.</i> <b>1999</b>, <i>38</i>, 144-156.</p>
<p><sup>2</sup>Electrical switching and memory phenomena in Cu<tt>-</tt>TCNQ thin films. R. S. Potember, T. O. Poehler, D. O. Cowan, 
<i>Appl. Phys. Lett</i>. <b>1979</b>, <i>34</i> , 405.</p>
<p><sup>3</sup>Optical switching in semiconductor organic thin films. R. S. Potember, T. O. Poehler, R. C. Benson,  <i>Appl. Phys. 
Lett</i>. <b>1982</b>, <i>41</i> , 548.</p>
<p><sup>4</sup>Directed integration of tetracyanoquinodimethane<tt>-</tt>Cu organic nanowires into prefabricated device architectures. 
K. Xiao, I. N. Ivanov, A. A. Puretzky, Z. Liu, D. B. Geohegan, <i>Adv. Mater</i>., <b>2006</b>, <i>18</i>, 2184-2188.</p>
<p><sup>5</sup>Single<tt>-</tt>Crystal Organic Nanowires of Copper<tt>-</tt>Tetracyanoquinodimethane: Synthesis, Patterning, 
Characterization, and Device Applications. K. Xiao, J. Tao, Z. Pan, A. A. Puretzky, I. N. Ivanov, S. J. Pennycook, D. B. Geohegan, 
<i>Angew. Chem. Int. Ed</i>. <b>2007</b>, <i>46</i>, 2650.</p>
<p><sup>6</sup>Particle<tt>-</tt>Size Control and Patterning of a Charge<tt>-</tt>Transfer Complex for Nanoelectronics. Y. 
Liu, Z. Ji, Q. Tang, L. Jiang, H. Li, M. He, W. Hu, D. Zhang, L. Jiang, X. Wang, C. Wang, Y. Liu, D. Zhu, <i>Adv. Mater</i>., 
<b>2005</b>, <i>17</i>, 2953.</p>
<p><sup>7</sup>Controlling the Growth of Single Crystalline Nanoribbons of Copper Tetracyanoquinodimethane for the Fabrication 
of Devices and Device Arrays. Y. Liu, H. Li, D. Tu, Z. Ji, C. Wang, Q. Tang, M. Liu, W. Hu, Y. Liu, D. Zhu, <i>J. Am. Chem. 
Soc</i>., <b>2006</b>, <i>128</i>,12917-12922.</p>
<p><sup>8</sup>Field Emission Properties of Large<tt>-</tt>Area Nanowires of Organic Charge<tt>-</tt>Transfer Complexes. H. 
Liu, Q. Zhao, Y. Li, Y. Liu, F. Lu, J. Zhuang, S. Wang, L. Jiang, D. Zhu, D. Yu, L. Chi, <i>J. Am. Chem. Soc</i>. <b>2005</b>, 
<i>127</i>, 1120.</p>
<p><sup>9</sup>Selective Patterned Growth of Single<tt>-</tt>Crystal Ag<tt>-</tt>TCNQ Nanowires for Devices by Vapor<tt>-
</tt>Solid Chemical Reaction. K. Xiao, J. Tao, A. A. Puretzky, I. N. Ivanov, S. T. Retterer, S. J. Pennycook, D. B. Geohegan, 
<i>Adv. Funct. Mater</i>. <b>2008</b>, <i>18</i>, 3043.</p>
")


#slider image seed

ChemSci_2016_TCNQ = SliderImage.create(:title => "New bifunctional TCNQ-based material", :content => "New bifunctional TCNQ based material: [Co(terpy)2](TCNQ)3·CH3CN exhibits a high room temperature conductivity of 0.13 S cm−1 and an anomaly in conductivity at ∼190 K as evidenced by variable temperature structural, magnetic and conductivity studies.", 
:link => "http://pubs.rsc.org/en/content/articlelanding/2016/sc/c5sc03547c#!divAbstract", :slider_image_picture => "/uploads/slider/ChemSci_2016_TCNQ.png")

JACS_2015_trimers = SliderImage.create(:title => "New MN(III)-NC-M(III)-CN-Mn(III) complex", :content => "New Mn(III)-NC-M(III)-CN-Mn(III) complexes exhibing switchable single-molecule magnet (SMM) and exchange-bias behavior depending on the interstitial methanol content.", 
:link => "http://pubs.acs.org/doi/abs/10.1021/jacs.5b09378", :slider_image_picture => "/uploads/slider/JACS_2015_trimers.png")

HAT = SliderImage.create(:title => "The strength of HAT(CN)6 renders colorimetric halide sensor", :content => "The exceptional π-electron-acceptor strength of HAT(CN)6 renders it an excellent colorimetric halide sensor. It engages in multisite anion interactions, namely, both charge-transfer and anion–π, in solution and the solid state.", :link => "http://onlinelibrary.wiley.com/doi/10.1002/anie.201001755/abstract;jsessionid=B9D0CE52F7ED4464FE09B6D0A1E8BDF9.f01t04", :slider_image_picture => "uploads/slider/HAT.png")

RecordS_2009 = SliderImage.create(:title => "High-sping state observed in molecule based on [Mo(CN)7]4- building block", :content => "A record-breaking high-spin state is observed in a molecule based on the [Mo(CN)7]4− building block. The anionic nanosized docosanuclear {Mo8Mn14} cluster was the first discrete compound based on [Mo(CN)7]4.", 
:link => "http://onlinelibrary.wiley.com/doi/10.1002/anie.201001664/abstract", :slider_image_picture => "/uploads/slider/RecordS_2010.png")

JACS_2014_Rh2 = SliderImage.create(:title => "Leveraging ligand field aroun dimetal center", :content => "Tuning the ligand field around the dimetal center to maximize the photoreactivity and achieve the best photodynamic action.", 
:link => "http://pubs.acs.org/doi/abs/10.1021/ja5078359", :slider_image_picture => "/uploads/slider/JACS_2014_Rh2_HR.png")

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
