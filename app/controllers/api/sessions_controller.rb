class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      sign_in!(@user)
      #render splash page without sign in option
    else
      render json: ["Invalid username and/or password"], status: 401
    end
  end
end
