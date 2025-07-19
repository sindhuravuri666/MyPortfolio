import React from "react";
import Hero from "../Sections/Hero";
import BgEffect from "../Components/BgEffect";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="relative z-10 pt-20 px-6">
      <NavBar />
      <Hero />
      <h1 className="text-4xl mt-12 font-bold">Welcome to home page</h1>
      <Footer />
    </div>
  );
};
export default Home;
