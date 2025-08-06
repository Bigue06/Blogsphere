import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      axios
        .get(`http://localhost:5000/api/articles/${id}`)
        .then((res) => {
          const art = res.data;
          setTitle(art.title || "");
          setContent(art.content || "");
          setImagePreview(art.image || "");
        })
        .catch((err) => {
          console.error("Erreur chargement article :", err);
        });
    }
  }, [id]);

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
      formData.append("title", title.trim());
      formData.append("content", content.trim());
      if (image) formData.append("image", image);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (isEdit) {
        await axios.put(
          `http://localhost:5000/api/articles/update/${id}`,
          formData,
          config
        );
        alert("✅ Article modifié !");
      } else {
        await axios.post(
          "http://localhost:5000/api/articles/create",
          formData,
          config
        );
        alert("📝 Article publié !");
      }

      navigate("/dashboard");
    } catch (err) {
      console.error("Erreur lors de la soumission :", err);
      const status = err?.response?.status;
      const msg = err?.response?.data?.msg || "Erreur serveur.";

      if (status === 403) {
        alert("⛔ Vous n'avez pas le droit de modifier cet article. Seul l'auteur peut le faire.");
        navigate("/dashboard");
      } else {
        alert(msg);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? "🖊 Modifier l'article" : "📝 Rédiger un article"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2"
        />

        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="w-full my-4 rounded" />
        )}

        <textarea
          rows="10"
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2"
          required
        />

        <button
          type="submit"
          disabled={!title.trim()}
          className={`px-4 py-2 rounded text-white ${
            !title.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isEdit ? "✅ Mettre à jour" : "➕ Publier"}
        </button>
      </form>
    </div>
  );
};

export default Editor;
