import { Model } from 'objection';
import dotenv from 'dotenv';
dotenv.config()
// import knexConnection from '../config/database';
import Knex from 'knex'

let knex = Knex({
  client: 'pg',
  connection: {
    database: process.env.db_name,
    user: process.env.db_user,
    password: process.env.db_password,
    port: process.env.db_port,
    host: process.env.db_host

  }

});
Model.knex(knex)

export default Model;