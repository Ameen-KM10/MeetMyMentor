import { useState, useEffect } from "react";
import Marquee from "../component/Marquee";
import BackgroundImage from "../assets/hero_background.png";
import Logo from "../assets/Logo.png";
import Mentors from "../assets/mentors.png";
import Line from "../assets/path8.svg";
import { cards } from "../component/MarqueeData";

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex justify-center">
          <div
            className="
        sm:h-20 sm:w-full sm:px-4 
        flex items-center justify-between max-w-[1440px] lg:mx-20"
          >
            <img
              className="
          sm:w-[40px] sm:h-[40px]
          lg:w-[50px] lg:h-[50px]
          "
              src={Logo}
              alt="logo"
            />
            <div className="flex  gap-2 sm:hidden lg:inline">
              <button
                className="
            sm:px-6 sm:py-2 sm:rounded-lg sm:text-[14px]
            font-sans font-medium text-black"
              >
                Login
              </button>
              <button
                className="
            sm:px-5 sm:py-2 sm:rounded-lg sm:text-[14px]
            font-sans border font-medium text-white bg-[#163C50]"
              >
                Sign Up
              </button>
            </div>

            {/* Hamburger menu for sm and md screens only */}
            <button
              className="sm:text-[50px] md:text-[50px] lg:hidden focus:outline-none z-20"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="7" width="16" height="2" rx="1" fill="#163C50" />
                <rect
                  x="4"
                  y="11"
                  width="16"
                  height="2"
                  rx="1"
                  fill="#163C50"
                />
                <rect
                  x="4"
                  y="15"
                  width="16"
                  height="2"
                  rx="1"
                  fill="#163C50"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col p-6 gap-6 h-full">
            <button
              className="self-end text-3xl font-bold text-[#163C50] focus:outline-none"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {/* Drawer content */}
            <a href="#" className="text-lg font-semibold text-[#163C50]">
              Find a Mentor
            </a>
            <a href="#" className="text-lg font-semibold text-[#163C50]">
              Become a Mentor
            </a>
            {/* Spacer to push Contact to bottom */}
            <div className="flex-grow" />
            <div className="flex flex-col gap-2">
              <button
                className="
            sm:px-2 sm:py-2 sm:rounded-lg sm:text-[14px]
            font-sans border font-medium text-black border-[#163C50]"
              >
                Login
              </button>
              <button
                className="
            sm:px-2 sm:py-2 sm:rounded-lg sm:text-[14px]
            font-sans border font-medium text-white bg-[#163C50]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Overlay to block interaction when drawer is open */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          className="
        sm:gap-6 sm:mt-10 
        flex flex-col "
        >
          <div className="flex gap-3 justify-center items-center">
            <img
              className="
            sm:h-5 
            lg:h-7"
              src={Mentors}
            ></img>
            <div
              className="
            sm:text-[12px] 
            lg:text-[16px] 
            font-sans font-medium "
            >
              500+ Mentors
            </div>
          </div>

          <div
            className="
          sm:my-3 
          lg:my-1"
          >
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-2">
                <p
                  className="
                sm:text-[36px] 
                lg:text-[64px] 
                font-dessaufont font-semibold "
                >
                  Meet Your
                </p>
                <div className="relative inline-block">
                  <img
                    className="absolute top-1 left-1/2 -translate-x-1/2 z-10"
                    src={Line}
                    alt="Decorative line"
                  />
                  <p
                    className="
                  sm:text-[36px] 
                  lg:text-[64px] 
                  relative z-10 font-dessaufont font-semibold"
                  >
                    Mentor
                  </p>
                </div>
              </div>
            </div>
            <div
              className="
            sm:w-[300px] sm:text-[12px] 
            lg:w-[522px] lg:text-[20px] 
            mx-auto font-sans font-medium text-center text-gray-600"
            >
              Talk to real people with real experience through 1:1 calls, chats
              or webinars.
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <button
              className="
            sm:px-5 sm:py-2 sm:rounded-lg sm:text-[14px]
            lg:px-8 lg:py-4 lg:rounded-xl lg:text-[16px] 
            font-sans border font-medium text-white bg-[#163C50]"
            >
              Find a Mentor
            </button>

            <button
              className="
            sm:px-5 sm:py-2 sm:rounded-lg sm:text-[14px]
            lg:px-8 lg:py-4 lg:rounded-xl lg:text-[16px] 
            font-sans border font-medium text-white bg-[#FC8019]"
            >
              Become a Mentor
            </button>
          </div>

          <div
            className="
          sm:text-[14px] sm:gap-12 
          lg:text-[20px] lg:gap-16 
          text-center font-sans flex justify-center "
          >
            <div>
              <p className="font-semibold">2,500+</p>
              <p
                className="
              lg:text-[16px] 
              font-medium text-gray-600 "
              >
                Courses
              </p>
            </div>
            <div>
              <p className="font-semibold">5,000+</p>
              <p
                className="
              lg:text-[16px] 
              font-medium text-gray-600 "
              >
                Meetings
              </p>
            </div>
          </div>
          <div
            className="
        sm:hidden
        lg:inline
        flex text-center text-[28px] font-sans font-semibold
        "
          >
            You Don’t Need{" "}
            <span className="text-[#FC8019]">Another Course</span>. You Need a{" "}
            <span className="text-[#FC8019]">Real Mentor</span>.
          </div>
        </div>

        <div className="w-full mt-7 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full sm:w-4 lg:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full sm:w-4 lg:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <Marquee cards={cards} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
