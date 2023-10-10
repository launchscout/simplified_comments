defmodule SimpifiedCommentsWeb.PageController do
  use SimpifiedCommentsWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end

  def comments(conn, _params) do
    render(conn, :comments, layout: false)
  end

  def todo_list(conn, _params) do
    render(conn, :todo_list, layout: false)
  end

end
