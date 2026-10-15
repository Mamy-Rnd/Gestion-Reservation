const express = require("express");
const router = express.Router();

const { AfficherPlaces, AddPlaces } = require("../Controller/place.controller");

router.get("/places", AfficherPlaces);
router.post("/places", AddPlaces);

module.exports = router;