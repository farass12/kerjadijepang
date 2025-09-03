import React from "react"
import cn from "classnames"

export default function MediaCoverageItem({
  className,
  title,
  url,
  image,
  media,
  ...props
}) {
  return (
    <a
      className={cn(
        "block",
        "overflow-hidden",
        "bg-white",
        "border-like-cyan-light",
        "border-[1px]",
        "rounded-[8px]",
        "transition",
        "transition-transform",
        "hover:scale-[1.05]",
        "hover:shadow-xl",
        "hover:ring-black",
        "hover:relative",
        "hover:z-10",
        "active:scale-[1.05]",
        className
      )}
      {...props}
      href={url}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aspect-w-1 aspect-h-1">
        <div className="p-[24px] flex items-center justify-center">
          <img
            className="block object-contain w-full h-full"
            src={image}
            alt={title}
          />
        </div>
      </div>

      {media && (
        <p className="text-center text-sm text-gray-600 mt-2">{media}</p>
      )}
    </a>
  )
}
