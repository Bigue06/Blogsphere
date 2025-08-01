import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Charger l'article
    fetch(`http://localhost:3001/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.article);
        setLikes(data.article.likes || 0);
        setComments(data.comments || []);
      })
      .catch((err) => console.error("Erreur chargement article :", err));
  }, [id]);

  const handleLike = () => {
    fetch(`http://localhost:3001/articles/${id}/like`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .catch((err) => console.error("Erreur like :", err));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    fetch(`http://localhost:3001/articles/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ content: newComment }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data.comment]);
        setNewComment("");
      })
      .catch((err) => console.error("Erreur commentaire :", err));
  };

  if (!article) return <div className="text-center py-10">Chargement...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{article.titre}</h1>
      <p className="text-gray-500 text-sm mb-4">
        Par {article.auteur} • {new Date(article.date).toLocaleDateString()}
      </p>

      <div
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: article.contenu }}
      />

      <div className="mb-6 flex items-center space-x-4">
        <button
          onClick={handleLike}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
        >
          ❤️ Aimer ({likes})
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Commentaires</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">Aucun commentaire pour le moment.</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-3 rounded">
                <p className="text-gray-800">{comment.content}</p>
                <p className="text-sm text-gray-500">
                  par {comment.author} le {new Date(comment.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          className="w-full p-3 border rounded mb-2"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publier
        </button>
      </form>
    </div>
  );
};

export default Article;
