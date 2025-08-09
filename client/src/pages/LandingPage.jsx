import { useState, useEffect } from "react";
import Marquee from "../component/Marquee";
import BackgroundImage from "../assets/hero_background.png";
import Logo from "../assets/Logo.png";
import Mentors from "../assets/mentors.png";
import Line from "../assets/path8.svg";
import { cards } from "../component/MarqueeData";

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [drawerOpen]);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Navbar */}
      <div className="flex justify-center">
        <div className="sm:h-20 sm:w-full sm:px-4 flex items-center justify-between max-w-[1440px] lg:mx-20">
          <img
            src={Logo}
            alt="logo"
            className="sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]"
          />

          {/* Desktop buttons */}
          <div className="hidden gap-2 lg:flex">
            <button
              className="
                sm:px-6 sm:py-2 sm:text-[14px]
                lg:px-5 lg:py-2 lg:text-[14px]
                rounded-lg font-sans font-medium text-black
              "
            >
              Login
            </button>
            <button
              className="
                sm:px-5 sm:py-2 sm:text-[14px]
                lg:px-5 lg:py-2 lg:text-[14px]
                rounded-lg border font-sans font-medium text-white bg-[#163C50]
              "
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger menu */}
          <button
            className="z-20 focus:outline-none sm:text-[50px] md:text-[50px] lg:hidden"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="7" width="16" height="2" rx="1" fill="#163C50" />
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#163C50" />
              <rect x="4" y="15" width="16" height="2" rx="1" fill="#163C50" />
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transition-transform duration-300 lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full gap-6 p-6">
          <button
            className="self-end text-3xl font-bold text-[#163C50] focus:outline-none"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <a href="#" className="text-lg font-semibold text-[#163C50]">
            Find a Mentor
          </a>
          <a href="#" className="text-lg font-semibold text-[#163C50]">
            Become a Mentor
          </a>
          <div className="flex-grow" />
          <div className="flex flex-col gap-2">
            <button
              className="
                sm:px-2 sm:py-2 sm:text-[14px]
                lg:px-2 lg:py-2 lg:text-[14px]
                rounded-lg border font-sans font-medium text-black border-[#163C50]
              "
            >
              Login
            </button>
            <button
              className="
                sm:px-2 sm:py-2 sm:text-[14px]
                lg:px-2 lg:py-2 lg:text-[14px]
                rounded-lg border font-sans font-medium text-white bg-[#163C50]
              "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Hero */}
      <div className="flex flex-col sm:gap-6 sm:mt-10">
        {/* Mentors count */}
        <div className="flex items-center justify-center gap-3">
          <img src={Mentors} alt="mentors" className="sm:h-5 lg:h-7" />
          <div className="font-sans font-medium sm:text-[12px] lg:text-[16px]">
            500+ Mentors
          </div>
        </div>

        {/* Title */}
        <div className="sm:my-3 lg:my-1">
          <div className="flex items-center justify-center space-x-2">
            <p className="font-dessaufont font-semibold sm:text-[36px] lg:text-[64px]">
              Meet Your
            </p>
            <div className="relative inline-block">
              <img
                src={Line}
                alt="Decorative line"
                className="absolute top-1 left-1/2 -translate-x-1/2 z-10"
              />
              <p className="relative z-10 font-dessaufont font-semibold sm:text-[36px] lg:text-[64px]">
                Mentor
              </p>
            </div>
          </div>
          <div className="mx-auto text-center font-sans font-medium text-gray-600 sm:w-[300px] sm:text-[12px] lg:w-[522px] lg:text-[20px]">
            Talk to real people with real experience through 1:1 calls, chats or
            webinars.
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center sm:gap-2 lg:gap-3">
          <button
            className="
              sm:px-5 sm:py-2 sm:text-[14px] sm:rounded-lg
              lg:px-8 lg:py-4 lg:text-[16px] lg:rounded-xl
              border font-sans font-medium text-white bg-[#163C50]
            "
          >
            Find a Mentor
          </button>
          <button
            className="
              sm:px-5 sm:py-2 sm:text-[14px] sm:rounded-lg
              lg:px-8 lg:py-4 lg:text-[16px] lg:rounded-xl
              border font-sans font-medium text-white bg-[#FC8019]
            "
          >
            Become a Mentor
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center text-center font-sans sm:gap-12 sm:text-[14px] lg:gap-16 lg:text-[20px]">
          <div>
            <p className="font-semibold">2,500+</p>
            <p className="font-medium text-gray-600 lg:text-[16px]">Courses</p>
          </div>
          <div>
            <p className="font-semibold">5,000+</p>
            <p className="font-medium text-gray-600 lg:text-[16px]">Meetings</p>
          </div>
        </div>

        {/* Subheading */}
        <div className="hidden text-center text-[28px] font-sans font-semibold lg:inline">
          You Don’t Need{" "}
          <span className="text-[#FC8019]">Another Course</span>. You Need a{" "}
          <span className="text-[#FC8019]">Real Mentor</span>.
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full mt-7 overflow-hidden">
        <div className="absolute top-0 left-0 h-full sm:w-4 lg:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full sm:w-4 lg:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <Marquee cards={cards} />
      </div>
    </div>
  );
};

export default LandingPage;
