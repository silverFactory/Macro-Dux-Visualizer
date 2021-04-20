class SongsController < ApplicationController
  def create

    @user = User.find_by(username: params[:username])
    @song = @user.songs.build(title: params[:title])
    params[:melody].each do |note|
      @song.notes.build(
        name: note[:name],
        voice: "melody",
        duration: note[:duration],
        time: note[:time]
      )
    end
    params[:harmony].each do |note|
      @song.notes.build(
        name: note[:name],
        voice: "harmony",
        duration: note[:duration],
        time: note[:time]
      )
    end
    params[:bass].each do |note|
      @song.notes.build(
        name: note[:name],
        voice: "bass",
        duration: note[:duration],
        time: note[:time]
      )
    end
    @song.save
    render json: {
      title: @song.title,
      melody: @song.notes.melody,
      harmony: @song.notes.harmony,
      bass: @song.notes.bass
    }
  end
end
