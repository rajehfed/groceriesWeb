/** @format */

import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { ParallaxProvider } from "react-scroll-parallax";
// import motion from 'framer-motion';
import { motion } from "framer-motion";

export default function Adventegies() {
  return (
    <ParallaxProvider>
      <>
        <motion.div
          className="flex flex-col items-start md:flex-row md:justify-evenly gap-8 md:items-center md:w-40 lg:w-[73rem] bg-white rounded-2xl py-3 md:px-0 px-7 relative -bottom-10 shadow-xl md:bottom-10 md:shadow-md"
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        >
          <Advnts desc="Free shipping an all orders." title="FREE DELIVERY">
            <TbTruckDelivery className="w-7 h-7" color="#004b24" />
          </Advnts>
          <Advnts desc="Fresh groceries for you." title="FRESH GROCERIES">
            <HiShoppingBag className="w-7 h-7" color="#004b24" />
          </Advnts>
          <Advnts desc="Back guarantee under 5 days." title="SECURED PAYMENT">
            <RiSecurePaymentLine
              className="w-7 h-7 relative left-[2px]"
              color="#004b24"
            />
          </Advnts>
        </motion.div>
      </>
    </ParallaxProvider>
  );
}

interface AdvntsProps {
  children?: React.JSX.Element;
  title: string;
  desc: string;
}

const Advnts: React.FC<AdvntsProps> = ({ children, title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center p-1 gap-2 md:gap-4">
        <div className="bg-green-p/20 rounded-full p-3">
          <div className="p-1 bg-green-p rounded-full inline-flex justify-center items-center">
            {children}
          </div>
        </div>
        <div>
          <h1 className="font-mona-sans text-1 text-sm md:text-xl font-semibold">
            {title}
          </h1>
          <p className="font-dm-sans font-semibold text-black/60 text-[10px] md:text-xs">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};
