class GreetingsController < ApplicationController
    def index
        @greetings = Greeting.find(rand(1..5))

        render json: @greetings
    end
  end