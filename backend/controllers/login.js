const jwt = require("jsonwebtoken");
const User = require("../models/user");
require('dotenv').config();
const { NODE_ENV, JWT_SECRET } = process.env;


const { STATUS_INVALID_CREDENTIALS } = require("../utils/errors");

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch(next);
};

