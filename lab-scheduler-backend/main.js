import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import mysql from 'mysql2';
import fs from 'fs';
import * as mysqlp from 'mysql2/promise';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv';

//Database functions
import addUser  from "./database/addUser.js";
import getRooms from "./database/getRooms.js";
import findUser from "./database/findUser.js";
import returnUser from "./database/returnUser.js";
import getFilteredRooms from "./database/getFilteredRooms.js";
import getRoomInfo from "./database/getRoomInfo.js";
import bookARoom from "./database/bookARoom.js";
import getUserAccount from "./database/getUserAccount.js";

dotenv.config()
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
//TODO: sign up endpoint, check if user exists, if not add to db and return 200 status

// app.use(signUpRouter);
app.post('/signup', async (req, res) => {
  let userObj = req.body;

  try {
    let doesUserExist = await findUser(userObj.email);

    if(doesUserExist) {
      return res.status(409).send("user already exists")
    }

    await addUser(userObj, mysql, fs);
    res.status(201).send('User registered');
  } catch (err) {
    console.log(err);
      res.status(500).send();
  }
})





app.post('/create-booking', async (req, res) => {
  let bookingForm = req.body

  try {
    let booked = await bookARoom(mysqlp, fs, bookingForm);
    res.status(201).send('Booking Order Created')

  } catch (error) {
    console.log(error);
    res.status(500).send();
  }

})


app.get('/account-info', async (req, res) => {
  let userId = req.query.userId;
  try {

    let results = await getUserAccount(mysqlp, fs, userId);
    res.status(201).send(results)
    
  } catch (error) {
    res.status(500).send(error)
    console.log(error);
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




app.get('/room-information', async (req, res) => {
  let roomNumber = req.query.roomNumber;

  try {
    let results = await getRoomInfo(mysqlp, fs, roomNumber);
    res.send(results)
  } catch(err) {
    console.log(err);
  }
})





app.get('/filtered-bookings', async (req, res) => {
  const bookingStart = req.query.bookingStart;
  const bookingEnd = req.query.bookingEnd; 
  const dayBooked = req.query.dayBooked;

  console.log(dayBooked);
  try {
    let results = await getFilteredRooms(mysqlp, fs, bookingStart, bookingEnd, dayBooked);
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


app.post('/login', async (req, res) => {
  let email = req.body.email;
  let userPword = req.body.pword;

  try {
    let doesUserExist = await findUser(email);
  
    if (!doesUserExist) {
        return res.status(400).send('Cannot find user');
    }

    let userObj = await returnUser(email, mysqlp, fs);
    let dbPword = userObj[0].Password;
    let fName = userObj[0].FirstName
    let userId = userObj[0].UserID;

   
    if (await bcrypt.compare(userPword, dbPword)) {

        let role = userObj[0].PrimaryEmail === process.env.ADMIN_EMAIL ? 'admin' : 'user';
        const accessToken = jwt.sign({ username: email, role: role, fName: fName, userId:userId}, process.env.JWT_SECRET);
        return res.json({ accessToken });

    } else {
        return res.send('Not Allowed');
    }

  } catch(err) {
    console.error(err);
    return res.status(500).send();
  }
  // try {
  //   //TODO: return user object to compare passwords
  // } catch {
  //     res.status(500).send();
  // }
});

app.get("/test", async (req, res) => {
  console.log(process.env.JWT_SECRET);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})