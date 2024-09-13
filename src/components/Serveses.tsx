/** @format */

// import React from 'react'
import GoodLock from "../assets/goodLook.svg";
import star from "../assets/four-pointed-star.svg";
import redBerries from "../assets/redBerries.png";
import redApple from "../assets/redApple.png";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

export default function Serveses() {
  const servises = [
    "Best Services than others.",
    "100% Organic & Natural Products.",
    "100% Returns & Refunds.",
    "User-Friendly Mobile App.",
  ];

  return (
    <div className="mt-20 grid grid-cols-1 place-content-center md:grid-cols-2 gap-4 mb-32">
      <div className="relative top-[27rem] md:top-[0]">
        <img
          src={GoodLock}
          alt="goodLook"
          className="h-[19rem] md:h-[30rem] left-3 object-cover absolute top-28"
        />
        <img
          src={star}
          alt="star"
          className="md:w-11 w-8 absolute left-16 top-[7rem] md:top-[15rem]"
        />
        <img
          src={star}
          alt="star"
          className="md:w-20 w-14 absolute md:left-64 left-72 top-44 md:top-[1rem] z-10"
        />
        <img
          src={star}
          alt="star"
          className="w-11 absolute md:right-16 right-72 bottom-[-29rem] md:bottom-[10rem]"
        />
        <motion.div
          className="p-4 bg-white/50 border-2 border-white/40 drop-shadow-sm backdrop-blur absolute top-56 left-[1rem] md:bottom-[15rem] md:left-[28rem] size-20 md:size-24 rounded-2xl inline-flex justify-center items-center"
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -10, 0], x: [0, -7, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img src={redBerries} alt="Berries" className="w-16" />
        </motion.div>
        <motion.div
          className="p-4 bg-white/50 border-2 border-white/40 drop-shadow-sm backdrop-blur absolute -bottom-[29rem] left-64 md:bottom-[3rem] md:left-[2rem] size-20 md:size-24 rounded-2xl inline-flex justify-center items-center"
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -10, 0], x: [0, -7, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img src={redApple} alt="apple" className="w-16" />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-3 relative bottom-20 md:bottom-4 md:text-left text-center">
        <h1 className="font-mona-sans text-3xl md:text-4xl uppercase font-semibold text-center">
          Best quality <br />
          healthy & fresh <br />
          grocery
        </h1>
        <p className="font-dm-sans text-black/50 font-semibold text-lg md:text-xl">
          We prioritize quality in each of our grocery. Below are the advantages{" "}
          <br />
          of our products.
        </p>
        <div className="flex flex-col justify-center items-start gap-4 mt-3 px-4">
          {servises.map((text, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <span className="p-2 bg-green-p/10 rounded-full hover:bg-green-p/20 duration-700 ease-in-out">
                <span className="inline-flex items-center justify-center p-2 bg-green-p rounded-full">
                  <GiCheckMark color="#004b24" className="w-6 h-6" />
                </span>
              </span>
              <p className="font-dm-sans text-xl md:text-2xl text-black/70 font-semibold">
                {text}
              </p>
            </div>
          ))}
        </div>
        <button className="flex justify-center items-center gap-2 px-4 py-4 rounded-full bg-green-a hover:gap-4 duration-300 ease-in-out mt-7">
          <span className="font-dm-sans font-semibold text-green-primary">
            Order Now !
          </span>
          <span>
            <FaArrowRight color="#004b24" className="w-6 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
