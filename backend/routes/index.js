const router = require("express").Router();
const auth = require("./middlewares/auth");
const cors = require("cors");

const userRouter = require("./userRouter");
const cardRouter = require("./cardRouter");
const loginRouter = require("./loginRouter");
const createUserRouter = require("./createUserRouter");

// Применяем cors к каждому маршруту
router.use("/users", cors(), auth, userRouter);
router.use("/cards", cors(), auth, cardRouter);

router.use("/login", cors(), loginRouter);
router.use("/signup", cors(), createUserRouter);

module.exports = router;
