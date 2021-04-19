class SongsController < ApplicationController
  def create
    song = {
      title: "something",
      notes: "tons o notes"
    }
    render json: song
  end
end
