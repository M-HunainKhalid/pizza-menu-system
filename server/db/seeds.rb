# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Seed data for Menu
Menu.create([
  { name: 'Margherita Pizza', price: 10.5 },
  { name: 'Pepperoni Pizza', price: 12.0 },
  { name: 'Veggie Burger', price: 8.5 },
  { name: 'Chicken Wings', price: 9.0 },
  { name: 'Caesar Salad', price: 7.5 },
  { name: 'BBQ Ribs', price: 14.0 },
  { name: 'Grilled Salmon', price: 18.0 },
  { name: 'Spaghetti Carbonara', price: 11.5 },
  { name: 'Beef Steak', price: 22.0 },
  { name: 'Tacos', price: 9.5 },
  { name: 'Sushi Platter', price: 25.0 },
  { name: 'Lobster Roll', price: 27.5 },
  { name: 'Vegetable Stir Fry', price: 10.0 },
  { name: 'Fish and Chips', price: 12.0 },
  { name: 'Cheeseburger', price: 11.0 },
  { name: 'Chicken Alfredo Pasta', price: 13.5 },
  { name: 'Greek Salad', price: 8.0 },
  { name: 'French Fries', price: 4.5 },
  { name: 'Mozzarella Sticks', price: 6.5 },
  { name: 'Clam Chowder', price: 8.5 },
  { name: 'Onion Rings', price: 5.0 },
  { name: 'Chocolate Cake', price: 6.5 },
  { name: 'Ice Cream Sundae', price: 7.0 },
  { name: 'Apple Pie', price: 5.5 },
  { name: 'Milkshake', price: 5.0 },
  { name: 'Espresso', price: 3.0 },
  { name: 'Cappuccino', price: 4.0 },
  { name: 'Iced Latte', price: 4.5 },
  { name: 'Green Tea', price: 3.5 },
  { name: 'Smoothie', price: 5.5 }
])
