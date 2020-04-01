class Player < ApplicationRecord
  validates :name, presence: true, length: { maximum: 40 }
  validates :length, presence: true
end
