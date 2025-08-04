import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [bio, setBio] = useState(localStorage.getItem("bio") || "Décrivez-vous ici...");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const avatarUrl = avatar || `https://ui-avatars.com/api/?name=${username}`;

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setAvatar(base64Image);
      localStorage.setItem("avatar", base64Image);

      await updateProfile(base64Image, bio);
    };
    reader.readAsDataURL(file);
  };

  const handleBioChange = (e) => {
    const newBio = e.target.value;
    setBio(newBio);
    localStorage.setItem("bio", newBio);
  };

  const updateProfile = async (avatarToSend, bioToSend) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/user/update",
        {
          avatar: avatarToSend,
          bio: bioToSend,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Profil mis à jour côté serveur");
    } catch (error) {
      console.error("❌ Erreur lors de la mise à jour du profil :", error);
    }
  };

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
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md object-cover"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 mx-auto text-sm"
        />

        <h1 className="text-3xl font-bold mb-1 text-gray-800">{username}</h1>
        <p className="text-gray-500 mb-4">{email}</p>

        <div className="bg-gray-50 p-4 rounded-lg border mb-6 text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bio</h2>
          <textarea
            value={bio}
            onChange={handleBioChange}
            onBlur={() => updateProfile(avatar, bio)}
            className="w-full p-2 border rounded text-sm text-gray-700"
          />
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
