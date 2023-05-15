const jwt = require("jsonwebtoken");
const config = require("../config");
const { STATUS_INVALID_CREDENTIALS } = require("../utils/errors");
const {  JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { cookies } = req;

  if (!cookies || !cookies.jwt) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }

  const token = cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }

  req.user = payload;

  next();
};

