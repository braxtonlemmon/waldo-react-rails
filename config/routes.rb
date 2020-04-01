Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'persons/index'
      post 'persons/find'

      get 'players/index'
      post 'players/create'
    end
  end
end
