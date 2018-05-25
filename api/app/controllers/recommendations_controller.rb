class RecommendationsController < ApplicationController
  include TeasFetcher

  def available_teas
    external_api_response = use_external_api

    render json: external_api_response
  end

  def available_teas_types
    external_api_response = JSON.parse(use_external_api)

    error = external_api_response['error']

    if error != '-'
      tea_types = []

      render json: teas_json_response(tea_types, error)
    else
      teas = external_api_response['teas']

      teas_types = select_types(teas)

      render json: types_json_response(teas_types, error)
    end
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

      render json: teas_json_response(selected_teas, error)
    end
  end

  def teas_recommendation
    recommendation_type = params[:recommendation_type]

    if default_recommendations.include?(recommendation_type.to_sym)
      teas_type_list = default_recommendations[recommendation_type.to_sym][:types]

      external_api_response = JSON.parse(use_external_api)

      error = external_api_response['error']

      if error != '-'
        render json: external_api_response
      else

        teas = external_api_response['teas']

        selected_teas = multi_param_filter(teas, teas_type_list)

        render json: teas_json_response(selected_teas, error)
      end

    else
      redirect_to teas_by_type_path(tea_type: recommendation_type)
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

  def select_types(teas)
    selected_types = []

    teas.each do |tea|
      selected_types.push(tea['type'])
    end

    selected_types.uniq
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

    return teas_json_response(selected_teas, error)
  end

  def teas_json_response(teas_list, error)
    {
      'error': error,
      'teas': teas_list
    }.to_json
  end

  def types_json_response(types_list, error)
    {
      'error': error,
      'types': types_list
    }.to_json
  end

  def default_recommendations
    {
      'sleep': { "not": true, "types": ["black tea"]},
      'digestion': { "not": false, "types": ["green tea"]},
      'medicinal': { "not": false, "types": ["white tea", "oolong tea"]},
      'eat': { "not": false, "types": ["chai"]},
    }
  end
end
