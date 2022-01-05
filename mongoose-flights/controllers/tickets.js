const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  create,
  addToTickets,
  new: newTicket,
};

// this function adds to the array tickets
function addToTickets(req, res) {
  console.log(req.body, `<-- req body`);
  console.log(req.params, `<--req.params`);
  res.send("add to tickets envoked");

  //     this finds the flight based on the id, of details the page we are on
  //     sends back the flightDocument
  //   WHERE AM I TRYING TO PUSH TO??
}

// this function m
function create(req, res) {
  Flight.findById(req.params.id, function (err, flightDoc) {
    // create ticket with req.body (form contents)
    // flight param on body of form, to the flight id
    console.log(flightDoc, "helooooooo");
    req.body.flight = flightDoc._id;
    Ticket.create(req.body, function (err, ticket) {
      //   ticket.flight = req.params.id;
      //   res.send(flight);
      res.redirect(`/flights/${flightDoc._id}`);
    });
  });
}

function newTicket(req, res) {
  res.send("new ticket function envoked");
  //   Ticket.find({}, function (err, tickets) {
  //     res.render("tickets/new", {
  //       title: "Add Ticket",
  //       tickets,
  //     });
  //   });
}
