/** @format */

import React, { useState } from "react";

const Trajet = () => {
  const [ville_depart, setVille_depart] = useState("");
  const [ville_arrive, setVille_arrive] = useState("");
  const [distance, setDistance] = useState(0);
  const [message, setMessage] = useState("");

  const AddTrajet = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/trajet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ville_départ: ville_depart,
          ville_arrivé: ville_arrive,
          distance_km: distance,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.errors[0].msg);
        return;
      }
      setMessage(data.message);
      setVille_arrive("");
      setVille_depart("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='lg:shadow p-3 mx-auto my-10 lg:bg-gray-50 w-full lg:w-1/2'>
      <h3 className='text-blue-500 text-2xl text-center'>Ajouter un trajet</h3>
      <form className='flex flex-col gap-2' onSubmit={AddTrajet}>
        <label>Ville de départ</label>
        <input
          type='text'
          className='border border-gray-200 p-2 rounded'
          placeholder='Entrez un ville de départ'
          value={ville_depart}
          onChange={(e) => setVille_depart(e.target.value)}
        />
        <label>Ville arrivée</label>
        <input
          type='text'
          className='border border-gray-200 p-2 rounded'
          placeholder='Entrez un ville arrivé'
          value={ville_arrive}
          onChange={(e) => setVille_arrive(e.target.value)}
        />
        <label>Distance en km</label>
        <input
          type='number'
          className='border border-gray-200 p-2 rounded'
          placeholder='Entrez un distance en km'
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button className='bg-blue-500 p-2 rounded text-white'>Ajouter</button>
        {message && <p className='text-center text-gray-600'>{message}</p>}
      </form>
    </div>
  );
};

export default Trajet;
