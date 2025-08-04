import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    alert("Déconnexion réussie !");
    navigate("/login");
  };

  return (
    <div className="bg-black text-white flex justify-between items-center p-4">
      <img 
        src="src/Api/speech-bubble-dialog-illustration-business-600nw-306465737-removebg-preview.png" 
        alt="BlogSphere Logo" 
        className="h-8" 
      />

      <ul className="flex space-x-4 items-center">
        <Link to="/home">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Déconnexion
          </button>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
