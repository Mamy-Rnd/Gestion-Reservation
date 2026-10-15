const PlaceService = require("../Services/places.service");

const AddPlaces = async (req, res, next) => {

    const { numero_place, vehicule_id } = req.body;

    try {
        const resultat = await PlaceService.AddPlace(numero_place, vehicule_id);

        return res.status(201).json({
            success: resultat.success,
            message: resultat.message
        })
    } catch (error) {
        next(error)
    }
}

const AfficherPlaces = async (req, res, next) => {

    try {
        const result = await PlaceService.AfficherPlace()

        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { AddPlaces, AfficherPlaces };