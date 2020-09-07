const promiseConfig = async () => { /* ... however you get config ... */
  const env = process.env.NODE_ENV;
  const ENV_FILE = `./env/.env.${env}`;

  return require('dotenv').config({
    path: ENV_FILE,
  }).parsed;
};

const promiseSchemaControlConfig = async () => {
  const config = await promiseConfig();

  const schemaControlConfig = {
    // for windows
    host: config.DATABASE_HOST,
    port: config.DATABASE_PORT,
    database: config.DATABASE_NAME,
    // schema: dbConfig.schema,
    username: config.DATABASE_USERNAME, // NOTE: the schema-control user _must_ have DDL permissions
    password: config.DATABASE_PASSWORD,
  };
  return schemaControlConfig;
};

module.exports = {
  promiseConfig: promiseSchemaControlConfig,
};
