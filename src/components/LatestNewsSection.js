import React from "react";
import { StaticQuery, graphql } from "gatsby";
import cn from "classnames";

import LatestNewsItem from "./LatestNewsItem";

function LatestNewsSection({ className, items, ...props }) {
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      {/* Judul */}
      <div className="flex items-center">
        <h2 className="text-[32px] md:text-[45px] text-left leading-tight font-bold text-gray-900">
          ARTIKEL
        </h2>
      </div>

      {/* List Artikel */}
      <ul className="grid md:grid-cols-2 gap-[32px] mt-[32px]">
        {items.map(({ title, url, date, image }, i) => (
          <li key={i} className="max-w-[400px]">
            <LatestNewsItem
              className="h-full"
              title={title}
              image={image}
              url={url}
              date={date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LatestNewsSectionWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query NewsQuery {
          items: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "news" } } }
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  date(formatString: "YYYY-MM-DD")
                  image
                  url
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <LatestNewsSection
          items={data.items.edges.map(({ node }) => node.frontmatter)}
          {...props}
        />
      )}
    />
  );
}
