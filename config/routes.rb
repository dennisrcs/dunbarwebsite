Rails.application.routes.draw do
  root                'static_pages#home'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  get 'logout'  => 'sessions#destroy'
  
      default_url_options :host => "test.host"

  
  #get     'publications' => 'publications#index'
  #get    'publications/new' => 'publications#new'
  resources :publications, only: [:index, :new] 
  
  #resources :resumes, only: [:index, :new, :create, :destroy]
  resources :publications
  #match "publications/:id", to: 'publications#edit', via: [:post, :get]
  match "publications/:id/edit", to: 'publications#edit', via: [:post, :get]
  #match "publications/:id/edit", to  'publications#update', via: [:put]
  delete 'logout'  => 'sessions#destroy'
  
  resources :members
  resources :account_activations, only: [:edit, :update]
  resources :password_resets,     only: [:new, :create, :edit, :update]
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
