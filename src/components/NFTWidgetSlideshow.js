import React, { useState } from "react"
import { EffectCards, Autoplay } from "swiper"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import classNames from "classnames"

import "swiper/css"
import "swiper/css/effect-cards"

import ArrowRight from "./icons/ArrowRight"

function SlideshowNavButton({ className, isDisabled, onClick }) {
  return (
    <button
      className={classNames(
        "w-[32px] h-[32px] p-[8px]",
        isDisabled
          ? "text-medium-gray"
          : "text-like-cyan-vlight hover:text-like-cyan-light",
        "transition-colors",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      <ArrowRight className="w-[16px] h-[16px]" />
    </button>
  )
}

function SlideshowControl({ items, currentIndex }) {
  const swiper = useSwiper()
  return (
    <div className="flex items-center justify-center gap-[16px] mt-4">
      <SlideshowNavButton
        className="rotate-180"
        isDisabled={currentIndex === 0}
        onClick={() => swiper.slidePrev()}
      />
      {items.map((nft, i) => {
        const isActive = i === currentIndex
        return (
          <button
            key={i}
            className={classNames(
              "flex items-center justify-center",
              "w-[24px] h-[24px]",
              isActive ? "text-like-cyan" : "text-like-cyan-light",
              "hover:opacity-75",
              "transition-colors",
              "transition-opacity"
            )}
            disabled={isActive}
            onClick={() => swiper.slideTo(i)}
          >
            <span
              className={classNames(
                "w-[8px] h-[8px]",
                "rounded-full block bg-current",
                "transition-transform",
                {
                  "scale-50": !isActive,
                }
              )}
            />
          </button>
        )
      })}
      <SlideshowNavButton
        isDisabled={currentIndex === items.length - 1}
        onClick={() => swiper.slideNext()}
      />
    </div>
  )
}

export default function NFTWidgetSlideshow({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCards]}
      centeredSlides
      centerInsufficientSlides
      effect="cards"
      onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          {({ isActive, isNext, isPrev }) => (
            <div
              className={classNames(
                "mx-auto rounded-xl overflow-hidden border border-like-cyan-light shadow-lg transition-all duration-500 relative",
                "w-[300px] h-[400px] max-w-full", // 👉 ukuran card tetap 300x400, responsive di mobile
                {
                  "brightness-90": !isActive && (isNext || isPrev),
                  "brightness-75": !isActive && !(isNext || isPrev),
                }
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/60 text-white text-center text-sm py-2">
                {item.title}
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}

      {/* dots & tombol */}
      <SlideshowControl
        slot="container-end"
        items={items}
        currentIndex={currentIndex}
      />
    </Swiper>
  )
}
