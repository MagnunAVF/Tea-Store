require 'rails_helper'

RSpec.describe RecommendationsController, type: :controller do
  context "When getting available teas" do
    context "with a successful tea fetch" do
      it "should return a tea list" do
        VCR.use_cassette('teas') do
          get :available_teas

          result = JSON.parse(response.body)
          error = result["error"]
          teas = result["teas"]

          fixture_file_path = Rails.root.to_s + "/spec/fixtures/available_teas.json"
          json_fixture = File.read(fixture_file_path)
          expected_result = JSON.parse(json_fixture)['teas']

          expect(error).to eq("-")
          expect(teas).to eq(expected_result)
        end
      end
    end

    context "with a NOT successful tea fetch" do
      it "should return an error message in json response" do
        VCR.use_cassette('teas') do
          allow(ENV).to receive(:[]).with('TEAS_API_URL').and_return(Faker::LordOfTheRings.character)
          allow(ENV).to receive(:[]).with('AUTHORIZATION_TOKEN').and_return(Faker::LordOfTheRings.location)

          get :available_teas

          result = JSON.parse(response.body)
          error = result["error"]
          teas = result["teas"]

          expect(error).to eq("Internal Recommendation API Error")
          expect(teas).to eq([])
        end
      end
    end
  end

  context "When getting teas by type" do
    context "with a successful tea fetch" do
      it "should return a filtered tea list" do
        VCR.use_cassette('teas') do
          get :teas_by_type, params: { "tea_type": "chai" }

          result = JSON.parse(response.body)
          error = result["error"]
          teas = result["teas"]

          fixture_file_path = Rails.root.to_s + "/spec/fixtures/chai_teas.json"
          json_fixture = File.read(fixture_file_path)
          expected_result = JSON.parse(json_fixture)['teas']

          expect(error).to eq("-")
          expect(teas).to eq(expected_result)
        end
      end
    end

    context "with a NOT successful tea fetch" do
      it "should return an error message in json response" do
        VCR.use_cassette('teas') do
          allow(ENV).to receive(:[]).with('TEAS_API_URL').and_return(Faker::LordOfTheRings.character)
          allow(ENV).to receive(:[]).with('AUTHORIZATION_TOKEN').and_return(Faker::LordOfTheRings.location)

          get :teas_by_type, params: { "tea_type": "chai" }

          result = JSON.parse(response.body)
          error = result["error"]
          teas = result["teas"]

          expect(error).to eq("Internal Recommendation API Error")
          expect(teas).to eq([])
        end
      end
    end
  end

  context "When getting available tea types" do
    context "with a successful tea fetch" do
      it "should return a list of tea types" do
        VCR.use_cassette('teas') do
          get :available_teas_types

          result = JSON.parse(response.body)
          error = result["error"]
          teas_types = result["types"]

          fixture_file_path = Rails.root.to_s + "/spec/fixtures/available_teas_types.json"
          json_fixture = File.read(fixture_file_path)
          expected_result = JSON.parse(json_fixture)['types']

          expect(error).to eq("-")
          expect(teas_types).to eq(expected_result)
        end
      end
    end
  end

  context "When getting teas by recommendation route" do
    context "with a successful tea fetch" do
      it "should return a filtered tea list" do
        VCR.use_cassette('teas') do
          get :teas_recommendation, params: { "recommendation_type": "medicinal" }

          result = JSON.parse(response.body)
          error = result["error"]
          teas = result["teas"]

          fixture_file_path = Rails.root.to_s + "/spec/fixtures/medicinal_teas.json"
          json_fixture = File.read(fixture_file_path)
          expected_result = JSON.parse(json_fixture)['teas']

          expect(error).to eq("-")
          expect(teas).to eq(expected_result)
        end
      end

      it "should return a filtered tea list" do
        VCR.use_cassette('teas') do
          get :teas_recommendation, params: { "recommendation_type": "chai" }

          redirect_message = '<html><body>You are being <a href="http://test.host/teas_by_type?tea_type=chai">redirected</a>.</body></html>'

          expect(response.body).to eq(redirect_message)
        end
      end
    end
  end

end
