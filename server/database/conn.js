const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "airtribe",
  password: "devesh",
  port: 5000
});

module.exports = pool;