import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate(); 

  const connexion = (e) => {
    e.preventDefault();
    alert("Connexion réussie !");
    navigate("/profile"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Connexion à votre compte</h1>
        <form onSubmit={connexion} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Vous n’avez pas de compte ? <a href="/register" className="text-blue-600 hover:underline">S’inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
