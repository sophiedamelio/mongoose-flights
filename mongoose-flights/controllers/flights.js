const Flight = require("../models/flight");

module.exports = {
  index,
  create,
  new: newFlight,
};

function index(req, res) {
  Flight.find({}, function (err, flightDocuments) {
    res.render("flights/index", {
      flights: flightDocuments,
    });
  });
}

function newFlight(req, res) {
  // this should only fire when the new flight button is pressed
  // if (!req.body.flightNo) {
  //   return res.status(400).send("Flight Number is required.");
  //   // add <a> here to link to 'new.ejs' , New Flight
  // } else {

  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  console.log(dt);

  // this gets the timezone offset of dt (our default date)
  let offset = dt.getTimezoneOffset() * 60000;
  // declares a local date, taking the default (dt) date, subtracting the offset
  // and converts to ISO String
  // in our flights/new.ejs, we set the value="localDate", and use slice(0,16)
  // to get the proper format to render in our type="datetime-local" input
  let localDate = new Date(dt - offset).toISOString();

  // this renders the localDate
  res.render("flights/new", { localDate });
}

function create(req, res) {
  Flight.create(req.body, function (err, flightDocument) {
    res.redirect("/flights");
  });
}
