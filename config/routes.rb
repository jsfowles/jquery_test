Rails.application.routes.draw do
  get 'grid/index'

  root 'dashboard#index'
end
