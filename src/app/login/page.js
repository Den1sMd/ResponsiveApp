"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { Users, Gift, Settings, Info, Clock, Send, LogOut, Twitter } from 'lucide-react';


export default function Conn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   useEffect(() => {
   const token = localStorage.getItem("token");
 
   if (token) {
     window.location.href = "/accueil";
   }
 }, []);


  const handleSubmit = (e) => {
    e.preventDefault(); 

    const handleLogin = async () => {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json();
      console.log(data);

      if (res.ok) {

        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);

          window.location.href = "/accueil";
        }
      }
      else {
        setError(data.error);
      }
    }

    handleLogin();
    
  };







  return (
    <>
    <div className="bg-white w-full min-h-screen flex justify-center items-center flex-col overflow-hidden">
      <div className="border-1  w-[350] flex rounded-2xl flex-col border shadow-2xl mt-15">
        <div className=" bg-blue-500 h-20 w-full flex justify-center rounded-t-2xl">
          <div className="flex justify-center items-center">
            <p className="text-white text-2xl font-bold">Connexion</p>
          </div>
        </div>

        <form
        onSubmit={handleSubmit}
        >

        <div className="flex flex-col items-center mt-4">
          <div className="gap-3 flex flex-col items-center">
          <label className="text-gray-700 font-bold">Nom d'utilisateur</label>
          
          <input 
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text" 
          placeholder="Julien" 
          className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 outline-none text-gray-800 placeholder-gray-400">
          </input>

          <label className="text-gray-700  font-bold">Mot de passe</label>
          
          <input 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="Julien01" 
          className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 outline-none text-gray-800 placeholder-gray-400">
          </input>

          </div>

          <div className="bg-red-500 mt-4 w-50 flex items-center justify-center rounded-md">
            <p className="text-white font-bold">{error}</p>
          </div>

          <div className="mt-6">
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 cursor-pointer mb-3">
            Connexion
          </button>
          </div>


          
        </div>

        </form>



      </div>

      <div className="mt-10 flex justify-center">
      <a href="https://x.com/">
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 cursor-pointer w-60">
        <div className="flex flex-row items-center justify-center gap-3">
          <Twitter className="w-5 h-5" />
          <p className="text-lg">X</p>
        </div>
      </button>
      </a>
      </div>

      <div className="mt-5 flex justify-center">
      <a href="/">
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 cursor-pointer w-60">
        <div className="flex flex-row items-center justify-center gap-3">
          <img className="w-6" src="account.svg" alt="Account" />
          <p className="text-lg">Pas de compte ?</p>
        </div>
      </button>
      </a>
      </div>

      
    </div>    
    </>
  );
}
