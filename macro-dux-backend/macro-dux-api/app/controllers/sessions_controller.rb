class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])
    if @user == nil
      render json: {message: "no user found"}
    elsif @user.authenticate(params[:password])
        @response = {
          user: @user,
          songs: @user.songs.map do |song|
            {
              title: song.title,
              melody: song.notes.melody,
              harmony: song.notes.harmony,
              bass: song.notes.bass
            }
          end
        }
        render json: @response
    else
      render json: {message: "invalid password"}
    end
  end
end
