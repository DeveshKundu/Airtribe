const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "airtribe",
  password: "devesh",
  port: 5432
});

module.exports = pool;