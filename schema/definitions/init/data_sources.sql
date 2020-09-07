CREATE TABLE test (
  -- meta
  id              serial primary key,
  created_at      timestamp DEFAULT CURRENT_TIMESTAMP,

  -- static
  name            VARCHAR(128) NOT NULL,

  -- meta meta
  CONSTRAINT data_source_ux1 UNIQUE (name)
)
