import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './Article'; 
function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Bienvenue sur BlogSphere</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Une plateforme collaborative pour écrire, lire et partager des idées avec le monde entier.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher un article..."
            className="w-80 md:w-96 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </section>

      <div>
        <img
          src="https://elements-resized.envatousercontent.com/elements-cover-images/23749770-7999-4e3c-868d-f88f7027e5f9?w=2038&cf_fit=scale-down&q=85&format=auto&s=2a4b4774c5310eb6516c2ecf612b1aaeb79c4e271b78f4fc759cb8a7226b071f"
          alt="BlogSphere"
          className="w-full h-[400px] object-cover"
        />
        <br />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-12">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
