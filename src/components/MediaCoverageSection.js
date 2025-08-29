import React from "react"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"

// ✅ Ikon (optional, bisa aktifkan kalau perlu)
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"

import MediaCoverageItem from "./MediaCoverageItem"


function MediaCoverageSection({ className, items, ...props }) {
  return (
    
    <section
      className={cn(
        "flex flex-col items-center mt-[4px]",
        (!items || items.length === 0) && "hidden", // 🔧 auto-hide kalau kosong
        className
      )}
      {...props}
    >
      {/* 🔗 Sosial Media (opsional, tinggal aktifkan lagi kalau mau) */}
      {/* <div className="flex gap-2 mt-2">
        <a
          href="https://instagram.com/Kerja_Jepang_aic"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://tiktok.com/@Kerja_Jepang_aic"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          <FaTiktok size={20} />
        </a>
      </div> */}

      {/* 🔲 List Item */}
      <ul className="grid items-center sm:items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {items.map(({ title, url, platform, image, backgroundColor }, i) => (
          <li key={i} className="min-w-[4px] max-w-[4px]">
            <MediaCoverageItem
              className="w-full h-full mx-auto"
              title={title}
              image={image}
              url={url}
              media={platform}
              backgroundColor={backgroundColor}
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
                  image
                  url
                  platform
                }
              }
            }
          }
        }
      `}
      render={data => {
        const items = data.items.edges.map(({ node }) => node.frontmatter)
        return <MediaCoverageSection items={items} {...props} />
      }}
    />
  )
}
