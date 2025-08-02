import React, { useState, useEffect } from 'react';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [commentInputs, setCommentInputs] = useState({}); 
  useEffect(() => {
    const fakeArticles = [
      {
        id: 1,
        title: 'Mon premier article',
        content: 'Voici le contenu du premier article. Il parle de React et des composants Les composants sont un des concepts fondamentaux de React. Ils sont les fondations sur lesquelles vous construisez vos interfaces utilisateurs (UI), ce qui en fait le point de départ idéal pour votre apprentissage de React !.',
        likes: 2,
        imgage: 'https://source.unsplash.com/random/600x300?react',
        comments: [],
      },
      {
        id: 2,
        title: 'Deuxième article',
        content: 'Ce deuxième article explore les hooks en React, comme useState et useEffect.',
        likes: 5,
        image: 'https://source.unsplash.com/random/600x300?code',
        comments: [],
      },
      {
        id: 3,
        title: 'Troisième article',
        content: 'Dans cet article, nous parlons de Tailwind CSS pour styliser vos composants.',
        likes: 3,
        image: 'https://source.unsplash.com/random/600x300?css',
        comments: [],
      },
    ];
    setArticles(fakeArticles);
  }, []);

  const handleLike = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      setArticles((prev) => prev.filter((article) => article.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Fonction de modification de l'article avec ID ${id} à implémenter.`);
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddComment = (id) => {
    const comment = commentInputs[id]?.trim();
    if (!comment) return;

    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? { ...article, comments: [...article.comments, comment] }
          : article
      )
    );

   
    setCommentInputs((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">📝 BlogSphere — Articles</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between"
        >
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
          )}
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-bold text-gray-800 mb-1">{article.title}</h2>
            <p className="text-gray-600 text-sm flex-grow mb-2">
              {article.content.length > 100
                ? article.content.substring(0, 100) + "..."
                : article.content}
            </p>
            <p className="text-sm text-gray-500 mb-2">👍 {article.likes} Likes</p>

            <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => handleLike(article.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                👍 Like
              </button>
              <button
                onClick={() => handleEdit(article.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
              >
                ✏️ Modifier
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                🗑️ Supprimer
              </button>
            </div>

        
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">Commentaires</h3>
              <ul className="space-y-1 mb-2 max-h-24 overflow-y-auto pr-1">
                {article.comments.map((comment, index) => (
                  <li key={index} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                    • {comment}
                  </li>
                ))}
              </ul>
              <textarea
                rows="2"
                placeholder="Écrire un commentaire..."
                value={commentInputs[article.id] || ''}
                onChange={(e) => handleCommentChange(article.id, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm mb-1"
              />
              <button
                onClick={() => handleAddComment(article.id)}
                className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600"
              >
                ➕ Ajouter
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default ArticlePage;
