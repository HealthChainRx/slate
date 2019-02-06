FROM ruby:2.5.1

RUN apt-get update && apt-get install -y nodejs \
&& apt-get clean && rm -rf /var/lib/apt/lists/* && gem install bundler

COPY . .

WORKDIR /app

RUN bundle install