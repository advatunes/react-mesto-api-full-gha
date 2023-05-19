const express = require("express");
const mongoose = require("mongoose");
const { errors } = require("celebrate");
const config = require("./config");
const { STATUS_NOT_FOUND } = require("./utils/errors");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://advatunes.mesto.nomoredomains.monster');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors({
  origin: ['https://advatunes.mesto.nomoredomains.monster', 'http://localhost:3000'],
  credentials: true
}));
app.options("*", cors());


app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Сервер сейчас упадёт");
  }, 0);
});

app.use("/", routes);

app.use((req, res, next) => {
  next(new STATUS_NOT_FOUND("Запрашиваемый ресурс не найден"));
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  if (err && err.code === 11000) {
    res.status(409).send({ message: "Такой пользователь уже существует" });
    return;
  }
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
  next(err);
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});
