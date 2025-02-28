const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({ msg: "can't hash", error: error.message });
      } else {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send({ msg: "registered successfully" });
      }
    });
  } catch (error) {
    res.send({ msg: "can't register", error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "coding");
          if (token) {
            res.send({ msg: "Login success", token: token });
          } else {
            res.send({ msg: "token not generated" });
          }
        } else {
          res.send({ msg: "wrong password" });
        }
      });
    }
  } catch (error) {
    res.send({ msg: "wrong password", error: error.message });
  }
});

module.exports = { userRouter };
