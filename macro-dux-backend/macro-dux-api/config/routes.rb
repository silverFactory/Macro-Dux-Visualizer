Rails.application.routes.draw do
  post '/songs' => 'songs#create'
end
