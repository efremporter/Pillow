class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in!(@user)
      # render splash page, sign in option should now be a profile button
    else
      render json @user.errors.full_messages, status: 422
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
