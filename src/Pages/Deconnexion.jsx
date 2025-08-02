import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Deconnexion = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(API_URL_LOGOUT); 
      localStorage.removeItem('user');
      localStorage.removeItem('token'); 
      localStorage.removeItem('username');
      

      alert("Déconnexion réussie !");
      navigate('/login');
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      alert("Une erreur s'est produite lors de la déconnexion.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Se déconnecter
    </button>
  );
};

export default Deconnexion;
