import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    fetch("http://localhost:3001/mes-articles") 
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Erreur : ", err));
  }, []);

  const supprimerArticle = (id) => {
    if (!window.confirm("Supprimer cet article ?")) return;

    fetch(`http://localhost:3001/articles/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArticles(articles.filter((article) => article.id !== id));
      })
      .catch((err) => console.error("Erreur suppression", err));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mon tableau de bord</h1>
        <button
          onClick={() => navigate("/editor")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nouvel article
        </button>
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-500">Aucun article publié pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{article.titre}</h2>
                <p className="text-gray-600 text-sm">{article.date}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/editor/${article.id}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => supprimerArticle(article.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
