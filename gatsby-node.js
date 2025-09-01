const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // === 1) Redirect lama ===
  createRedirect({
    fromPath: `/in`,
    toPath: `https://like.co/in`,
    redirectInBrowser: true,
    isPermanent: false,
  });

  // === 2) Generate halaman dari Markdown ===
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "news" } } }
      ) {
        nodes {
          id
          frontmatter {
            url
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: post.frontmatter.url, // 👈 ambil path dari frontmatter .md
      component: path.resolve(`./src/templates/newsTemplate.js`), // template artikel
      context: {
        id: post.id,
      },
    });
  });
};
