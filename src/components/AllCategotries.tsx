/** @format */

import React, { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiOrangeSliceBold } from "react-icons/pi";
import { TbCarrot } from "react-icons/tb";
import { LuBeef, LuCroissant, LuMilk } from "react-icons/lu";
import { LiaEggSolid } from "react-icons/lia";
import { categories} from "../data";
import { CardsFruit } from "./Cards";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface CategoryIconMap {
  [key: string]: IconType;
}

const categoryIcons: CategoryIconMap = {
  Fruits: PiOrangeSliceBold,
  Vegetables: TbCarrot,
  Meats: LuBeef,
  Bakery: LuCroissant,
  Eggs: LiaEggSolid,
  Dairy: LuMilk,
};

interface CategoryButton {
  id: string;
  label: string;
}

const cats: CategoryButton[] = [
  { id: "All", label: "All" },
  { id: "Fruits", label: "Fruits" },
  { id: "Vegetables", label: "Vegetables" },
  { id: "Meats", label: "Meats" },
  { id: "Bakery", label: "Bakery" },
  { id: "Eggs", label: "Eggs" },
  { id: "Dairy", label: "Dairy" },
];

interface CategoryButtonProps {
  category: CategoryButton;
  isActive: boolean;
  onClick: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = React.memo(
  ({ category, isActive, onClick }) => {
    const Icon = categoryIcons[category.label];

    return (
      <motion.button
        onClick={() => onClick(category.label)}
        className={`filter ${
          isActive ? "active" : ""
        } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
      >
        {Icon && (
          <Icon className={category.label === "Fruits" ? "rotate-45" : ""} />
        )}
        {isActive && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 -z-10 bg-green-a text-black/70"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <p>{category.label}</p>
      </motion.button>
    );
  }
);

interface ButtonsProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Buttons: React.FC<ButtonsProps> = React.memo(
  ({ onCategoryChange, selectedCategory }) => {
    return (
      <div className="flex items-center justify-center gap-10 my-10">
        {cats.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={category.label === selectedCategory}
            onClick={onCategoryChange}
          />
        ))}
      </div>
    );
  }
);

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const AllCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleFilter = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const randomizedItems = useMemo(() => {
    const allItems = categories.flatMap((category) =>
      category.items.map((item) => ({ ...item, category: category.category }))
    );
    return shuffleArray(allItems);
  }, []);

  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? randomizedItems
      : randomizedItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, randomizedItems]);

  const handelShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mt-20 w-full p-9">
      <h1 className="uppercase font-mona-sans text-center font-semibold text-3xl">
        Enjoy our healthy <br />& Fresh grocery
      </h1>
      <Buttons
        onCategoryChange={handleFilter}
        selectedCategory={selectedCategory}
      />
      <motion.div
        className="grid grid-cols-4 gap-4 place-content-center w-full"
        layout
      >
        <AnimatePresence>
          {showMore
            ? filteredItems.map((item, index) => (
                <CardsFruit
                  key={`${item.category}-${item.name}-${index}`}
                  category={item.category}
                  image={item.img}
                  name={item.name}
                  price={item.price}
                />
              ))
            : filteredItems
                .slice(0, 8)
                .map((item, index) => (
                  <CardsFruit
                    key={`${item.category}-${item.name}-${index}`}
                    category={item.category}
                    image={item.img}
                    name={item.name}
                    price={item.price}
                  />
                ))}
        </AnimatePresence>
      </motion.div>
      {!showMore ? (
        <button
          className="flex justify-center items-center gap-2 px-4 py-4 rounded-full bg-green-a hover:gap-4 duration-300 ease-in-out mt-7 mx-auto"
          onClick={handelShowMore}
        >
          <span className="font-dm-sans font-semibold text-green-primary">
            View All
          </span>
          <span>
            <FaArrowRight color="#004b24" className="w-6 h-4" />
          </span>
        </button>
      ) : (
        <button
          className="flex justify-center items-center gap-2 px-4 py-4 rounded-full bg-green-a hover:gap-4 duration-300 ease-in-out mt-7 mx-auto"
          onClick={handelShowMore}
        >
          <span className="font-dm-sans font-semibold text-green-primary">
            View Less
          </span>
          <span>
            <FaArrowRight color="#004b24" className="w-6 h-4" />
          </span>
        </button>
      )}
    </div>
  );
};

export default AllCategories;
