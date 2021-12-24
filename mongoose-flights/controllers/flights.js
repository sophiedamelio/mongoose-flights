const Flight = require("../models/flight");

module.exports = {
  index,
};

function index(req, res) {
  Flight.find({}, function (err, flightDocuments) {
    res.render("/flights", {
      flights: flightDocuments,
    });
  });
}
