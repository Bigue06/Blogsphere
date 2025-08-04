import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, ThumbsUp, MessageCircle, FileText } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Erreur lors du chargement des articles :", err));
  }, []);

  const totalArticles = articles.length;
  const totalLikes = articles.reduce((acc, a) => acc + (a.likes || 0), 0);
  const totalComments = articles.reduce((acc, a) => acc + (a.comments?.length || 0), 0);

  const handleCreateArticle = () => navigate("/editor");

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">🎯 Tableau de bord</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard title="Articles" value={totalArticles} icon={<FileText className="text-blue-600" />} />
          <StatCard title="Likes" value={totalLikes} icon={<ThumbsUp className="text-green-600" />} />
          <StatCard title="Commentaires" value={totalComments} icon={<MessageCircle className="text-yellow-500" />} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">📝 Vos articles</h2>
            <button
              onClick={handleCreateArticle}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              <PlusCircle className="mr-2" /> Creer un article
            </button>
          </div>

          {articles.length === 0 ? (
            <p className="text-gray-500 italic">Aucun article pour le moment.</p>
          ) : (
            <div className="space-y-4">
              {articles.map((a) => (
                <div key={a._id} className="p-4 bg-gray-50 border rounded hover:bg-gray-100 transition">
                  <h3 className="font-bold text-lg">{a.title}</h3>
                  <p className="text-sm text-gray-600">
                    👍 {a.likes || 0} | 💬 {a.comments?.length || 0}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
    <div>
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
    <div className="text-4xl">{icon}</div>
  </div>
);

export default Dashboard;
