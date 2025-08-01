import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogin = () => {
    alert("Vous devez avoir un compte pour liker un article !");
  };

  const [likes, setLikes] = useState(Array(6).fill(0));

  const articles = [
    {
      title: "L'écriture collaborative",
      content:
        "Ensemble, écrivons mieux. Découvrez comment la collaboration enrichit la créativité.",
    },
    {
      title: "Trouvez l'inspiration",
      content:
        "Des conseils pratiques pour ne jamais manquer d'idées et débloquer votre plume.",
    },
    {
      title: "Construire une communauté",
      content:
        "Rejoignez une plateforme où auteurs, lecteurs et passionnés partagent leurs savoirs.",
    },
    {
      title: "Lire pour mieux écrire",
      content:
        "La lecture nourrit l'imaginaire. Découvrez comment elle influence votre style d'écriture.",
    },
    {
      title: "Techniques de storytelling",
      content:
        "Apprenez à captiver votre lecteur grâce aux techniques narratives modernes.",
    },
    {
      title: "Devenir un auteur régulier",
      content:
        "Écrire chaque jour, même un peu, peut transformer votre pratique et votre discipline.",
    },
  ];

  const handleLike = (index) => {
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-5xl font-bold text-center text-indigo-800 mb-6">
        Bienvenue sur <span className="text-indigo-800">BlogSphere</span>
      </h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        Écrivez, lisez et partagez vos idées avec une communauté passionnée.
      </p>

      <div className="flex justify-center mb-8 gap-4">
        <Link
          to="/login"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
        >
          Se connecter
        </Link>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
        >
          S'inscrire
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <button
              onClick={() => handleLike(idx)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition"
            >
               Liker ({likes[idx]})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;