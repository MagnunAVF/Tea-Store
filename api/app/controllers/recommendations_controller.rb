class RecommendationsController < ApplicationController
  include TeasFetcher

  def available_teas
    begin
      teas = fetch_teas(ENV['TEAS_API_URL'], ENV['AUTHORIZATION_TOKEN'])
    rescue StandardError
      error = "Internal Recommendation API Error"
      selected_teas = []
    else
      error = "-"
      selected_teas = teas_in_stock(teas)
    ensure
      render json: json_response(selected_teas, error)
    end
  end

  def teas_by_type
    tea_type = params[:tea_type]

    begin
      teas = fetch_teas(ENV['TEAS_API_URL'], ENV['AUTHORIZATION_TOKEN'])
    rescue StandardError
      error = "Internal Recommendation API Error"
      selected_teas = []
    else
      error = "-"
      selected_teas = filter_teas_by_type(teas, tea_type)
    ensure
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

  def filter_teas_by_type(teas, type)
    selected_teas = []

    teas.each do |tea|
      if tea["type"] == type and tea["stock_quantity"].to_i > 0
        selected_teas.push(tea)
      end
    end

    selected_teas
  end

  def json_response(teas_list, error)
    {
      'error': error,
      'teas': teas_list
    }.to_json
  end
end
