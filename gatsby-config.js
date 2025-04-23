require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

if (!process.env.CONTENTFUL_API_KEY) {
  console.warn("⚠️ CONTENTFUL_API_KEY is not defined!");
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://v1.zqlimy.com",
    title: "ZQLIMY's",
    description:
      "A place where snow doesn’t fall. Where the only light filling the night sky is the Moon. A river that flows south, cutting deep into the City.",
    author: "Zack Lim",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-128986886-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.CONTENTFUL_API_KEY}`,
        spaceId: "teqvjjl1hbzf",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 300,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
