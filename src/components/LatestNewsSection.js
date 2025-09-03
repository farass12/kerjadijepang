import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import LatestNewsItem from "./LatestNewsItem"

export default function LatestNewsSection() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "news" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          image
        }
        fields {
          slug
        }
        }
      }
    }
  `)

  const items = data.allMarkdownRemark.nodes.map((node) => ({
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    image: node.frontmatter.image,
    url: node.fields.slug, // ✅ pakai slug
  }))

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {items.map((item, i) => (
        <LatestNewsItem key={i} {...item} />
      ))}
    </section>
  )
}
