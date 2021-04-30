Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get '/download', to: "pages#download"
  get '/download_cv', to: "pages#download_cv"
end
