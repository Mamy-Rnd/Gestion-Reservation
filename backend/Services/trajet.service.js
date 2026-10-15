const db = require("../Config/db");

const AddTrajet = async (ville_depart, ville_arrivé, distance_km) => {

    const [trajet] = await db.query(
        "INSERT INTO trajet(ville_départ, ville_arrivé, distance_km) VALUES(?,?,?)",
        [ville_depart, ville_arrivé, distance_km]
    );

    return {
        success: true,
        message: "Vous avez ajouté nouveau trajet"
    }
}

const AfficherTrajet = async () => {

    const [MonTrajet] = await db.query("SELECT*FROM trajet");

    return MonTrajet;
}

module.exports = { AfficherTrajet, AddTrajet };