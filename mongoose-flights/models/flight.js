const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Delta", "Southwest", "United"],
    required: true,
  },
  airport: {
    type: String,
    enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
    required: true,
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    default: Date.now,
  }
  }, {
    timestamps: true,
});

module.exports = mongoose.model("Flight", flightSchema);
