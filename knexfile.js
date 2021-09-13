const dotenv = require('dotenv');
dotenv.config()
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.db_name,
      user: process.env.db_user,
      password: process.env.db_password,
      port: process.env.db_port,
      host: process.env.db_host
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
