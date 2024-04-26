import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import mysql from 'mysql2';
import fs from 'fs';
import * as mysqlp from 'mysql2/promise';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

//database functions
import addUser  from "./database/addUser.js";
import getRooms from "./database/getRooms.js";
import findUser from "./database/findUser.js";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
//TODO: use express routing instead of this ghetto shit
//TODO: sign up endpoint, check if user exists, if not add to db and return 200 status

// app.use(signUpRouter);

app.post('/signup', async (req, res) => {
  let userObj = req.body;

  try {
    let doesUserExist = await findUser(userObj.email);
    console.log("does user exist? " + doesUserExist);

    if(doesUserExist) {
      res.status(409).send("user already exists")
      return;
    }

    await addUser(userObj, mysql, fs);
    res.status(201).send('User registered');
  } catch (err) {
    console.log(err);
      res.status(500).send();
  }
})

app.get('/available-rooms', async (req, res) => {
  try {
    let results = await getRooms(mysqlp, fs);
    res.send(results)
  } catch(err) {
    console.log(err);
  }

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

// app.post("/login", (req, res) => {
//   console.log(req.body)
//   res.send("welcome")
// });

app.post('/login', async (req, res) => {
  let doesUserExist = await findUser(req.body.email);
  res.send(doesUserExist ? "user found" : "user not found")

  // const user = users.find(user => user.username === req.body.username);
  // if (user == null) {
  //     return res.status(400).send('Cannot find user');
  // }
  // try {
  //     if (await bcrypt.compare(req.body.password, user.password)) {
  //         const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET);
  //         res.json({ accessToken });
  //     } else {
  //         res.send('Not Allowed');
  //     }
  // } catch {
  //     res.status(500).send();
  // }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})