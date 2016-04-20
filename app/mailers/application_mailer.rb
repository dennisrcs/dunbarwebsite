class ApplicationMailer < ActionMailer::Base
  default from: "postmaster@sandbox57e5c989756c4ca3a03a8e06c15cc1ac.mailgun.org"
  layout 'mailer'
end
