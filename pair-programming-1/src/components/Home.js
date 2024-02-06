import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tours from "./Tours";
import Registration from "./Registration";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Tours />
      <Registration />
      <Footer />
    </div>
  );
};

export default Home;