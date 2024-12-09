class AddNotNullConstraintsToMenus < ActiveRecord::Migration[8.0]
  def change
    change_column_null :menus, :name, false
    change_column_null :menus, :price, false
  end
end
