import * as mysqlp from 'mysql2/promise';
import fs from 'fs';

let getRooms = async() => {
  console.log("i am being called");
  const pool = mysqlp.createPool({
    host: "unigathermysql.mysql.database.azure.com",
    user: "bigdorya",
    password: "owgather123!",
    database: "unigather",
    port: 3306,
    ssl: { ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem") },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  try {
    const [results] = await pool.query(
      `SELECT * FROM buildinginfo INNER JOIN roominfo ON buildinginfo.BuildingID = roominfo.BuildingID;`
    );
    console.log("Results:", results);
    return results;
  } catch (err) {
    console.error("Error during the query.", err);
  } finally {
    pool.end();
  }

}

export default getRooms;
