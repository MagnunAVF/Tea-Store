module Errors
  class InvalidApiAuthToken < StandardError
    def message
      "API Auth Token is invalid."
    end
  end

  class ExternalApiError < StandardError
    def message
      "External API is not working."
    end
  end
end
