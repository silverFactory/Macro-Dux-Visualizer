class SongsController < ApplicationController
  def create
    byebug
    @user = User.find_by(username: params[:username])
    @song = @user.songs.build(title: params[:title])
    params[:melody].each do |note|
      @song.notes.build(
        name: note[:name],
        voice: note[:voice],
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
