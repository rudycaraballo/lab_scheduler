let getFilteredRooms = async(mysqlp, fs, bookingStart, bookingEnd) => {


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
        //Search booking orders
      const [results] = await pool.query(
        `SELECT * FROM bookings
        WHERE (StartTimeBooked > ? AND StartTimeBooked < ?) 
        OR (StartTimeBooked <= ? AND EndTimeBooked >= ?)
        OR (EndTimeBooked > ? AND EndTimeBooked < ?);`,
        [bookingStart, bookingEnd, bookingStart, bookingEnd, bookingStart, bookingEnd]
      );
      console.log("Rooms filtered requested");
      return results;
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default getFilteredRooms;
  