const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
  },
});

const flightSchema = new Schema(
  {
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
      default: function () {
        // this needs to be in datetime local format (currently not valid)
        // or return new Date(Date.now() + 365*24*60*60*1000).toDateString()
        // console.log(flightSchema)
        // return new Date()
        let newDate = new Date();
        let nextYear = newDate.setFullYear(newDate.getFullYear() + 1);
        return nextYear;
      },
    },
    destinations: [destinationSchema],
  },

  {
    timestamps: true,
  }
);

// this compiles this schema into a model
module.exports = mongoose.model("Flight", flightSchema);
