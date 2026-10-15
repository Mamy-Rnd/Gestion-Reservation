const express = require("express");
const router = express.Router();

const { AddTrajet, AfficherTrajet } = require("../Controller/trajet.controller");

router.get("/trajet", AfficherTrajet);
router.post("/trajet", AddTrajet);

module.exports = router;