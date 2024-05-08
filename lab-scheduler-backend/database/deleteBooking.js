let deleteABooking= async(mysqlp, fs, bookingId) => {
    
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

    console.log(bookingId);    
        
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