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

  const newFlight = new Flight();
  // // Obtain the default date
  const dt = newFlight.departs;
  console.log(dt)
  // // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {departsDate});
};

function create(req, res) {
  Flight.create(req.body, function(err, flightDocument) {
    res.redirect("/flights");
  });
}