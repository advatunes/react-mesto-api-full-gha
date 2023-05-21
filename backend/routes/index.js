const router = require("express").Router();


const userRouter = require("./users");
const cardRouter = require("./cards");
const loginRouter = require("./login");
const createUserRouter = require("./createUser");

router.use("/users", userRouter);
router.use("/cards", cardRouter);

router.use(loginRouter);
router.use(createUserRouter);

module.exports = router;