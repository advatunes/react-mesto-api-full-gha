const router = require("express").Router();
const auth = require("./middlewares/auth");

const userRouter = require("./userRouter");
const cardRouter = require("./cardRouter");
const loginRouter = require("./loginRouter");
const createUserRouter = require("./createUserRouter");



router.use("/users", auth, userRouter);
router.use("/cards", auth, cardRouter);

router.use("/login", loginRouter);
router.use("/signup", createUserRouter);

module.exports = router;
