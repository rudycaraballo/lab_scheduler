let bookARoom = async(mysqlp, fs, bookingForm) => {
    
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

      
    let {userID, buildingID, roomId, dayBooked, startTime, endTime} = bookingForm

   const fixTime = (str) => {
        if(str.length === 4 ) {
            return `0${str}:00`
        } else {
            return `${str}:00`
        }
    }

    startTime = fixTime(startTime)
    endTime = fixTime(endTime)

        
    try {
        //return room info and any bookings it has
      const [results] = await pool.query(
        ` INSERT INTO bookings(BuildingID, UserID, RoomID, DayBooked, StartTimeBooked, EndTimeBooked)
        VALUES(?, ?, ?, ?, ?, ?)`,
        [buildingID, userID, roomId, dayBooked, startTime, endTime]
      );
      console.log("Room info requested");
      return results;
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default bookARoom;