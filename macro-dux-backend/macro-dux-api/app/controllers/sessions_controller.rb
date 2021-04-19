class SessionsController < ApplicationController
  def create
    user = {
      username: "test"
    }
    render json: user
  end
end
