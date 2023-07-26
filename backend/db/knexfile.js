// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "sampleapp",
      user: "tamaroh",
      password: "",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "migrations",
    },
  },
  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
