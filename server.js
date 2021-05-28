const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
const app = express();

const appError = require("./Utils/appError");
const globalErrorHandler = require("./Controllers/errorController");
///App Use
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/public", express.static("public"));
///Routes
const MovieRouter = require("./routes/MovieRoutes");
const UserRoutes = require("./routes/UserRoutes");
console.log("hello");
///Database
const Database_local = process.env.DATABASE_LOCAL;
const port = process.env.PORT | 5000;

mongoose
  .connect(Database_local, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

app.use("/api/movie", MovieRouter);
app.use("/api/users", UserRoutes);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
  });
});
