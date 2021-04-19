class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.integer :song_id
      t.string :name
      t.string :voice
      t.decimal :duration
      t.decimal :time

      t.timestamps
    end
  end
end
