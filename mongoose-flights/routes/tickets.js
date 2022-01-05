const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");
// const flightCtrl = require("../controllers/flights");

// router.post("/tickets", ticketsCtrl.create);

// is this route correct?
// router.get("/:id/tickets/new", ticketsCtrl.new);
// flights is here because
router.post("/flights/:id/tickets", ticketsCtrl.create);

// router.post("/:id/tickets", ticketsCtrl.addToTickets);

module.exports = router;
