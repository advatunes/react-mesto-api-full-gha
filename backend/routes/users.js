const userRouter = require("express").Router();
const { celebrate, Joi } = require("celebrate");

const {
  getUsers,
  getUserInfo,
  getUserById,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

userRouter.get("/", getUsers);
userRouter.get("/me", getUserInfo);

userRouter.get(
  "/:userId",
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().hex().length(24).required(),
    }),
  }),
  getUserById,
);

userRouter.patch(
  "/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(30).required(),
    }),
  }),
  updateProfile,
);

userRouter.patch(
  "/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().pattern(/^https?:\/\/(www\.)?\w+\.\w{2,}\/?.*$/i),
    }),
  }),
  updateAvatar,
);

module.exports = { userRouter };
