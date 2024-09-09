/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import fruitBasket from "../assets/fruit-basket.png";
import persone1 from "../assets/persone1.jpg";
import persone2 from "../assets/persone2.jpg";
import persone3 from "../assets/persone3.jpg";
import persone4 from "../assets/persone4.jpg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { MdOutlineAccessTime } from "react-icons/md";

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      style={style}
      className={`inline-flex justify-center items-center backdrop-blur-md bg-white/60 rounded-2xl shadow-xl space-y-2 p-2 w-[10rem] md:w-[18rem] ${className} border border-solid`}
    >
      {children}
    </div>
  );
};

export default function Hero() {
  return (
    <ParallaxProvider>
      <section className="min-h-[120vh] md:h-[50vh] lg:min-h-screen overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-10 py-12 bg-gradient-to-tr from-lime-200 via-lime-300 via-30% to-lime-200 w-full">
        <Parallax translateY={["-20px", "20px"]} className="w-full lg:w-1/2">
          <div className="font-mona-sans space-y-5 text-green-primary">
            <div className="space-y-3">
              <p className="font-medium font-dm-sans text-base sm:text-lg">
                The best Online Grocery
              </p>
              <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider">
                order groceries <br className="hidden sm:block" />
                for delivery or <br className="hidden sm:block" />
                pickup today
              </h1>
              <p className="font-dm-sans font-medium text-base sm:text-lg">
                Whatever you want from local stores, brought right to{" "}
                <br className="hidden sm:block" />
                your door.
              </p>
            </div>
            <button className="flex justify-center items-center gap-4 bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              <span>Start Shopping</span>
              <FaArrowRight />
            </button>
          </div>
        </Parallax>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <Parallax translateY={["-30px", "30px"]} className="w-full h-full">
            <img
              src={fruitBasket}
              alt="basket"
              className="w-full max-w-md lg:max-w-xl xl:max-w-2xl object-contain z-[0] absolute bottom-[-6rem] md:bottom-80 lg:sticky"
            />
          </Parallax>

          <Parallax
            translateY={["-30px", "30px"]}
            className="absolute left-[-0.5rem] -top-[4rem] md:left-[5rem] md:top-[-28rem] lg:left-[-5rem] lg:top-[25rem]"
          >
            <GlassCard className="flex-col">
              <h1 className="font-mona-sans font-semibold text-green-primary uppercase text-[0.5rem] md:text-[1rem]">
                Happy customers
              </h1>
              <div className="flex justify-center items-center">
                <img
                  src={persone1}
                  alt="persone"
                  className="md:w-12 w-8 rounded-full -ml-1.5 border-2"
                />
                <img
                  src={persone2}
                  alt="persone"
                  className="md:w-12 w-8 rounded-full -ml-1.5 border-2"
                />
                <img
                  src={persone3}
                  alt="persone"
                  className="md:w-12 w-8 rounded-full -ml-1.5 border-2"
                />
                <img
                  src={persone4}
                  alt="persone"
                  className="md:w-12 w-8 rounded-full -ml-1.5 border-2"
                />
                <div className="md:w-12 md:h-12 w-8 h-8 rounded-full -ml-1.5 bg-[#9ef11a] font-dm-sans font-semibold flex items-center justify-center text-white text-sm border-2">
                  +20
                </div>
              </div>
              <div className="flex gap-1">
                <TiStarFullOutline
                  color="#FFD700"
                  className="md:w-6 md:h-6 w-3 h-3 relative bottom-[2px]"
                />
                <p className="font-mona-sans text-green-primary font-medium md:text-[1rem] text-[0.5rem]">
                  4.6. 15k Reviews
                </p>
              </div>
            </GlassCard>
          </Parallax>

          <Parallax
            easing={"easeInBack"}
            translateY={["10px", "-10px"]}
            className="absolute left-[10rem] top-[-12rem] sm:left-[7rem] sm:top-[-12rem] md:left-[55rem] md:top-[-45rem] lg:left-[19rem] lg:top-[5rem]"
          >
            <GlassCard className="flex items-center justify-center gap-6 flex-row">
              <div className="inline-flex justify-center items-center">
                <MdOutlineAccessTime
                  color="#004b24"
                  className="w-10 h-10 md:w-20 md:h-20"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-mona-sans text-green-primary font-medium md:text-[1rem] text-[0.5rem]">
                  Deliver in time
                </p>
                <h1 className="font-mona-sans font-bold text-green-primary uppercase text-[0.7rem] md:text-[1.1rem]">
                  30 MINUTES
                </h1>
              </div>
            </GlassCard>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
}
