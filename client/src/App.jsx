import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import NicheFilter from "./sections/NicheFilter";
import Stats from "./sections/Stats";
import Stack from "./sections/FeatureStack";
import FeaturesSection from "./sections/FeaturesSection";
import MentorTestimonials from "./sections/MentorTestimonials";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <NicheFilter />
      <Stats />
      <Stack />
      <FeaturesSection />
      <MentorTestimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
