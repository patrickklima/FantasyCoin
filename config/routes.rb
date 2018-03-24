Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :coins, only: [:index]

  get '/coin', to: 'coins#coin'

  get '/double_api_test', to: 'coins#double_api_test'

  get '/test_data', to: 'test#get'
end
