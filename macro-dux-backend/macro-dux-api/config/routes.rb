Rails.application.routes.draw do
  post '/songs' => 'songs#create'
  post '/sessions' => 'sessions#create'
end
