const { Pool } = require('pg');
require('env2')('.env');

if (!process.env.DB_URL_PRODUCTION) {
  throw new Error('No DB_URL');
}
const options = {
  connectionString: process.env.DB_URL_PRODUCTION,
  ssl: false,
};

const connection = new Pool(options);

module.exports = connection;
