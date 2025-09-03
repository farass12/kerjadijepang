import React from "react"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"

import MediaCoverageItem from "./MediaCoverageItem"

function MediaCoverageSection({ className, items, ...props }) {
  return (
    <section
      className={cn(
        "flex flex-col items-center mt-[4px]",
        (!items || items.length === 0) && "hidden",
        className
      )}
      {...props}
    >
      {/* List Item */}
      <ul className="grid items-center sm:items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {items.map(({ title, url, platform, image }, i) => (
          <li key={i} className="min-w-[4px] max-w-[4px]">
            <MediaCoverageItem
              className="w-full h-full mx-auto"
              title={title}
              image={image}
              url={url}
              media={platform}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MediaCoverageSectionWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query MediaCoverageQuery {
          items: allMarkdownRemark(
            filter: {
              fileAbsolutePath: { regex: "//en//" }
              frontmatter: { type: { eq: "media-coverage" } }
            }
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  url
                  platform
                  image
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const items = data.items.edges.map(({ node }) => node.frontmatter)
        return <MediaCoverageSection items={items} {...props} />
      }}
    />
  )
}
