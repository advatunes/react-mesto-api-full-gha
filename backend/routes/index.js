const router = require("express").Router();
const auth = require("./middlewares/auth");

const {userRouter} = require("./users");
const {cardRouter} = require("./cards");
const {loginRouter} = require("./login");
const {createUserRouter} = require("./createUser");

router.use("/users", auth, userRouter);
router.use("/cards", auth, cardRouter);

router.use(loginRouter);
router.use(createUserRouter);

module.exports = router;
