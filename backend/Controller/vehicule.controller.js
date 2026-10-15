const AppService = require("../Services/vehicule.service");

const AddVehicule = async (req, res, next) => {
    const { marque, status } = req.body;

    try {
        const resultat = await AppService.AddVehicule(marque, status);

        return res.status(201).json({
            success: resultat.success,
            message: resultat.message
        })
    } catch (error) {
        next(error);
    }
}

const AfficherVehicule = async (req, res, next) => {

    try {
        const resultat = await AppService.AfficherVehicule();

        return res.status(200).json({
            resultat: resultat,
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { AddVehicule, AfficherVehicule }