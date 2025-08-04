import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Titre et contenu obligatoires !");
      return;
    }

    try {
      const newArticle = {
        title,
        content,
        image,
        likes: 0,
        comments: [],
      };

      await axios.post("http://localhost:5000/api/articles", newArticle);

      alert("Article publié avec succès !");
      navigate("/articles"); // Redirige vers la liste des articles
    } catch (error) {
      console.error("Erreur lors de la publication :", error);
      alert("Erreur lors de la publication");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📝 Rédiger un nouvel article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />

        <input
          type="text"
          placeholder="URL de l'image (facultatif)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />

        <textarea
          rows="10"
          placeholder="Contenu de l'article"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Publier l'article
        </button>
      </form>
    </div>
  );
};

export default Editor;
