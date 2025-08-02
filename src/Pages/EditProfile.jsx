import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [bio, setBio] = useState(localStorage.getItem("bio") || "");

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("bio", bio);
    navigate("/profile"); // Redirige vers le profil
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSave}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Modifier le profil</h2>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Lien de l'avatar (facultatif)"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border rounded px-3 py-2 h-24"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
