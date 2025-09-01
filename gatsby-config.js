module.exports = {
  siteMetadata: {
    siteUrl: "https://about.like.co",
    title: "Work in Japan",
    titleTemplate: "%s | Work in Japan",
    description: "Work in Japan",
    image: "/og.png",
    twitterUsername: "@likecoin",
    themeColor: "#28646e",
    blogUrl: "https://blog.like.co",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    // plugin untuk image
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-F31CNT7828"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [`Referrer-Policy: strict-origin-when-cross-origin`],
        },
      },
    },
  ],
};
