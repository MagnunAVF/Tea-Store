FROM ruby:alpine

RUN apk add --update build-base postgresql-dev tzdata
RUN gem install rails -v '5.2.0'

WORKDIR /app
ADD Gemfile /app/
ADD Gemfile.lock /app/
RUN bundle install

EXPOSE 3000
