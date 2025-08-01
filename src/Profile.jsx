// src/Pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   
    fetch(`http://localhost:3001/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setArticles(data.articles || []);
      })
      .catch((err) => console.error("Erreur chargement profil :", err));
  }, [username]);

  if (!user) return <div className="p-8 text-center">Chargement du profil...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.bio}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Articles de {user.name}</h2>
        {articles.length === 0 ? (
          <p className="text-gray-500">Aucun article publié.</p>
        ) : (
          <div className="grid gap-4">
            {articles.map((a) => (
              <div key={a.id} className="border p-4 rounded shadow-sm">
                <h3 className="text-xl font-medium">{a.titre}</h3>
                <p className="text-sm text-gray-500">
                  Publié le {new Date(a.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
