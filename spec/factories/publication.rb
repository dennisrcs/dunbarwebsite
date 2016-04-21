FactoryGirl.define do
  factory :publication do |publication|
      publication.article{"How to code"}
      publication.contributors{"new person"}
      publication.journal{"ICSE"}
      publication.year{"2012"}
      publication.more_info{"no more info"}
      publication.pages{"199"}
      publication.link{"http://icse.howtocode.com"}
      publication.publication_picture{'howtocode.png'}
  end

  end
