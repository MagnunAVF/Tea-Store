Rails.application.routes.draw do
  get '/available_teas', to: 'recommendations#available_teas', as: :available_teas
  get '/teas_by_type', to: 'recommendations#teas_by_type', as: :teas_by_type
end
