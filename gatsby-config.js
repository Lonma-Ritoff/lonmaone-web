require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Lonma-Ritoff | Groupe de développement de voitures fondé par des étudiants",
    titleTemplate: "Lonma-Ritoff | %s",
    description:
      "LonmaOne est un projet mené par le groupe Lonma-Ritoff, fondé par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles.",
    url: "https://www.lonma-ritoff.com", // No trailing slash allowed!
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
  ],
};
