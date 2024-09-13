/** @format */

// import React from 'react';

import Adventegies from "./components/Adventegies";
import AllCategotries from "./components/AllCategotries";
import BestService from "./components/BestService";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MerketingSection from "./components/MerketingSection";
import Serveses from "./components/Serveses";

export default function HomePage() {
  return (
    <div className="relative inline-flex justify-center items-center flex-col w-full">
			<Header />
      <Hero />
      <Adventegies />
      <MerketingSection />
      <Categories />
      <Cards />
      <Serveses />
      <AllCategotries />
      <BestService />
      <FeedBack />
      <Footer />
    </div>
  );
}
