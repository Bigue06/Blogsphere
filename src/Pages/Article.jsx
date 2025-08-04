import React, { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Edit,
  Trash2
} from "lucide-react";

const Articles = () => {
  const initialArticles = [
    {
      _id: "abc123",
      image: "https://www.stackct.com/wp-content/uploads/2022/12/STACKEwing.jpg.webp",
      category: "Software Engineering",
      title: "Building your API Stack",
      description: "Une interface de programmation d'application (API) est un ensemble de protocoles permettant de créer des applications...",
      author: "Lana Steiner",
      authorAvatar: "https://i.pravatar.cc/100?img=8",
      date: "18 Jan 2022",
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      _id: "abc124",
      image: "https://africacenter.org/wp-content/uploads/2024/01/Migration_2024_3x2.jpg",
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear est un outil puissant qui peut simplifier la gestion de projet pour les équipes modernes...",
      author: "Phoenix Baker",
      authorAvatar: "https://i.pravatar.cc/100?img=7",
      date: "19 Jan 2022",
      likes: 0,
      dislikes: 0,
      comments: []
    },
    {
      _id: "abc125",
      image: "https://static-cse.canva.com/blob/1315953/Presentation.png",
      category: "Design",
      title: "UX Review Presentations",
      description: "Pour créer une présentation percutante qui impressionnera vos collègues...",
      author: "Olivia Rhye",
      authorAvatar: "https://i.pravatar.cc/100?img=6",
      date: "20 Jan 2022",
      likes: 0,
      dislikes: 0,
      comments: []
    }
  ];

  const [articles, setArticles] = useState(initialArticles);
  const [newComment, setNewComment] = useState("");

  const handleLike = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article._id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  const handleDislike = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article._id === id ? { ...article, dislikes: article.dislikes + 1 } : article
      )
    );
  };

  const handleAddComment = (id) => {
    if (newComment.trim()) {
      setArticles((prev) =>
        prev.map((article) =>
          article._id === id
            ? {
                ...article,
                comments: [...article.comments, newComment]
              }
            : article
        )
      );
      setNewComment(""); // Clear the comment input
    }
  };

  const handleDelete = (id) => {
    setArticles((prev) => prev.filter((article) => article._id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-sm text-indigo-500">{article.category}</h3>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <div className="flex items-center mb-4">
                <img src={article.authorAvatar} alt={article.author} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="text-sm font-semibold">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-gray-600 text-sm">
                <button onClick={() => handleLike(article._id)} className="flex items-center gap-1 hover:text-green-600">
                  <ThumbsUp size={18} /> {article.likes}
                </button>
                <button onClick={() => handleDislike(article._id)} className="flex items-center gap-1 hover:text-red-600">
                  <ThumbsDown size={18} /> {article.dislikes}
                </button>
                <button onClick={() => handleAddComment(article._id)} className="flex items-center gap-1 hover:text-blue-600">
                  <MessageCircle size={18} />
                </button>
                <button className="hover:text-yellow-600">
                  <Edit size={18} />
                </button>
                <button onClick={() => handleDelete(article._id)} className="hover:text-black">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Affichage des commentaires */}
              <div className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Ajouter un commentaire..."
                />
                <button
                  onClick={() => handleAddComment(article._id)}
                  className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
                >
                  Ajouter un commentaire
                </button>

                {/* Liste des commentaires */}
                {article.comments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold">Commentaires:</h4>
                    <ul className="list-disc pl-5">
                      {article.comments.map((comment, index) => (
                        <li key={index} className="text-sm text-gray-700">{comment}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
