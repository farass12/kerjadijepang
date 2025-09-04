const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // ambil nama file markdown sebagai slug
    const slug = `/${path.basename(node.fileAbsolutePath, ".md")}/`

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  // === Redirect lama (opsional) ===
  createRedirect({
    fromPath: `/in`,
    toPath: `https://like.co/in`,
    redirectInBrowser: true,
    isPermanent: false,
  })

  // === Ambil semua news markdown ===
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("❌ Error saat GraphQL query news", result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach((post) => {
    createPage({
      path: post.fields.slug, // ✅ path pakai slug otomatis
      component: path.resolve(`./src/templates/newsTemplate.js`),
      context: {
        id: post.id, // dikirim ke template biar bisa query detail artikel
      },
    })
  })
}

// === Fix schema Date conflict ===
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemarkFrontmatter {
      title: String!
      date: Date @dateformat
      type: String
      url: String
      image: String
    }
  `)
}
