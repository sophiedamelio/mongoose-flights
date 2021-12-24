const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Delta", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    default: () => new Date(+new Date() + 365 * 24 * 60 * 60 * 1000),
  },
});

module.exports = mongoose.model("Flight", flightSchema);
