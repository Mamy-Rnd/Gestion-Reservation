/** @format */

import React, { useState } from "react";

const Vehicule = () => {
  const [marque, setMarque] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const AddVehicule = async (e) => {
    e.preventDefault();

    if (marque === "" || status === "") {
      setMessage("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/vehicule", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ marque, status }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setMessage(data.message);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='shadow p-3 w-1/2 mx-auto my-10 bg-gray-50'>
      <h3 className='text-blue-500 text-2xl text-center my-3'>
        Ajouter un vehicule
      </h3>
      <form className='flex flex-col gap-3' onSubmit={AddVehicule}>
        <label className='text-gray-600'>Marque de vehicule</label>
        <input
          type='text'
          placeholder='Entrez un marque vehicule...'
          className='border border-gray-200 p-2 rounded'
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
        />
        <label className='text-gray-600'>Choisissez un status</label>
        <select
          className='border border-gray-200 p-2 rounded'
          placeholder='Choisissez un status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='' disabled>
            --Veuillez choisir un status--
          </option>
          <option value='Disponible'>Disponible</option>
          <option value='Indisponible'>Indisponible</option>
        </select>
        <button className='bg-blue-500 p-2 rounded text-white'>Ajouter</button>
        {message && <p className='text-center text-gray-700'>{message}</p>}
      </form>
    </div>
  );
};

export default Vehicule;
