const Flight = require("../models/flight");

module.exports = {
  create,
};

// this will allow user to add a destination for the flight detail they clicked on

function create(req, res) {
  Flight.findById(req.params.id, function (err, flightDocument) {
    flightDocument.destinations.push(req.body);
    flightDocument.save(function (err) {
      res.redirect(`/flights/${flightDocument._id}`);
    });
  });
}
