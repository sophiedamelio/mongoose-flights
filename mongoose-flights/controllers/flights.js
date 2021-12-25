const Flight = require("../models/flight");

module.exports = {
  index,
  create,
  new: newFlight
};

function index(req, res) {
  Flight.find({}, function (err, flightDocuments) {
    res.render("flights/index", {
      flights: flightDocuments,
    });
  });
}

function newFlight(req, res) {
  res.render("flights/new")
}

function create(req, res) {
  Flight.create(req.body, function(err, flightDocument) {
    res.redirect("/flights");
  });
}