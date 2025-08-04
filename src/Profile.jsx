import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("Décrivez-vous ici...");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const avatarUrl = avatar || `https://ui-avatars.com/api/?name=${username}`;

  // 🔄 Récupérer les infos du backend
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { avatar, bio, username, email } = res.data.user;

        setAvatar(avatar || "");
        setBio(bio || "Décrivez-vous ici...");
        setUsername(username || "");
        setEmail(email || "");
      } catch (err) {
        console.error("Erreur récupération profil :", err);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleImageChange = async (e) => {
=======
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const bio = localStorage.getItem("bio") || "Décrivez-vous ici...";

  const avatarUrl = avatar || `https://ui-avatars.com/api/?name=${username}`;

  // 🔹 Quand on change d’image
  const handleImageChange = (e) => {
>>>>>>> c135032fbd1ccbf2a14d2415ba179d4f70d4ecb3
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setAvatar(base64Image);
<<<<<<< HEAD
      await updateProfile(base64Image, bio);
=======
      localStorage.setItem("avatar", base64Image);
>>>>>>> c135032fbd1ccbf2a14d2415ba179d4f70d4ecb3
    };
    reader.readAsDataURL(file);
  };

<<<<<<< HEAD
  const handleBioChange = (e) => {
    setBio(e.target.value);
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

      console.log("✅ Profil mis à jour");
    } catch (error) {
      console.error("❌ Erreur mise à jour :", error);
    }
=======
  const handleEdit = () => {
    navigate("/edit-profile");
>>>>>>> c135032fbd1ccbf2a14d2415ba179d4f70d4ecb3
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer votre profil ?");
    if (confirmDelete) {
<<<<<<< HEAD
      localStorage.clear();
=======
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("avatar");
      localStorage.removeItem("bio");
>>>>>>> c135032fbd1ccbf2a14d2415ba179d4f70d4ecb3
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

        {/* 🔹 Upload de nouvelle image */}
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
          <p className="text-gray-600">{bio}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/edit-profile")}
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
