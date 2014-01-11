InstaVacation::Application.routes.draw do
  root 'maps#index'

  resources :maps, only: [:index]
end
