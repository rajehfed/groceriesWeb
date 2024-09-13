/** @format */

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import fruites from "../assets/Peach.png";
import vegetables from "../assets/Carrot.png";
import meat from "../assets/Meat.png";
import chicken from "../assets/checken.png";
import fish from "../assets/fish.png";
import crab from "../assets/Crab.png";
import cheese from "../assets/cheese.png";
import bakery from "../assets/bakery.png";
import sweets from "../assets/sweets.png";
import milk from "../assets/milk.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FruitNamesType {
  type: string;
  image: string;
}

const fruitNames: FruitNamesType[] = [
  {
    image: fruites,
    type: "Fruits",
  },
  {
    image: vegetables,
    type: "Vegetables",
  },
  {
    image: meat,
    type: "Meat",
  },
  {
    image: chicken,
    type: "Chicken",
  },
  {
    image: fish,
    type: "Fish",
  },
  {
    image: crab,
    type: "Crab",
  },
  {
    image: cheese,
    type: "Cheese",
  },
  {
    image: bakery,
    type: "Bakery",
  },
  {
    image: sweets,
    type: "Sweets",
  },
  {
    image: milk,
    type: "Milk",
  },
];

export default function Categories() {
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderWidthRef = useRef<number>(0);
  const slideWidthRef = useRef<number>(0);

  const handelSlide = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (startIndex + 1) % fruitNames.length
        : (startIndex - 1 + fruitNames.length) % fruitNames.length;

    setStartIndex(newIndex);
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderWidthRef.current = sliderElement.offsetWidth;
      // slideWidthRef.current = sliderElement.children[0]?.offsetWidth || 0;
    }

    const handelKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handelSlide("next");
      } else if (event.key === "ArrowLeft") {
        handelSlide("prev");
      }
    };

    window.addEventListener("keydown", handelKeyDown);

    return () => window.removeEventListener("keydown", handelKeyDown);
  });

  return (
    <div className="flex flex-col items-center justify-center w-full mt-16">
      <div className="flex justify-center items-center w-full px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h1 className="uppercase font-mona-sans font-bold text-xl md:text-2xl">
            Browse by Category
          </h1>
          <a
            className="text-[12px] font-dm-sans font-semibold text-[#9df01a] flex items-center justify-start gap-1"
            href="#"
          >
            All Categories
            <FaArrowRight />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-1 ">
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              startIndex == 0 && "opacity-50"
            }`}
            onClick={() => handelSlide("prev")}
            disabled={startIndex == 0}
          >
            <FaArrowLeft color="#004b24" />
          </button>
          <button
            className={`p-2 border-2 border-green-s rounded-full ${
              startIndex >= fruitNames.length - 9 && "opacity-50"
            }`}
            onClick={() => handelSlide("next")}
            disabled={startIndex >= fruitNames.length - 9}
          >
            <FaArrowRight color="#004b24" />
          </button>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden mt-10" ref={sliderRef}>
        <motion.div
          className="flex justify-center items-center w-screen gap-2 p-3"
          initial={false}
          animate={{ x: `-${startIndex * slideWidthRef.current}px` }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
        >
          {fruitNames.map((item, index) => (
            <a
              href="#"
              className="flex flex-col justify-center items-center bg-white rounded-2xl pb-1 duration-500 ease-in-out"
              key={index}
            >
              <div className="w-28 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img src={item.image} alt={item.type} className="w-14" />
              </div>
              <h1 className="font-mona-sans font-semibold ">{item.type}</h1>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
