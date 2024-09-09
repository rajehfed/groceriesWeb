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
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative">
        <img
          src={GoodLock}
          alt="goodLook"
          className="h-[40rem] md:h-[30rem] object-cover absolute top-28"
        />
        <img
          src={star}
          alt="star"
          className="w-11 absolute left-16 top-[23rem] md:top-[15rem]"
        />
        <img
          src={star}
          alt="star"
          className="w-20 absolute left-64 top-28 md:top-[1rem] -z-10"
        />
        <img
          src={star}
          alt="star"
          className="w-11 absolute right-16 bottom-60 md:bottom-[10rem]"
        />
        <motion.div
          className="p-4 bg-white/50 border-2 border-white/40 drop-shadow-sm backdrop-blur absolute bottom-[27rem] left-[28rem] md:bottom-[15rem] md:left-[28rem] w-25 h-25 rounded-2xl inline-flex justify-center items-center"
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
          className="p-4 bg-white/50 border-2 border-white/40 drop-shadow-sm backdrop-blur absolute bottom-72 -left-7 md:bottom-[3rem] md:left-[2rem] w-25 h-25 rounded-2xl inline-flex justify-center items-center"
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
      <div className="flex flex-col justify-center items-start gap-3 relative bottom-20 md:bottom-4">
        <h1 className="font-mona-sans text-3xl md:text-4xl uppercase font-semibold">
          Best quality <br />
          healthy & fresh <br />
          grocery
        </h1>
        <p className="font-dm-sans text-black/50 font-semibold text-lg md:text-xl">
          We prioritize quality in each of our grocery. Below are the advantages{" "}
          <br />
          of our products.
        </p>
        <div className="flex flex-col justify-center items-start gap-4 mt-3">
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
