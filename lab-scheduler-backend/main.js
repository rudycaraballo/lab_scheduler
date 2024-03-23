const express = require("express");
const app = express();
const port = 3000;
const frontend = "../lab-scheduler/frontend2";
const homeRouter = require("./routes/home.js");
const bookingRouter = require("./routes/booking.js");
const loginRouter = require("./routes/login.js");


app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.use("/", homeRouter);
app.use("/booking", bookingRouter);
app.use("/login", loginRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
