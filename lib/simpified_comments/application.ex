defmodule SimpifiedComments.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      SimpifiedCommentsWeb.Telemetry,
      # Start the Ecto repository
      SimpifiedComments.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: SimpifiedComments.PubSub},
      # Start Finch
      {Finch, name: SimpifiedComments.Finch},
      # Start the Endpoint (http/https)
      SimpifiedCommentsWeb.Endpoint
      # Start a worker by calling: SimpifiedComments.Worker.start_link(arg)
      # {SimpifiedComments.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: SimpifiedComments.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    SimpifiedCommentsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
