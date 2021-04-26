class PagesController < ApplicationController

  def home

  end

  def download
    send_file 'public/Portfolio.fig', type: 'image/png', status: 202
  end


end
