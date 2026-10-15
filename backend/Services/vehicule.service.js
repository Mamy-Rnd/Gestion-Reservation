const db = require("../Config/db");

const AddVehicule = async (marque, status) => {

    const [vehicule] = await db.query("INSERT INTO Vehicule (marque, status) VALUES(?,?)", [marque, status]);

    return {
        success: true,
        message: "Vous avez ajouté un vehicule"
    }
}

const AfficherVehicule = async () => {
    const [voiture] = await db.query("SELECT*FROM Vehicule");

    return voiture;
}

module.exports = { AddVehicule, AfficherVehicule }