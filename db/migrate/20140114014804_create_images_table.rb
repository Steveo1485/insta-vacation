class CreateImagesTable < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.float :latitude
    end
  end
end
