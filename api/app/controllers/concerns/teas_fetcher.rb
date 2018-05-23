module TeasFetcher
  def fetch_teas(api_url, auth_token)
    url = URI(api_url)

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = auth_token

    response = http.request(request)

    if response.code == "200"
      return JSON.parse(response.read_body)
    elsif response.code == "401"
      raise Errors::InvalidApiAuthToken
    else
      raise Errors::ExternalApiError
    end
  end
end
