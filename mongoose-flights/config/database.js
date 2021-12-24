const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/flights", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});
