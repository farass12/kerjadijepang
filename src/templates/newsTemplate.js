import React from "react";
import { graphql } from "gatsby";

export default function NewsTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
      <p className="text-gray-500 mb-6">{post.frontmatter.date}</p>
      <img
        src={post.frontmatter.image}
        alt={post.frontmatter.title}
        className="mb-6 rounded-lg"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        image
      }
    }
  }
`;
