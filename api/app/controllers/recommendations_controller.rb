class RecommendationsController < ApplicationController
  include TeasFetcher

  def available_teas
    external_api_response = use_external_api

    render json: external_api_response
  end

  def teas_by_type
    external_api_response = JSON.parse(use_external_api)

    tea_type = params[:tea_type]
    error = external_api_response['error']

    if error != '-'
      render json: external_api_response
    else

      teas = external_api_response['teas']
      selected_teas = multi_param_filter(teas, [tea_type])

      render json: json_response(selected_teas, error)
    end
  end

  private
  def teas_in_stock(teas)
    selected_teas = []

    teas.each do |tea|
      if tea["stock_quantity"].to_i > 0
        selected_teas.push(tea)
      end
    end

    selected_teas
  end

  def multi_param_filter(teas, types_list)
    selected_teas = []

    teas.each do |tea|
      if types_list.include?(tea["type"])
        selected_teas.push(tea)
      end
    end

    selected_teas
  end

  def use_external_api
    begin
      teas = fetch_teas(ENV['TEAS_API_URL'], ENV['AUTHORIZATION_TOKEN'])
    rescue StandardError
      error = "Internal Recommendation API Error"
      selected_teas = []
    else
      error = "-"
      selected_teas = teas_in_stock(teas)
    end

    return json_response(selected_teas, error)
  end

  def json_response(teas_list, error)
    {
      'error': error,
      'teas': teas_list
    }.to_json
  end
end
