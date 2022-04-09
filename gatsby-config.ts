import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
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

export default config;
