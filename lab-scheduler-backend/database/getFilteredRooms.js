

let getFilteredRooms = async(mysqlp, fs, bookingStart, bookingEnd, dayBooked) => {


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
        //Search booking orders
      const [results] = await pool.query(
        `SELECT * FROM bookings
        WHERE DayBooked = ? AND 
        ((StartTimeBooked > ? AND StartTimeBooked < ?) 
        OR (StartTimeBooked <= ? AND EndTimeBooked >= ?)
        OR (EndTimeBooked > ? AND EndTimeBooked < ?));`,
        [dayBooked, bookingStart, bookingEnd, bookingStart, bookingEnd, bookingStart, bookingEnd]
      );
      console.log("Returned filtered rooms");
      return results;
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default getFilteredRooms;
  