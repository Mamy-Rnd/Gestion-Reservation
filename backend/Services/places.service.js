const db = require("../Config/db");

const AddPlace = async (numero_place, vehicule_id) => {

    const [places] = await db.query(
        "INSERT INTO place(numero_place, vehicule_id) VALUES (?,?)",
        [numero_place, vehicule_id]
    );

    return {
        success: true,
        message: "Vous avez ajouté une place"
    }
}

const AfficherPlace = async () => {

    const [tousPlaces] = await db.query(
        "SELECT p.numero_place, v.marque FROM place p INNER JOIN Vehicule v ON v.id=p.vehicule_id"
    );

    return tousPlaces;
}

module.exports = { AfficherPlace, AddPlace }