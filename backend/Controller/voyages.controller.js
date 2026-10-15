const VoyageService = require("../Services/voyages.service");

const AddVoyages = async (req, res, next) => {

    const { date_depart, prix, vehicule_id, trajet_id } = req.body;

    try {
        const resultat = await VoyageService.AddVoyages(date_depart, prix, vehicule_id, trajet_id);

        return res.status(201).json({
            success: resultat.success,
            message: resultat.message
        })
    } catch (error) {
        next(error);
    }
}

const AfficherVoyages = async (req, res, next) => {

    try {
        const result = await VoyageService.AfficherVoyages();

        return res.status(200).json({
            success: result.success,
            message: resultat.message
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { AfficherVoyages, AddVoyages };