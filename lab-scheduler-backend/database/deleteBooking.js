

let deleteABooking= async(mysqlp, fs, bookingId) => {
    
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
        //return room info and any bookings it has
      const [results] = await pool.query(
        ` DELETE FROM bookings WHERE BookingID = ?;`,
        [bookingId]
      );
      console.log("deleted room from database");
      return results;
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default deleteABooking;