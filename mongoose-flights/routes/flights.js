var express = require("express");
var router = express.Router();

const flightCtrl = require("../controllers/flights");

router.get("/", flightCtrl.index);

module.exports = router;
