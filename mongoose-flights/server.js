var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var moment = require("moment");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var flightsRouter = require("./routes/flights");

var app = express();

// executes the database.js file, creates connection with mongodb
require("./config/database");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  // should this line replace the input value? Is this the function part I am missing?
  // console.log("Date:", moment().format(`MM/DD/YYYY, hh:mm a`));
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/flights", flightsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
