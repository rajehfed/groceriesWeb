/** @format */

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { sliderData } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeedBack() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-20 flex items-center justify-center flex-col">
      <h2 className="text-4xl font-semibold text-center mb-8 uppercase font-mona-sans">
        what our beloved <br />
        customer say about us
      </h2>
      <div className="relative h-64 mb-8 w-full flex justify-center items-center">
        <div className="flex justify-center items-center absolute inset-0 w-full mx-auto">
          {sliderData.map((customer, index) => {
            const offset =
              (index - currentSlide + sliderData.length) % sliderData.length;
            const isVisible = Math.abs(offset) <= 5;

            if (!isVisible) return null;

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-300 ease-in-out
                  ${offset === 0 ? "w-48 h-48 z-20" : "w-40 h-40 z-10"}
                  ${Math.abs(offset) === 1 ? "-translate-x-1/2" : ""}
                  ${
                    offset === -1
                      ? "left-0"
                      : offset === 0
                      ? "left-[42.6%]"
                      : offset === 1
                      ? "left-[69%]"
                      : "left-[25%]"
                  }
                  ${Math.abs(offset) === 2 ? "opacity-0" : "opacity-100"}
                  drop-shadow-xl rounded-full border-2 border-white
                `}
              >
                <img
                  src={customer.img}
                  alt={`Customer ${customer.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold font-mona-sans">
          {sliderData[currentSlide].name}
        </h3>
        <p className="text-gray-600 mb-2 font-dm-sans font-semibold">
          {sliderData[currentSlide].job}
        </p>
        <div className="flex justify-center mb-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-green-primary text-2xl" />
          ))}
        </div>
        <p className="text-gray-600 mb-2 font-dm-sans max-w-md mx-auto">
          {sliderData[currentSlide].desc}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md border-2 border-green-500"
        aria-label="Previous testimonial"
      >
        <BiChevronLeft size={24} className="text-green-500" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md border-2 border-green-500"
        aria-label="Next testimonial"
      >
        <BiChevronRight size={24} className="text-green-500" />
      </button>
    </div>
  );
}
