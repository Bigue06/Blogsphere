import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);       
  const [articles, setArticles] = useState([]);     

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUsername(storedUser);

   
    fetch(`http://localhost:5000/api/auth/profile/${storedUser}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) =>
        console.error("Erreur lors du chargement du profil :", err)
      );

  
    fetch(`http://localhost:5000/api/articles/user/${storedUser}`)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des articles :", err)
      );
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert("Déconnexion réussie !");
    navigate("/login");
  };

  const totalLikes = articles.reduce((acc, art) => acc + (art.likes || 0), 0);
  const totalComments = articles.reduce((acc, art) => acc + (art.comments?.length || 0), 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Bienvenue, {profile ? profile.name : username}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded">
            <h2 className="text-lg font-semibold">Articles</h2>
            <p className="text-2xl">{articles.length}</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <h2 className="text-lg font-semibold">Likes</h2>
            <p className="text-2xl">{totalLikes}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded">
            <h2 className="text-lg font-semibold">Commentaires</h2>
            <p className="text-2xl">{totalComments}</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Vos articles</h2>
        {articles.map((a) => (
          <div key={a._id} className="p-3 mb-3 border rounded bg-gray-50">
            <h3 className="font-bold text-lg">{a.title}</h3>
            <p className="text-sm text-gray-600">
              Likes : {a.likes || 0} | Commentaires : {a.comments?.length || 0}
            </p>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default Dashboard;
