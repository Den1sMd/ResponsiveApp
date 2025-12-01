"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { Users, Gift, Settings, Info, Clock, Send, LogOut, Twitter } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value }) => (
    <div className="bg-gray-800 w-full h-80 flex flex-col justify-center items-center rounded-2xl border border-gray-700 shadow-2xl p-4">
        <Icon className="w-16 h-16 text-blue-400"/>
        <p className="text-white text-xl font-bold mt-5 text-center">{title}</p>
        <p className="text-white font-extrabold mt-5" style={{ fontSize: '3rem' }}>{value}</p>
    </div>
);


export default function Accueil() {

    const [myclients, setMyclients] = useState(0);
    const [money, setMoney] = useState(0);
    const [parrainage, setParrainage] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);


    useEffect(() => {
       const token = localStorage.getItem("token");
     
       if (!token) {
         window.location.href = "/login";
       }
     }, []);


    const handleSubmit = (e) => {
    e.preventDefault();
    }

    const logout = () => {
        window.localStorage.clear();
        window.location.href = "/login";
    }


      useEffect(() => {
    const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch("http://localhost:5000/getparain", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (res.ok) {
      setMyclients(data.invited_count);
      setParrainage(data.referral_code);
      setMoney(data.money_count);
    } else {
      console.error(data.error);
    }
  };

  fetchProfile();
}, []);

    

  useEffect(() => {
    const targetDate = new Date("2025-12-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);







    return (
        <div className="bg-white w-full min-h-screen flex justify-start items-center flex-col pt-10 pb-16 font-sans">
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">

               
                <StatCard 
                    icon={Users}
                    title="Personnes invités :"
                    value={myclients}
                />

               
                <StatCard 
                    icon={Gift}
                    title="Money :"
                    value={money}
                />

         
                <div className="bg-gray-800 w-full h-80 flex flex-col justify-start items-center rounded-2xl border border-gray-700 shadow-2xl p-6">
                    <Settings className="w-16 h-16 text-blue-400 mt-4"/>
                    <p className="text-white text-xl font-bold mt-5">Mes informations :</p>
                    <p className="text-white text-md font-bold mt-5">Mon code de parrainage :</p>
                    <div className="mt-3 bg-stone-900 rounded-lg w-40 flex justify-center h-8 items-center px-4">
                        <p className="text-white font-bold tracking-wider">{parrainage}</p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-6">
                <div className="col-span-1 md:col-span-3 bg-gray-800 w-full flex flex-col md:flex-row justify-around items-stretch rounded-2xl border border-gray-700 shadow-2xl p-6 gap-6">
                    
                    
                    <div className="flex flex-col items-center p-3 flex-1 min-w-0">
                        <Info className="w-12 h-12 text-blue-400"/>
                        <p className="text-white text-xl font-bold mt-3 text-center">Informations</p>
                        <p className="text-white text-sm mt-3 text-center opacity-80 max-w-xs">
                            - Chaque membre invité doit me follow sur x pour que son inscription soit comptée.
                        </p>
                    </div>

                    
                    <div className="flex flex-col items-center p-3 flex-1 min-w-0 border-y md:border-y-0 md:border-x border-gray-700">
                        <Clock className="w-12 h-12 text-blue-400"/>
                        <p className="text-white text-xl font-bold mt-3">Timer</p>
                        <p className="text-white text-2xl font-bold mt-5 text-center">
                            {days}j {hours}h {minutes}m {seconds}s
                        </p>
                    </div>

                    
                    <div className="flex flex-col items-center p-3 flex-1 min-w-0">
                        <Send className="w-12 h-12 text-blue-400"/>
                        <p className="text-white text-xl font-bold mt-3">Contact</p>

                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="mt-6">
                            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 cursor-pointer w-40 h-12 flex items-center justify-center gap-2 hover:scale-105">
                                <Twitter className="w-5 h-5" />
                                <p className="text-lg">X</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            
            <div>
        <button 
        onClick={logout}
        className="bg-gradient-to-r from-red-400 to-red-900 mt-10 rounded-2xl w-60 h-10 cursor-pointer hover:from-red-500 hover:to-red-950 transform hover:scale-105 transition-all duration-300">
            <p className="font-bold text-white text-xl">Déconnexion</p>
        </button>
      </div>
        </div>
    )
}