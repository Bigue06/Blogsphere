import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const API_URL = "http://localhost:5000/api/articles";

  const fetchArticles = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("📦 Réponse API :", res.data);
      setArticles(res.data); // ✅ Correction ici
    } catch (err) {
      console.error("Erreur chargement articles :", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleLike = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticles();
    } catch (err) {
      console.error("Erreur like :", err.response?.data || err.message);
    }
  };

  const handleDislike = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/dislike`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticles();
    } catch (err) {
      console.error("Erreur dislike :", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet article ?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Article supprimé avec succès");
      fetchArticles();
    } catch (err) {
      console.error("Erreur suppression :", err.response?.data || err.message);
      alert("❌ Suppression échouée : " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">📚 Tous les articles</h1>
        <button
          onClick={() => navigate("/editor")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Créer un article
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {articles.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">Aucun article disponible.</p>
        )}

        {articles.map((article) => (
          <div key={article._id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            {article.image && (
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            )}

            <div className="p-4">
              <p className="text-sm font-semibold text-purple-600 mb-1 capitalize">{article.category}</p>

              <h2
                className="text-xl font-bold text-gray-900 cursor-pointer hover:underline"
                onClick={() => navigate(`/article/${article._id}`)}
              >
                {article.title}
              </h2>

              <p className="text-gray-600 text-sm mt-1">
                {article.content?.slice(0, 100)}...
              </p>
              <p className="text-sm text-gray-500 mt-1">
                ✍️ Auteur : {article.author?.username || "Inconnu"}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ❤️ {article.likes?.length || 0} | 👎 {article.dislikes?.length || 0} | 💬{" "}
                {article.comments?.length || 0} | 👁️ {article.views || 0}
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => handleLike(article._id)}
                  className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  ❤️ Like
                </button>
                <button
                  onClick={() => handleDislike(article._id)}
                  className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  👎 Dislike
                </button>
                <button
                  onClick={() => navigate(`/editor/${article._id}`)}
                  className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                >
                  🖊 Modifier
                </button>
                <button
                  onClick={() => handleDelete(article._id)}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  🗑 Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
