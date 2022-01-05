const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");
// const flightCtrl = require("../controllers/flights");

// router.post("/tickets", ticketsCtrl.create);

router.post(":id/new", ticketsCtrl.create);

module.exports = router;
