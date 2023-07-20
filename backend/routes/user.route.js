const express = require("express");
const { UserModel } = require("../model/user.model");
const { BlacklistModel } = require("../model/blacklist.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

const passwordReq =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

userRouter.post("/register", async (req, res) => {
  const { name, email, phone, gender, password } = req.body;

  // Check for empty fields
  if (!name || !email || !phone || !gender || !password) {
    return res.status(200).json({ msg: 'Please fill all the required Credentials.' });
  }

  // Validate the password format
  if (!passwordReq.test(password)) {
     return res.status(200).json({
      msg: "Invalid Password Format!!. Password format Should contain atleast one uppercase character, one number, special character and length greater then 8.",
    });
  }

  try {
    const existingUserEmail = await UserModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ msg: "User Already Exists!" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(500).json({ error: err.messag });
      } else {
        const user = new UserModel({
          name,
          email,
          phone,
          gender,
          password: hash,
        });
        await user.save();
      }
    });
    res
      .status(200)
      .json({ msg: "Registration Successful", registeredUser: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
// Check for empty fields
if ( !email || !password) {
  return res.status(200).json({ msg: 'Please fill all the required Credentials.' });
}
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ _id: user._id }, "sy", {
            expiresIn: 120,
          });
          var refreshToken = jwt.sign({ _id: user._id }, process.env.SECRET, {
            expiresIn: "7d",
          });
          res.status(200).json({
            msg: "Login Successful",
            token: token,
            refreshToken: refreshToken,
          });
        }else{
          res.status(200).json({ msg: "Password or Email Not Match!" });
        }
      });
    } else {
      res.status(200).json({ msg: "User Not Found!" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.messag });
  }
});

userRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;
    if (token) {
      await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).json({ msg: "Logout Successful!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.messag });
  }
});

userRouter.get("/refreshtoken", (req, res) => {
  const refreshToken = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(refreshToken, process.env.SECRET);
  if (decoded) {
    let newToken = jwt.sign({ _id: decoded._id }, "sy", {
      expiresIn: 120,
    });
    res.status(200).json({ msg: "newToken", newToken });
  } else {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  userRouter
};
