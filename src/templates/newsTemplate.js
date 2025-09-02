import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function NewsTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const image = getImage(frontmatter.image);

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {frontmatter.title}
      </h1>

      {/* Tanggal */}
      <p className="text-gray-500 text-sm mb-6">{frontmatter.date}</p>

      {/* Gambar */}
      {image && (
        <GatsbyImage
          image={image}
          alt={frontmatter.title}
          className="w-full rounded-lg mb-8"
        />
      )}

      {/* Konten */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}

export const query = graphql`
  query NewsTemplateQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 800
            )
          }
        }
      }
    }
  }
`;
