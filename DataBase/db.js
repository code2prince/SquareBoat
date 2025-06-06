import sql from "mssql";
import dotenv from "dotenv";

const sqlConfig = {
  user: process.env.user,
  password: process.env.password,
  server: process.env.server,
  database: process.env.database,
  options: {
    trustServerCertificate: true,
    encrypt: true,
    enableArithAbort: true, // Recommended setting for mssql package
  },
  pool: {
    max: 10000,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

async function dbConnect() {
  try {
    let pool = await sql.connect(sqlConfig);
    // console.log('pool',pool);
    // console.log("Database Connected");
    return pool;
  } catch (err) {
    console.log("error dbs:", err);
  }
}

export default dbConnect;
