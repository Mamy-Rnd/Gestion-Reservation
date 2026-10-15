/** @format */

import React, { useState, useEffect } from "react";

const ListeVehicule = () => {
  const [vehicules, setVehicules] = useState([]);

  const AfficherVehicule = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/vehicule");
      const data = await response.json();

      console.log(data);
      setVehicules(data.resultat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AfficherVehicule();
  }, []);

  return (
    <div>
      <h3 className='text-blue-500 text-center text-2xl my-5'>
        Listes des vehicules
      </h3>
      {vehicules.map((v) => (
        <div
          key={v.id}
          className='flex shadow p-4 justify-between gap-5 m-5 bg-gray-50'
        >
          <ul>
            <li>{v.marque}</li>
            <li>{v.status}</li>
          </ul>
          <div className='flex gap-3'>
            <button className='bg-green-500 p-2 rounded text-white'>
              Modifier
            </button>
            <button className='bg-red-500 p-2 rounded text-white'>
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeVehicule;
