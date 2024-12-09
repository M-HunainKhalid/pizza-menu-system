class MenusController < ApplicationController
  def index
    menus = Menu.all

    menus = menus.search(params[:search]) if params[:search].present?

    menus = menus.order(price: params[:sort] == "asc" ? :asc : :desc) if params[:sort].present?

    if menus.empty?
      render json: { response: false, message: "No menus found matching the criteria" }, status: :ok
      return
    end

    render json: { response: true, search: menus, total_results: menus.count() }, status: :ok
  end
end
