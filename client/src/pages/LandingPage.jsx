import React from "react";
import Marquee from "../component/Marquee";
import BackgroundImage from "../assets/hero_background.png";
import Logo from "../assets/Logo.png";
import Mentors from "../assets/mentors.png";
import Line from "../assets/path8.svg";

const LandingPage = () => {
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
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* 
        This is the Header Part or the Nav Bar
        */}
        <div className="sm:h-20 sm:w-full sm:px-4 flex items-center justify-between">
          <img className="sm:w-[50px] sm:h-[50px]" src={Logo} alt="logo"></img>
          <div className="sm:text-[50px]">&#9776;</div>
        </div>

        {/* 
        Mentor count element
        */}
        <div className="flex flex-col sm:gap-6 sm:mt-10">
          <div className="flex gap-3 justify-center items-center">
            <img className="sm:h-5" src={Mentors}></img>
            <div className="font-sans font-medium text-[12px]">
              500+ Mentors
            </div>
          </div>

          {/* 
        Hero title text "Meet Your Mentors"
        */}
          <div className="my-3">
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-2">
                <p className="font-sans font-semibold sm:text-[36px] lg:text-[64px] " >
                  Meet Your
                </p>
                <div className="relative inline-block">
                  <img
                    className="absolute top-1 left-1/2 -translate-x-1/2 z-10"
                    src={Line}
                    alt="Decorative line"
                  />
                  <p className="font-sans font-semibold sm:text-[36px] lg:text-[64px] relative z-10">
                    Mentor
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-[300px] sm:text-[12px] lg:w-[522px] lg:text-[20px] mx-auto font-sans font-medium text-center text-gray-600">
              Talk to real people with real experience through 1:1 calls, chats
              or webinars.
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <button className="sm:px-5 sm:py-2 sm:rounded-lg sm:text-[14px] sm:font-medium font-sans border bg-white">
              Find a Mentor
            </button>
            <button className="sm:px-5 sm:py-2 sm:rounded-lg sm:text-[14px] sm:font-medium font-sans border bg-[#FC8019] text-white">
              Become a Mentor
            </button>
          </div>

          <div className="flex sm:text-[14px] sm:gap-12 text-center font-sans justify-center">
            <div>
              <p className="font-semibold">2,500+</p>
              <p className="font-medium text-gray-600">Courses</p>
            </div>
            <div>
              <p className="font-semibold">5,000+</p>
              <p className="font-medium text-gray-600">Meetings</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-7 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <Marquee cards={cards} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
