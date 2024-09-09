/** @format */

import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import mango from "../assets/mango.png";
import start from "../assets/four-pointed-star.svg";

// import React from 'react'
import { motion } from "framer-motion";

export default function MerketingSection() {
  return (
    <main className="flex flex-col justify-center items-center mt-10 md:mt-0 md:grid md:grid-cols-2 place-items-center md:justify-around h-screen w-full">
      <div className="space-y-4">
        <h1 className="uppercase text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wider font-mona-sans text-black">
          DOWNLOAD OUR <br />
          ONLINE GROCERY <br />
          MOBILE APP
        </h1>
        <div className="flex justify-start gap-4 md:gap-8 items-center">
          <div>
            <h1 className="font-mona-sans font-semibold text-sm md:text-lg">
              05 MILLION+
            </h1>
            <p className="font-dm-sans font-semibold text-black/60 md:text-xs text-[7px]">
              World Action Users.
            </p>
          </div>
          <div>
            <h1 className="font-mona-sans font-semibold text-sm md:text-lg">
              +1250
            </h1>
            <p className="font-dm-sans font-semibold text-black/60 md:text-xs text-[7px]">
              Categories
            </p>
          </div>
          <div>
            <h1 className="font-mona-sans font-semibold text-sm md:text-lg">
              +7000
            </h1>
            <p className="font-dm-sans font-semibold text-black/60 md:text-xs text-[7px]">
              Product
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-5, 0, -5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="relative md:bottom-0 -bottom-32 right-10"
      >
        {/* Added mt-10 for margin */}
        <Cards
          system={"for android"}
          nameApp={"GOOGLE PLAY"}
          className="absolute md:-left-8 left-0 z-10 -rotate-12 md:w-auto"
        >
          <IoLogoGooglePlaystore
            className="md:w-10 md:h-10 w-5 h-5"
            color="white"
          />
        </Cards>
        <Cards
          system={"for ios"}
          nameApp={"APP STORE"}
          className="absolute md:left-32 left-24 rotate-[30deg] z-20"
        >
          <FaApple className="md:w-10 md:h-10 w-6 h-6" color="white" />
        </Cards>
        <img
          src={mango}
          alt="mango"
          className="w-40 relative z-20 md:top-40 md:left-8 top-28"
        />
        <img
          src={start}
          alt="line"
          className="w-12 relative md:bottom-60 bottom-52 rotate-6 md:left-44 left-36 z-30"
        />
        <img
          src={start}
          alt="star"
          className="w-10 relative md:bottom-10 bottom-9 rotate-1 md:-left-20 -left-10 z-30"
        />
        <img
          src={start}
          alt="star"
          className="w-6 relative md:-bottom-10 -bottom-2 rotate-1 md:left-48 left-44 z-30"
        />
      </motion.div>
    </main>
  );
}

interface cardProps {
  children: JSX.Element;
  system: string;
  nameApp: string;
  className: string;
}

const Cards: React.FC<cardProps> = ({
  children,
  system,
  nameApp,
  className,
}) => {
  return (
    <>
      <div
        className={`p-4 bg-green-p rounded-3xl border-white/60 border-[2px] flex flex-col justify-center items-start gap-2 shadow-md ${className} md:w-auto w-40 shadow-lg`}
      >
        <div className="md:p-3 p-1 bg-gradient-to-bl from-[#b5f14f] to-[#004b24] md:rounded-2xl rounded-lg border-2 border-[#b5f14f]">
          {children}
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-mona-sans md:text-xl text-sm text-nowrap uppercase text-green-primary font-semibold">
            {system}
          </h1>
          <p className="font-dm-sans text-[7px] md:text-[10px] font-semibold text-green-primary">
            {nameApp}
          </p>
        </div>
        <button className="w-full text-sm md:text-lg font-dm-sans font-semibold text-nowrap p-2 bg-white rounded-full px-4 text-green-primary">
          Download App
        </button>
      </div>
    </>
  );
};
