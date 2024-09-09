/** @format */

// import React from 'react'

import { IoMenu } from "react-icons/io5";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={`sticky w-full inset-0 flex justify-between items-center backdrop-blur font-dm-sans px-6 md:text-sm z-50 bg-white/10 border-b-2 border-white/20`}>
			<img src={Logo} alt="logo" className="w-24"/>
      <span className="block sm:hidden">
        <IoMenu className="w-5 h-5" />
			</span>
			<nav className="hidden md:inline-flex justify-center items-center gap-12 font-semibold text-black/60">
				<a href="#" className="hover:text-black transition-all duration-[0.3s]">Home</a>
				<a href="#" className="hover:text-black transition-all duration-[0.3s]">Categories</a>
				<a href="#" className="hover:text-black transition-all duration-[0.3s]">Deals</a>
				<a href="#" className="hover:text-black transition-all duration-[0.3s]">What's New</a>
				<a href="#" className="hover:text-black transition-all duration-[0.3s]">Delevery</a>
			</nav>
    </header>
  );
}
