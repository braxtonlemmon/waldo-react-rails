class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.integer :left
      t.integer :right
      t.integer :top
      t.integer :bottom

      t.timestamps
    end
  end
end
