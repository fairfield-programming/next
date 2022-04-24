const config = {
  plugins: [
      {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: require("./src/theme"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`
  ]
};

module.exports = config;
