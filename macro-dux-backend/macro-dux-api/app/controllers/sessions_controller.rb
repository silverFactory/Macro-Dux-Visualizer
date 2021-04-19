class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])
    if @user == nil
      render json: {message: "no user found"}
    elsif @user.authenticate(params[:password])
        render json: @user
    else
      render json: {message: "invalid password"}
    end
  end
end
