import { Pool } from 'pg';
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

import { configLogger as log } from './winstonLog';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const PORT = 3000;
const HOST = '0.0.0.0';

const PG_CONNECTION = {
  host: process.env.POSTGRES_HOST, // host of db container
  port: 5432, // 5432 is the default;
  database: process.env.POSTGRES_DB, // database name
  user: process.env.POSTGRES_USER, // database user name
  password: process.env.POSTGRES_PWD, // database password
};

const SEQUILIZE_NEW = new Sequelize({
  host: PG_CONNECTION.host,
  dialect: 'postgres',
  port: PG_CONNECTION.port,
  database: PG_CONNECTION.database,
  username: PG_CONNECTION.user,
  password: PG_CONNECTION.password,
  benchmark: true,
  logging: false, // console.log, // false,
});

const POOL_PG = new Pool(PG_CONNECTION);

const connectToDB = async () => {
  try {
    await POOL_PG.connect();
    SEQUILIZE_NEW.authenticate();
    console.log('PostgresSQL connection made');
  } catch (err) {
    log.log('error', `Error in establish connection with DB error: ${err}`);
    console.log(err);
  }
};

connectToDB();

const { WORD_API_KEY } = process.env;

const WORDS_API_CONFIG = {
  url: 'https://wordsapiv1.p.rapidapi.com/words/',
  hostname: 'wordsapiv1.p.mashape.com',
  apiKey: WORD_API_KEY,
};
export {
  PORT,
  HOST,
  SEQUILIZE_NEW,
  WORDS_API_CONFIG,
};
