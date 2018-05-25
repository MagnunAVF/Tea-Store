Rails.application.routes.draw do
  get '/available_teas', to: 'recommendations#available_teas', as: :available_teas
  get '/teas_by_type', to: 'recommendations#teas_by_type', as: :teas_by_type
  get '/available_teas_types', to: 'recommendations#available_teas_types', as: :available_teas_types
  get '/teas_recommendation', to: 'recommendations#teas_recommendation', as: :teas_recommendation
end
