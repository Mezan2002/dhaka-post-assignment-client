"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { sliderNews } from "@/components/home/CenterContent/helpers";

const TopBlogSlider = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(1);
      } else if (width < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const maxIndex = Math.max(0, sliderNews.length - itemsPerSlide);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex, handleNext]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="bg-white shadow-md border border-gray-100 p-3 sm:p-4 flex items-center gap-2 sm:gap-4 relative overflow-hidden h-max lg:h-28">
      <button
        onClick={handlePrev}
        className="w-7 h-full border border-gray-200 flex items-center justify-center transition-colors flex-shrink-0 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-4 text-gray-500 group-hover:text-gray-700 duration-300 transition-colors" />
      </button>

      <div className="flex-1 overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
          }}
        >
          {sliderNews.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 flex gap-3 group h-full"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="lg:text-[11px] text-xs text-black font-medium sm:font-normal leading-snug transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-7 h-full border border-gray-200 flex items-center justify-center transition-colors flex-shrink-0 group"
        aria-label="Next slide"
      >
        <ChevronRight className="size-4 text-gray-500 group-hover:text-gray-700 duration-300 transition-colors" />
      </button>
    </div>
  );
};

export default TopBlogSlider;
