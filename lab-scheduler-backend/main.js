// const express = require("express");
import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
// import mysql from 'mysql2';
import * as mysqlp from 'mysql2/promise';
import fs from 'fs';
// import signUpRouter from "./routes/routes.js"
import addUser  from "./database/addUser.js";
import getRooms from "./database/getRooms.js";
// const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const port = 3000;
// const {homeRouter} = require('./routes/home.js');

// const {addUser} = require("./database/addUser.js");

// Middleware
app.use(bodyParser.json());
app.use(cors());
//TODO: use express routing instead of this ghetto shit
//TODO: sign up endpoint, check if user exists, if not add to db and return 200 status

// app.use(signUpRouter);

app.post('/signup', async (req, res) => {
  let userObj = req.body;

  let db = mysql.createConnection({
    host:"unigathermysql.mysql.database.azure.com", 
    user:"bigdorya", password:"owgather123!",
    database:"unigather",
    port:3306, 
    ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    });

  let addUserStatus = await addUser(db, userObj);

  res.status(addUserStatus)  
  res.send("recieved sign up credentials")
})

app.get('/available-rooms', async (req, res) => {
  //TODO: handle error resposne
  let results = await getRooms();
  res.send(results)

})


app.get('/', async (req, res) => {
  try {
    await addUser();
    res.status(200);
  }catch (err) {
    res.status(err);
  }
  res.send('Hello World!')
})

app.post("/login", (req, res) => {
  console.log(req.body)
  res.send("welcome")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})