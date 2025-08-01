import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editor = () => {
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelArticle = {
      id: Date.now(),
      titre,
      contenu,
      date: new Date().toLocaleDateString(),
    };

    const articlesExistants = JSON.parse(localStorage.getItem("articles")) || [];
    const nouveauxArticles = [nouvelArticle, ...articlesExistants];
    localStorage.setItem("articles", JSON.stringify(nouveauxArticles));

    setTitre('');
    setContenu('');
    navigate("/LesArticles");
  };

  const handleCancel = () => {
    setTitre('');
    setContenu('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Créer un nouvel article</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Entrez le titre de l'article"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Contenu</label>
          <textarea
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            rows={8}
            placeholder="Rédigez votre article ici..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
