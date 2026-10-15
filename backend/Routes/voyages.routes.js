const express = require("express");
const router = express.Router();

const { AfficherVoyages, AddVoyages } = require("../Controller/voyages.controller");

router.get("/voyages", AfficherVoyages);
router.post("/voyages", AddVoyages);

module.exports = router;