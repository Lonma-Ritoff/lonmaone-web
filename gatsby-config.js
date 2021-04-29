require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Projet Carrera - Voiture autonome par des étudiants",
    titleTemplate: "%s · Projet Carrera",
    description:
      "ProjetCarrera est un projet mené par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles.",
    url: "https://www.projetcarrera.fr", // No trailing slash allowed!
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
  ],
};
