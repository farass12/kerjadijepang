import React from "react"
import cn from "classnames"

import LatestNewsItem from "./LatestNewsItem"

export default function LatestNewsSection({ className, ...props }) {
  return (
    <section
      className={cn("flex flex-col items-center mt-[88px]", className)}
      {...props}
    >
      <div className="flex items-center">
        <h2 className="text-[32px] md:text-[45px] text-left leading-tight font-bold text-gray-900">
          ARTIKEL
        </h2>
      </div>

      <ul className="grid md:grid-cols-2 gap-[32px] mt-[32px]">
        {/* 👉 Artikel Pertama */}
        <li className="max-w-[400px]">
          <LatestNewsItem
            className="h-full"
            title="Kerja di Jepang"
            image="/images/artikel1.jpg"
            url="/kerja-di-jepang"
            date="2025-08-01"
          />
        </li>

        {/* 👉 Artikel Kedua */}
        <li className="max-w-[400px]">
          <LatestNewsItem
            className="h-full"
            title="Kerja Jepang"
            image="/images/artikel2.jpg"
            url="/kerjajepang"
            date="2025-08-05"
          />
        </li>

        {/* 👉 Artikel Ketiga */}
        <li className="max-w-[400px]">
          <LatestNewsItem
            className="h-full"
            title="Jepang"
            image="/images/artikel3.jpg"
            url="/jepang"
            date="2025-08-12"
          />
        </li>

        {/* 👉 Artikel Keempat */}
        <li className="max-w-[400px]">
          <LatestNewsItem
            className="h-full"
            title="Japan"
            image="/images/artikel4.jpg"
            url="/japan"
            date="2025-08-20"
          />
        </li>
      </ul>
    </section>
  )
}
