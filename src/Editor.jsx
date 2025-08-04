import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "./Api/articleAPI"; // Assure-toi que ce chemin est correct
const Editor = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    const response = await createArticle(formData);
    console.log("Article créé avec succès:", response);
    alert("Article publié !");
    navigate("/dashboard");
  } catch (error) {
    console.error("Erreur lors de la création de l'article :", error);
    alert("Échec de la création de l'article. Vérifie le serveur.");
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
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-gray-300 rounded p-2"
        />

        {imagePreview && (
          <div className="my-4">
            <img
              src={imagePreview}
              alt="Aperçu de l'image"
              className="w-full h-auto rounded-md"
            />
          </div>
        )}

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
