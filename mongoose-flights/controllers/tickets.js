const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  create,
  addToTickets,
};

function addToTickets(req, res) {
  console.log(req.body, `<-- req body`);
  console.log(req.params, `<--req.params`);
  res.send("add to tickets envoked");
}

function create(req, res) {
  Flight.findById(req.params.id, function (err, flightDoc) {
    console.log(flightDoc);

    Ticket.create(req.body, function (err, ticket) {
      ticket.flight = req.params.id;
      res.send(flight);
      res.redirect("flights/new");
    });
  });
}

// function newTicket(req, res) {
//   res.send("new ticket function envoked");
//   Ticket.find({}, function (err, tickets) {
//     res.render("tickets/new", {
//       title: "Add Ticket",
//       tickets,
//     });
//   });
//
