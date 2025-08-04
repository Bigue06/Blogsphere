import React from "react";
import ArticleCard from "../components/ArticlesCard";


const Articles = () => {
  const articles = [
    {
      _id: "abc123",
      image: "https://www.stackct.com/wp-content/uploads/2022/12/STACKEwing.jpg.webp",
      category: "Software Engineering",
      title: "Building your API Stack",
      description:  "Construire votre pile d'API Cela fait référence au processus de sélection, d intégration et de gestion de différentes API pour créer une solution logicielle complète et fonctionnelle...",
      author: "Lana Steiner",
      authorAvatar: "https://i.pravatar.cc/100?img=8",
      date: "18 Jan 2022"
    },
    {
      _id: "abc124",
      image: "https://www.google.com/imgres?q=Migration%20vers%20Linear%20%3A%20les%20bases%20donne%20moi%20une%20image&imgurl=https%3A%2F%2Fafricacenter.org%2Fwp-content%2Fuploads%2F2024%2F01%2FMigration_2024_3x2.jpg&imgrefurl=https%3A%2F%2Fafricacenter.org%2Ffr%2Fspotlight%2Ftendances-migratoire-a-surveiller-en-afrique-en-2024%2F&docid=Pujc4Uzqx2dohM&tbnid=NexsiMLWMVGr4M&vet=12ahUKEwjYld6xp_GOAxX7RaQEHaw7A0AQM3oECE8QAA..i&w=1800&h=1200&hcb=2&ved=2ahUKEwjYld6xp_GOAxX7RaQEHaw7A0AQM3oECE8QAA",
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear est un outil puissant qui peut simplifier la gestion de projet pour les équipes modernes. Réputé pour sa rapidité, sa simplicité et son focus, Linear aide les développeurs et autres professionnels à gérer les tâches, suivre les problèmes et collaborer efficacement.",
      author: "Phoenix Baker",
      authorAvatar: "https://i.pravatar.cc/100?img=7",
      date: "19 Jan 2022"
    },
    {
      _id: "abc125",
      image: "https://www.google.com/imgres?q=How%20do%20you%20create%20compelling%20presentations%20that%20wow%20your%20colleagues..%20donne%20moi%20cette%20image&imgurl=https%3A%2F%2Fstatic-cse.canva.com%2Fblob%2F1315953%2FPresentation.png&imgrefurl=https%3A%2F%2Fwww.canva.com%2Flearn%2Fbeginners-guide-to-creating-more-engaging-presentations%2F&docid=vMJ3eughZtBESM&tbnid=pxzdbEKwVYhsSM&vet=12ahUKEwiRn5_BqPGOAxUeU6QEHYDFKygQM3oECBQQAA..i&w=1611&h=1080&hcb=2&ved=2ahUKEwiRn5_BqPGOAxUeU6QEHYDFKygQM3oECBQQAA",
      category: "Design",
      title: "UX Review Presentations",
      description: "Pour créer une présentation percutante qui impressionnera vos collègues, il est essentiel de bien la préparer et de la rendre engageante. Cela implique de choisir un sujet clair et pertinent, de structurer votre contenu....",
      author: "Olivia Rhye",
      authorAvatar: "https://i.pravatar.cc/100?img=6",
      date: "20 Jan 2022"
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
