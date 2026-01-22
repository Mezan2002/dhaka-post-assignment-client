"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { sliderNews } from "@/components/home/CenterContent/helpers";

const TopBlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const maxIndex = Math.max(0, sliderNews.length - itemsPerSlide);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="bg-white shadow-md border border-gray-100 p-4 flex items-center gap-4 relative overflow-hidden h-28">
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
              className="flex-shrink-0 w-1/3 px-2 flex gap-3 group h-full"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={55}
                  height={55}
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] text-black leading-snug transition-colors">
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
