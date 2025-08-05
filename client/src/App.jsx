// App.js
import React from "react";
import Marquee from "./component/Marquee";
import BackgroundImage from "./assets/hero_background.png";
import LandingPage from "./pages/LandingPage";
// import Marquee from './components/Marquee';

function App() {
  const cards = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 4", description: "Description 4" },
    { title: "Card 5", description: "Description 5" },
    { title: "Card 6", description: "Description 6" },
    { title: "Card 7", description: "Description 7" },
    { title: "Card 8", description: "Description 8" },
    { title: "Card 9", description: "Description 9" },
    { title: "Card 10", description: "Description 10" },
  ];

  return (
    <>
      <LandingPage />
      <div className="w-full overflow-hidden relative">
        {/* Left Fade */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee content */}
        <Marquee cards={cards} />
      </div>
      <div className="w-full overflow-hidden">
            <Marquee cards={cards} />
            </div>
    </>
  );
}

export default App;
