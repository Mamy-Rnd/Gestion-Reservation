const AppService = require("../Services/trajet.service");

const { validationResult } = require("express-validator");

const AddTrajet = async (req, res, next) => {

    const { ville_départ, ville_arrivé, distance_km } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    try {
        const resultat = await AppService.AddTrajet(ville_départ, ville_arrivé, distance_km);

        return res.status(201).json({
            success: resultat.success,
            message: resultat.message
        })
    } catch (error) {
        next(error)
    }
}

const AfficherTrajet = async (req, res, next) => {

    try {
        const resultat = await AppService.AfficherTrajet();

        return res.status(200).json({
            resultat: resultat
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { AddTrajet, AfficherTrajet };