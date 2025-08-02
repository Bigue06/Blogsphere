import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const avatarUrl =
    localStorage.getItem("avatar") || "https://ui-avatars.com/api/?name=" + username;
  const bio = localStorage.getItem("bio") || "Décrivez-vous ici...";

  const handleEdit = () => {
    navigate("/edit-profile");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer votre profil ?");
    if (confirmDelete) {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("avatar");
      localStorage.removeItem("bio");

      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
        />
        <h1 className="text-3xl font-bold mb-1 text-gray-800">{username}</h1>
        <p className="text-gray-500 mb-4">{email}</p>

        <div className="bg-gray-50 p-4 rounded-lg border mb-6 text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bio</h2>
          <p className="text-gray-600">{bio}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Modifier
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
