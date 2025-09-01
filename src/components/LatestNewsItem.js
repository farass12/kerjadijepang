import React from "react"
import cn from "classnames"
import { format as formatDate } from "date-fns"

export default function LatestNewsItem({
  className,
  title,
  date,
  image,
  ...props
}) {
  const formattedDate = date ? formatDate(new Date(date), 'dd/MM/yyyy') : null

  return (
    <div
  className={cn(
    'block',
    'overflow-hidden',
    'bg-red',
    'rounded-[8px]',
    'transition',
    'hover:shadow-xl',
    'hover:scale-[1.05]',
    'active:scale-[1]',
    className,
  )}
  {...props}
>

      <div className="aspect-w-15 aspect-h-8">
        <img
          className="block object-cover w-full h-full"
          loading="lazy"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-[16px]">
        <div className="text-dark-gray text-[16px]">{title}</div>
        {formattedDate && (
          <div className="mt-[10px] text-[14px] text-medium-gray">{formattedDate}</div>
        )}
      </div>
    </div>
  )
}
