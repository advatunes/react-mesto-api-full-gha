const jwt = require("jsonwebtoken");
const config = require("../config");
const { STATUS_INVALID_CREDENTIALS } = require("../utils/errors");
const {  JWT_SECRET } = process.env;


module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET );
  } catch (err) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  } next();
};