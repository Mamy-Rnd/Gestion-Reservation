const { body } = require("express-validator");

const validationTrajet = [
    body("ville_départ").notEmpty().withMessage("Le ville départ doit saisir"),
    body("ville_arrivé").notEmpty().withMessage("Le ville arrivé doit saisir"),
    body("distance_km").notEmpty().withMessage("Le distance doit saisir"),

];

module.exports = validationTrajet;
