// const mysql = require('mysql2');
// const fs = require('fs');

import mysql from 'mysql2';
import fs from 'fs';


let db = mysql.createConnection({
    host:"unigathermysql.mysql.database.azure.com", 
    user:"bigdorya", password:"owgather123!",
    database:"unigather",
    port:3306, 
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    });

// Connect to MySQL server
// connection.connect(err => {
//     if (err) {
//       return console.error('error connecting: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
//   });
  
//   // Perform a query
//   const query = `SHOW TABLES`;
//   connection.query(query, (err, results, fields) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(results);  
//     }
//   });
  
//   // Close the connection
//   connection.end();

export default db


