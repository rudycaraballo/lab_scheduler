let returnUser = async (email, mysqlp, fs) => {

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
  