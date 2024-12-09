class Menu < ApplicationRecord
  scope :search, ->(query) { where("LOWER(name) LIKE ?", "%#{sanitize_sql_like(query.downcase)}%") }
end
