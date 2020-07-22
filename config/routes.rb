Rails.application.routes.draw do
  root "mains#index"

  resources :mains, only: [:index] do
    collection do
      get "company"
      get "recrit"
      get "contact"
    end
  end
end
