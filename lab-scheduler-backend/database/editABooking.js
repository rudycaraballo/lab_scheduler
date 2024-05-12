

let editABooking = async(mysqlp, fs, editBookingForm) => {
    
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

    const {bookingId, newStartTime, newEndTime, newRoom, newDate} = editBookingForm;
    console.log(editBookingForm);
        
    try {
        //return room info and any bookings it has
        // update each column in individual calls
        if(newStartTime !== "" && newEndTime !=="" ) {
            await pool.query(
                `UPDATE bookings SET StartTimeBooked = ?, EndTimeBooked = ? WHERE BookingID = ?;`,
                [newStartTime, newEndTime, bookingId]
              );
        }

        if(newDate) {
            const [results] = await pool.query(
                `UPDATE bookings SET DayBooked = ? WHERE BookingID = ?;`,
                [newDate, bookingId]
              );
        }

        if(newRoom) {
            const [results] = await pool.query(
                `SELECT * FROM roominfo WHERE RoomNum = ?;`,
                [newRoom]
              );
              let newRoomsId = results[0].RoomID;

              const [results2] = await pool.query(
                `UPDATE bookings SET RoomID= ? WHERE BookingID = ?;`,
                [newRoomsId, bookingId]
              );
        }


      console.log("Edited room in db");
    } catch (err) {
      console.error("Error during the query.", err);
    } finally {
      pool.end();
    }
  
  }
  
  export default editABooking;