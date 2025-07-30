import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold mb-2">{article.titre}</h2>
        <p className="text-gray-600 text-sm mb-1">
          Par {article.auteur} • {article.date}
        </p>
        <p className="text-gray-700 mt-2">{article.resume}</p>
      </div>

      <div className="mt-4">
        <Link
          to={`/article/${article.id}`}
          className="inline-block px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-200"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
