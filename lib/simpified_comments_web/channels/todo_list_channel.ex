defmodule SimpifiedCommentsWeb.TodoListChannel do
  @moduledoc false

  use LiveState.Channel, web_module: SimpifiedCommentsWeb

  @impl true
  def init(_channel, _params, _socket) do
    {:ok, %{todos: ["Buy Milk", "Speak at Momentum"]}}
  end

  @impl true
  def handle_event("add-todo", item, %{todos: todos} = state) do
    {:noreply, Map.put(state, :todos, [item | todos])}
  end

end
