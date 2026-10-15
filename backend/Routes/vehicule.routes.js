const express = require("express");
const router = express.Router();

const { AddVehicule, AfficherVehicule } = require("../Controller/vehicule.controller");

router.get("/vehicule", AfficherVehicule);
router.post("/vehicule", AddVehicule);

module.exports = router;