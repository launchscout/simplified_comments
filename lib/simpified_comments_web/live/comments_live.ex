defmodule SimpifiedCommentsWeb.CommentsLive do
  use SimpifiedCommentsWeb, :live_view

  def mount(_parms, _session, socket) do
    {:ok, socket |> assign(:comments, [])}
  end

  def handle_event("add_comment", comment, %{assigns: %{comments: comments}} = socket) do
    {:noreply, socket |> assign(:comments, [comment | comments])}
  end
end
