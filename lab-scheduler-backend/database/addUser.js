let addUser = async (db, userObj) => {
console.log("add user is being automatically called");
  let status;
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

    status = 200;
  } catch (err) {
    console.error(err);
    status = 500;
  } finally {
    db.end();
    console.log("closed db connection");
    return status;
  }
};

export default addUser;
