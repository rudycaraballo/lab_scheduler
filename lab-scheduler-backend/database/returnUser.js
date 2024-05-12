

let returnUser = async (email, mysqlp, fs) => {

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
            'SELECT * FROM users WHERE PrimaryEmail = ?',
            [email]
        );
        return results;
      } catch (err) {
        console.error("Error during the query.", err);
      } finally {
        pool.end();
      }
  };
  
  export default returnUser;
  