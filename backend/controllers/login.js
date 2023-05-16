const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const {  JWT_SECRET } = process.env;

const { STATUS_INVALID_CREDENTIALS } = require("../utils/errors");

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
         "dev-secret",
        {
          expiresIn: "7d",
        }
      );
      res.send({ token });
    })
    .catch(next);
};
