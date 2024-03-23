let express = require("express");
let loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.render("login");
});

module.exports = loginRouter;
