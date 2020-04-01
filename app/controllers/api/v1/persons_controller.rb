class Api::V1::PersonsController < ApplicationController
  def index
    @persons = Person.all
    render json: @persons.to_json(only: [:name])
  end

  def find
    @person = Person.where("left_edge < ?", params[:x])
                .where("right_edge > ?", params[:x])
                .where("top_edge < ?", params[:y])
                .where("bottom_edge > ?", params[:y])
                .find_by(name: params[:name])
    render json: @person
  end

  private

  def person_params
    params.require(:person).permit(:id, :name, :left_edge, :right_edge, :top_edge, :bottom_edge)
  end
  

end
