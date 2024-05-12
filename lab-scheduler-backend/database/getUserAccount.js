

let getUserAccount = async (mysqlp, fs, userId) => {

  const pool = mysqlp.createPool({
    host: process.env.SQL_HOSTNAME, 
    user: process.env.SQL_USER, 
    password: process.env.SQL_PW,
    database: process.env.SQL_DB,
    port: 3306,
    ssl: { ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem") },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
      try {
        const [results] = await pool.query(
            `SELECT * FROM bookings
            LEFT JOIN roominfo ON bookings.roomID = roominfo.RoomID
            WHERE bookings.UserID = ?`,
            [userId]
        );
        return results;
      } catch (err) {
        console.error("Error during the query.", err);
      } finally {
        pool.end();
      }
  };
  
  
  export default getUserAccount;