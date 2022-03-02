const { Pool } = require('pg');
require('env2')('.env');

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
} else {
  dbUrl = process.env.DB_URL_PRODUCTION;
}
const options = {
  connectionString: process.env.DB_URL_PRODUCTION,
  ssl: false,
};

const connection = new Pool(options);

module.exports = connection;
