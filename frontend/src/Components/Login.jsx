/** @format */

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const AddUsers = async (e) => {
    e.preventDefault();

    //   console.log("Bouton cliqué");

    try {
      //console.log("Envoi de requêtes");

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        //console.log(data);
        setMessage(data.message);
        return;
      }

      console.log(data);

      const token = await data.token;

      localStorage.setItem("token", token);

      setMessage(data.message);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='shadow shadow-gray-500 bg-gray-100 px-10 py-5 w-1/2 mx-auto my-20 rounded-lg'>
      <h3 className='text-blue-500 text-2xl font-semibold text-center py-5'>
        Connexion
      </h3>
      <form className='flex flex-col gap-3 m-auto' onSubmit={AddUsers}>
        <input
          type='email'
          placeholder='Entrez votre addresse email...'
          className='border border-gray-300 p-2 rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Entrez votre mot de passe...'
          className='border border-gray-300 p-2 rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-blue-500 p-2 rounded text-white'>
          Connexion
        </button>
        <p className='text-blue-500 text-center'>S'inscrire</p>
        {message && <p className='text-center text-gray-800'>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
