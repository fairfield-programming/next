import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};

export default config;
