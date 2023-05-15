const jwt = require("jsonwebtoken");
const { STATUS_INVALID_CREDENTIALS } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }
};
