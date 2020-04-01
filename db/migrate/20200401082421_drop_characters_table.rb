class DropCharactersTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :characters
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
