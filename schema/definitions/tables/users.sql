CREATE TABLE IF NOT EXISTS users (
  id              serial primary key,
  login           VARCHAR(128) NOT NULL,
  password        VARCHAR(128) NOT NULL,
  firstName       VARCHAR(128) NOT NULL,
  lastName        VARCHAR(128) NOT NULL
)
