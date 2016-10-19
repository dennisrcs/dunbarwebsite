f = File.open("old_publications.html", "r")

pubs = Array.new

regex_li = Regexp.new("<li>(.*)</li>", Regexp::IGNORECASE)
f.each_line do |line|
  match = regex_li.match(line)
  pubs.push(match[1])
end
f.close

titles = Array.new
pubs.each do |pub|
  titles.push(pub.split('.')[0])
end

pubs.each_with_index do |pub, index|
  regex_rm_title = Regexp.new(Regexp.escape(titles[index]) + "\s*.\s*")
  pub.gsub!(regex_rm_title, "")
end

collaborators = Array.new
rm_comma = Regexp.new(',\s*$')
pubs.each do |pub|
  aux = pub.split('<i>')[0]
  aux.gsub!(rm_comma, '');
  collaborators.push(aux)
end

pubs.each_with_index do |pub, index|
  regex_rm_collaborators = Regexp.new(Regexp.escape(collaborators[index]) + "\s*,*\s*")
  pub.gsub!(regex_rm_collaborators, "")
end

journals = Array.new
regex_journal = Regexp.new("<i>(.*)</i>,\s*<b>", Regexp::IGNORECASE)
pubs.each do |pub|
  match = regex_journal.match(pub)
  journals.push(match[1])
end

pubs.each_with_index do |pub, index|
  regex_rm_journal = Regexp.new("<i>" + Regexp.escape(journals[index]) + "</i>\s*,*\s*")
  pub.gsub!(regex_rm_journal, "")
end

years = Array.new
regex_year = Regexp.new("<b>(.*)</b>")
pubs.each do |pub|
  match = regex_year.match(pub)
  years.push(match[1])
end

pubs.each_with_index do |pub, index|
  regex_rm_year = Regexp.new("<b>" + Regexp.escape(years[index]) + "</b>\s*,*\s*")
  pub.gsub!(regex_rm_year, "")
end

volumes = Array.new
regex_volume = Regexp.new("<i>(.*)</i>")
pubs.each do |pub|
  match = regex_volume.match(pub)
  if match != nil
    volumes.push(match[1])
  else
    volumes.push("")
  end
end

pubs.each_with_index do |pub, index|
  regex_rm_volume = Regexp.new("<i>" + Regexp.escape(volumes[index]) + "</i>\s*,*\s*")
  match = regex_rm_volume.match(pub)
  if match != nil
    pub.gsub!(regex_rm_volume, "")
  end
end

pages = Array.new
pubs.each_with_index do |pub, index|
  if pub == "" || pub == nil
    pages.push("")
  else
    pages_link = pub.split('.')
    if pages_link[0] == "" || pages_link[0] == nil
      pages.push("")
    else
      pages.push(pages_link[0])
    end
  end
end

pubs.each_with_index do |pub, index|
  regex_rm_pages = Regexp.new(Regexp.escape(pages[index]))
  if pub != nil && pub != ""
    pub.gsub!(regex_rm_pages, "")
  end
end

links = Array.new
regex_link = Regexp.new("\.(.*)")
pubs.each_with_index do |pub, index|
  match = regex_link.match(pub)
  if match != nil
    links.push(match[1])
  else
    links.push("")
  end
end

size = titles.length
File.open('pubs.txt', 'w') do |file|
  for i in 0..size-1
    pub_number = size-i
    content = "Publication.create(:article => '" + titles[i] +  "', :contributors => '" + collaborators[i] + "', :journal => '"\
              + journals[i] + "', :year => '" + years[i] + "', :more_info => '" + volumes[i] + "', :pages => '" + pages[i]\
              + "', :publication_picture => '/uploads/publications/" + pub_number.to_s + ".png', :link => '" + links[i] + "')"
    file.write(content + "\n")
  end
end