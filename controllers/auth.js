const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");

// POST Register Route
const register = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email });

    if (foundUser) {
      return res.send({ message: "Account is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    // takes each character and turns it into multiple random characters
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    // create user with req.body and hashed password
    const createdUser = await db.User.create({ ...req.body, password: hash });

    return res
      .status(201)
      .json({ status: 201, message: "success", createdUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// POST Login Route
const login = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Username or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
    // check if the passwords match
    if (isMatch) {
     
      // .sign(payload,secretkey,options)
      const signedJwt = await jwt.sign(
        { _id: foundUser._id },
        "beamazing",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        status: 200,
        message: "Success",
        id: foundUser._id,
        signedJwt,
      });
    } else {
      // the password provided does not match the password on file.
      return res.status(400).json({
        status: 400,
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};
// POST Logout Route
const logout = (req, res) => {
  // logout functionality not needed. We just remove the JWT on the front end.
};

module.exports = {
  register,
  login,
  logout,
};