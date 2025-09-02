import React from "react";
import { Link } from "gatsby";
import cn from "classnames";

export default function LatestNewsItem({
  className,
  title,
  image,
  url,
  date,
}) {
  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-2xl border overflow-hidden",
        className
      )}
    >
      {/* Gambar */}
      {image && (
        <Link to={url}>
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </Link>
      )}

      {/* Konten */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-sm text-gray-500">{date}</span>
        <Link
          to={url}
          className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-600"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
