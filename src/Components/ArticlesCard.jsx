import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm font-semibold text-purple-600 mb-2">{article.category}</p>

        <Link to={`/article/${article._id}`}>
          <h2 className="text-xl font-bold text-gray-900 hover:underline">
            {article.title}
          </h2>
        </Link>

        <p className="text-gray-600 mt-2">{article.description}</p>

        <div className="flex items-center mt-4">
          <img
            src={article.authorAvatar}
            alt={article.author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{article.author}</p>
            <p className="text-xs text-gray-500">{article.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
