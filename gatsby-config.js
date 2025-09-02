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
    // === Optimasi Gambar ===
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // === Source Filesystem untuk images ===
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    // === Source Filesystem untuk konten markdown ===
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },

    // === Markdown transformer ===
    `gatsby-transformer-remark`,

    // === Manifest untuk PWA icon ===
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    // === Netlify CMS ===
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
      },
    },

    // === Google Analytics ===
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-F31CNT7828"],
      },
    },

    // === Plugin tambahan ===
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",

    // === Netlify Headers ===
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
