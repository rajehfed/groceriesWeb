/** @format */

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";
import Pear from "../assets/Pear🍐.png";
import banana from "../assets/Banana🍌.png";
import balckberry from "../assets/Blackberry.png";
import blueBerry from "../assets/Blueberry.png";
import { LuShoppingBag } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

type CardProps = {
  image: string;
  name: string;
  price: number;
  category: string;
};

const cardInfo: CardProps[] = [
  { image: Pear, name: "Pear", price: 13, category: "fruit" },
  { image: banana, name: "Banana", price: 23, category: "fruit" },
  { image: balckberry, name: "Balckberry", price: 33, category: "fruit" },
  { image: blueBerry, name: "BlueBerry", price: 53, category: "fruit" },
  { image: balckberry, name: "Balckberry", price: 33, category: "fruit" },
];

export const CardsFruit: React.FC<CardProps> = ({
  image,
  name,
  price,
  category,
}) => {
  const [isClicked, setIsCliked] = useState(false);

  const handelClick = () => {
    setIsCliked(!isClicked);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 cursor-grab w-full max-w-xs mx-auto"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 cursor-grab">
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full p-4">
          <div className="flex justify-between items-center w-full">
            <div className="space-y-1">
              <h1 className="font-bold font-dm-sans text-lg sm:text-xl md:text-2xl">
                {name}
              </h1>
              <p className="font-medium font-dm-sans text-xs sm:text-sm md:text-base text-black/60">
                {category}
              </p>
            </div>
            <h1 className="font-bold font-dm-sans text-lg sm:text-xl md:text-2xl">
              ${price}/lb
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
            <button className="flex items-center justify-center py-2 px-4 border-2 border-green-s rounded-full text-xs sm:text-sm font-semibold font-dm-sans text-[#004b24] w-full sm:w-auto">
              <LuShoppingBag color="#004b24" className="w-4 h-4 mr-2" />
              Add To Cart
            </button>
            <button
              className={`flex items-center justify-center p-2 border-2 rounded-full w-full sm:w-auto ${
                isClicked ? "border-[#e5122a]" : "border-green-s"
              }`}
              onClick={handelClick}
            >
              {isClicked ? (
                <FaHeart color="#e5122a" className="size-5 mr-2 md:mr-0" />
              ) : (
                <FaRegHeart color="#004b24" className="size-5 mr-2 md:mr-0" />
              )}
              <span className="text-xs md:text-[0px] sm:text-sm font-dm-sans text-green-primary font-semibold">
                Add to favorite
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Cards() {
  const [width, setWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardInfo.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isAtStart: boolean = currentIndex === 0;
  const isAtEnd: boolean = currentIndex === cardInfo.length - 1;

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-16">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <h1 className="uppercase font-mona-sans font-bold text-xl sm:text-2xl md:text-3xl">
            Fresh Deals
          </h1>
          <a
            className="text-xs sm:text-sm font-dm-sans font-semibold text-[#9df01a] flex items-center justify-start gap-1"
            href="#"
          >
            View More
            <FaArrowRight />
          </a>
        </div>
        <div className="flex items-center justify-center gap-1">
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              isAtStart
                ? "text-gray-300 cursor-not-allowed border-green-s/60"
                : ""
            }`}
            disabled={isAtStart}
            onClick={prevSlide}
          >
            <FaArrowLeft color={isAtStart ? "#004b2477" : "#004b24"} />
          </button>
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              isAtEnd
                ? "text-gray-300 cursor-not-allowed border-green-s/60"
                : ""
            }`}
            disabled={isAtEnd}
            onClick={nextSlide}
          >
            <FaArrowRight color={isAtEnd ? "#004b2477" : "#004b24"} />
          </button>
        </div>
      </div>
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <motion.div className="w-full overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={{
              x: -currentIndex * (carouselRef.current?.offsetWidth || 0),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cardInfo.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-2"
              >
                <CardsFruit {...item} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
