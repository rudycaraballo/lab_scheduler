const mysql = require('mysql2');
const fs = require('fs');

let connection = mysql.createConnection({
    host:"unigathermysql.mysql.database.azure.com", 
    user:"bigdorya", password:"owgather123!",
    database:"unigather",
    port:3306, 
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    });

// Connect to MySQL server
connection.connect(err => {
    if (err) {
      return console.error('error connecting: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });
  
  // Perform a query
  const query = `SHOW TABLES`;
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);  // Output the results of the query
    }
  });
  
  // Close the connection
  connection.end();