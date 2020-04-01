class ChangeColumnsInPersons < ActiveRecord::Migration[6.0]
  def change
    rename_column :people, :left, :left_edge
    rename_column :people, :right, :right_edge
    rename_column :people, :top, :top_edge
    rename_column :people, :bottom, :bottom_edge
  end
end
