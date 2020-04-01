class Api::V1::PlayersController < ApplicationController
  def index
    @players = Player.all.limit(10).order(:length)
    render json: @players
  end

  def create
    @player = Player.create!(player_params)
    if @player
      render json: @player
    else
      render json: @player.errors
    end
  end

  def destroy
  end

  private

  def player_params
    params.require(:player).permit(:id, :name, :length, :start, :end)
  end
end
