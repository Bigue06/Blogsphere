import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Bienvenue sur <span className="text-indigo-300">BlogSphere</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-xl mx-auto drop-shadow-md">
          Écrivez, lisez et partagez vos idées avec une communauté passionnée.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Se connecter
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
