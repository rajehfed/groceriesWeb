/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

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
        className="flex flex-col items-center justify-center space-y-4 cursor-grab w-64"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-[50%] cursor-grab">
          <img
            src={image}
            alt={name}
            className="object-contain w-60 h-[100%]"
          />
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 place-content-center gap-x-32 w-full">
            <div className="space-y-2">
              <h1 className="font-bold font-dm-sans text-2xl text-nowrap">
                {name}
              </h1>
              <p className="font-medium font-dm-sans text-black/60">
                {category}
              </p>
            </div>
            <h1 className="font-bold font-dm-sans text-2xl">${price}/lb </h1>
          </div>
          <div className="grid grid-cols-2 w-full mt-4">
            <button className="flex items-center justify-between px-4 py-2 border-2 border-green-s rounded-full text-sm font-semibold font-dm-sans text-[#004b24] w-36">
              <LuShoppingBag color="#004b24" className="w-5 h-5" />
              Add To Cart
            </button>
            <div className="w-full flex justify-end items-center">
              <button
                className={`p-2 border-2 rounded-full place-items-center ${
                  isClicked ? " border-[#e5122a]" : " border-green-s"
                }`}
              >
                {isClicked ? (
                  <FaHeart
                    color="#e5122a"
                    className="w-5 h-5"
                    onClick={handelClick}
                  />
                ) : (
                  <FaRegHeart
                    onClick={handelClick}
                    color={"#004b24"}
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>
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
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardInfo.length - 3)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isAtStart: boolean = currentIndex === 0;
  const isAtEnd: boolean = currentIndex >= cardInfo.length - 3;

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden mt-20">
      <div className="flex justify-between items-center w-full px-16">
        <div className="flex justify-center items-center gap-2">
          <h1 className="uppercase font-mona-sans font-bold text-2xl">
            Fresh Deals
          </h1>
          <a
            className="text-[12px] font-dm-sans font-semibold text-[#9df01a] flex items-center justify-start gap-1"
            href="#"
          >
            View More
            <FaArrowRight />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-1 ">
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              isAtStart && " text-gray-300 cursor-not-allowed border-green-s/60"
            }`}
            disabled={isAtStart}
            onClick={prevSlide}
          >
            <FaArrowLeft color={isAtStart ? "#004b2477" : "#004b24"} />
          </button>
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              isAtEnd && " text-gray-300 cursor-not-allowed border-green-s/60"
            }`}
            disabled={isAtEnd}
            onClick={nextSlide}
          >
            <FaArrowRight color={isAtEnd ? "#004b2477" : "#004b24"} />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <motion.div className="w-[90%] overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 10, left: -width }}
            animate={{
              x: (-currentIndex * (carouselRef.current?.offsetWidth || 0)) / 3,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cardInfo.map((item, index) => (
              <div key={index} className="min-w-[33.33%] px-2">
                <CardsFruit {...item} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
