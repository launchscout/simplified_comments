defmodule SimpifiedCommentsWeb.ChatChannel do
  @moduledoc false

  use LiveState.Channel, web_module: SimpifiedCommentsWeb
  alias Phoenix.PubSub

  @impl true
  def init(_channel, _params, _socket) do
    PubSub.subscribe(SimpifiedComments.PubSub, "messages")
    {:ok, %{messages: []}}
  end

  @impl true
  def handle_event("add-message", message, state) do
    PubSub.broadcast(SimpifiedComments.PubSub, "messages", {:add_message, message})
    {:noreply, state}
  end

  @impl true
  def handle_message({:add_message, message}, %{messages: messages} = state) do
    {:noreply, Map.put(state, :messages, [message | messages])}
  end

end
