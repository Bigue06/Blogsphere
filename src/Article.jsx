import React from "react";

const articles = [
  {
    id: 1,
    titre: "Intelligence artificielle : les nouvelles règles européennes adoptées",
    auteur: "Marie Dupont",
    date: "2025-07-24",
    resume: "Le Parlement européen vient de voter une réglementation historique pour encadrer l'utilisation de l'IA.",
    contenu: "Ce jeudi, les députés européens ont adopté à une large majorité le « AI Act »...",
  },
  {
    id: 2,
    titre: "Sénégal : lancement officiel du Train Express Régional",
    auteur: "Ousmane Diop",
    date: "2025-07-21",
    resume: "Le TER Dakar-Diamniadio est enfin opérationnel après des années de travaux.",
    contenu: "Après plusieurs reports, le président Macky Sall a inauguré le TER reliant Dakar à Diamniadio...",
  },
  {
    id: 3,
    titre: "Climat : juillet 2025, le mois le plus chaud jamais enregistré",
    auteur: "Julien Morel",
    date: "2025-07-25",
    resume: "Des records de température ont été battus sur plusieurs continents.",
    contenu: "Selon l’Organisation météorologique mondiale, juillet 2025 est le plus chaud jamais mesuré...",
  },
];

const Article = () => {
    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <h1>{article.titre}</h1>
                    <p>{article.contenu}</p>
                </div>
            ))}
        </div>
    );
};

export default articles;
