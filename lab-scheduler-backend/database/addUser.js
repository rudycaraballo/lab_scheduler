

let addUser = async (userObj, mysql, fs) => {


  let db = mysql.createConnection({
    host:process.env.SQL_HOSTNAME, 
    user:process.env.SQL_USER, 
    password:process.env.SQL_PW,
    database:process.env.SQL_DB,
    port:3306, 
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    });


  try {
    db.connect((err) => {
      if (err) throw err.message;
    });

    let { fname, lname, pword, email, altEmail } = userObj;

    let query = `INSERT INTO users (Password, FirstName, LastName, PrimaryEmail, AltEmail, Verified)
        VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(
      query,
      [pword, fname, lname, email, altEmail, 0],
      (err, results, fields) => {
        if (err) throw err.message;

        console.log("Added new user to users table", results);
      }
    );
  } catch (err) {
    throw err
  } finally {
    db.end();
    console.log("closed db connection");
  }
};

export default addUser;
