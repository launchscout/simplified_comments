defmodule SimpifiedComments.Repo do
  use Ecto.Repo,
    otp_app: :simpified_comments,
    adapter: Ecto.Adapters.Postgres
end
