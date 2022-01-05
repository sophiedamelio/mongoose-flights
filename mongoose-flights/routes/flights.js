var express = require("express");
var router = express.Router();

const flightCtrl = require("../controllers/flights");
const ticketsCtrl = require("../controllers/tickets");

router.get("/", flightCtrl.index);
router.get("/new", flightCtrl.new);

router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.show);

router.get("/tickets/:id/new", flightCtrl.newTicket);
// router.post("/:id/tickets/new", ticketsCtrl.addToTickets);

module.exports = router;
