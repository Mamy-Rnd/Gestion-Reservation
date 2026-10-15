const express = require("express");
const router = express.Router();
const validation = require("../validators/trajet.validation");

const { AddTrajet, AfficherTrajet } = require("../Controller/trajet.controller");

router.get("/trajet", AfficherTrajet);
router.post("/trajet", validation, AddTrajet);

module.exports = router;