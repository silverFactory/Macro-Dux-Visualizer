class Note < ApplicationRecord
  belongs_to :song

  scope :melody, -> {where(voice: "melody")}
  scope :harmony, -> {where(voice: "harmony")}
  scope :bass, -> {where(voice: "bass")}
end
