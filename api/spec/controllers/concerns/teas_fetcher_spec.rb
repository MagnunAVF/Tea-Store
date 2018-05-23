require 'rails_helper'
include TeasFetcher

RSpec.describe TeasFetcher do
  context "When requesting data" do
      let(:valid_api_url) { ENV['TEAS_API_URL'] }
      let(:valid_api_auth_token) { ENV['AUTHORIZATION_TOKEN'] }
      let(:invalid_api_url) { Faker::Hobbit.quote }
      let(:invalid_api_auth_token) { Faker::GameOfThrones.house }

      context "with a valid url" do
        context "with a valid auth token" do
          context "and the external API is working" do
            it "should return a tea list" do
              VCR.use_cassette('teas') do
                expect(
                  fetch_teas(valid_api_url, valid_api_auth_token)
                ).to be_kind_of(Array)
              end
            end
          end

          context "and the external API is NOT working." do
            it "should raise an ERROR (ExternalApiError)" do
              stub_request(:any, valid_api_url).to_return(status: 501)

              expect {
                fetch_teas(valid_api_url, invalid_api_auth_token)
              }.to raise_error(Errors::ExternalApiError)
            end
          end
        end

        context "with a NOT valid auth token" do
          it "should raise an ERROR (InvalidApiAuthToken)" do
            stub_request(:any, valid_api_url).to_return(status: 401)

            expect {
              fetch_teas(valid_api_url, invalid_api_auth_token)
            }.to raise_error(Errors::InvalidApiAuthToken)
          end
        end
      end

      context "with a NOT valid url" do
        it "should raise an ERROR (InvalidURIError)" do
          expect {
            fetch_teas(invalid_api_url, invalid_api_auth_token)
          }.to raise_error(URI::InvalidURIError)
        end
      end
  end
end
