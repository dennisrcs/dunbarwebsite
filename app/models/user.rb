class User < ActiveRecord::Base
  attr_accessible :username, :email, :password, :password_confirmation
  
  has_secure_password
  validates :password, presence: true, length: { minimum: 8 }
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end
end
