const db = require("../Config/db");

const AddVoyages = async (date_depart, prix, vehicule_id, trajet_id) => {

    const [VoyagesAdd] = await db.query(
        "INSERT INTO voyages(date_depart, prix, vehicule_id, trajet_id) VALUES(?,?,?,?)",
        [date_depart, prix, vehicule_id, trajet_id]
    );

    return {
        success: true,
        message: "Vous avez ajouté un nouveau voyage"
    }
}

const AfficherVoyages = async () => {

    const [voyages] = await db.query(
        "SELECT v.date_depart, x.marque,v.trajet_id FROM voyages v INNER JOIN Vehicule x ON x.id=v.vehicule_id"
    );

    return voyages;
}

module.exports = { AddVoyages, AfficherVoyages };