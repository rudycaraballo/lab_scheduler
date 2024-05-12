

let getMonthlyReport = async(mysqlp, fs, month) => {


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
        //add joins to include room information and user information
      const [results] = await pool.query(
        `SELECT b.BookingID, bi.BuildingName, ri.RoomNum, b.DayBooked, b.DayBooked, b.StartTimeBooked, b.EndTimeBooked, u.UserID, u.FirstName FROM bookings b
        LEFT JOIN roominfo ri
        ON b.RoomID = ri.RoomID
        LEFT JOIN buildinginfo bi
        ON b.BuildingID = bi.BuildingID
        LEFT JOIN users u
        ON u.UserID = b.UserID;`
      );
      console.log("all bookings requested");
      return results;
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default getMonthlyReport;
  