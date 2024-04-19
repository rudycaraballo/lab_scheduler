import express from "express";

let signUpRouter = express.Router();

signUpRouter.get("/signup", (req, res) => {
  res.render("login");
});

export default signUpRouter;
