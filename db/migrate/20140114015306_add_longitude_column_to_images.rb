class AddLongitudeColumnToImages < ActiveRecord::Migration
  def change
    add_column :images, :longitude, :float
  end
end