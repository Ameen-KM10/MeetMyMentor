import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [drawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center">
        <div className="sm:h-20 sm:w-full sm:px-4 flex items-center justify-between max-w-[1440px] lg:mx-20">
          <img
            src={Logo}
            alt="logo"
            className="sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]"
          />

          {/* Centered Menus */}
          <div className="hidden lg:flex flex-1 justify-center gap-6">
            {scrolled && (
              <>
                <button
                  className="sm:px-6 sm:py-2 sm:text-[14px] lg:px-5 lg:py-2 lg:text-[14px] rounded-lg font-sans font-medium text-black"
                >
                  Find a Mentor
                </button>
                <button
                  className="sm:px-6 sm:py-2 sm:text-[14px] lg:px-5 lg:py-2 lg:text-[14px] rounded-lg font-sans font-medium text-black"
                >
                  Become a Mentor
                </button>
              </>
            )}
          </div>

          {/* Login/Sign Up always visible */}
          <div className="hidden  gap-2 lg:flex">
            <button
              className="sm:px-6 sm:py-2 sm:text-[14px] lg:px-5 lg:py-2 lg:text-[14px] rounded-lg font-sans font-medium text-black"
            >
              Login
            </button>
            <button
              className="sm:px-5 sm:py-2 sm:text-[14px] lg:px-5 lg:py-2 lg:text-[14px] rounded-lg border font-sans font-medium text-white bg-[#163C50]"
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
              className="sm:px-2 sm:py-2 sm:text-[14px] lg:px-2 lg:py-2 lg:text-[14px] rounded-lg border font-sans font-medium text-black border-[#163C50]"
            >
              Login
            </button>
            <button
              className="sm:px-2 sm:py-2 sm:text-[14px] lg:px-2 lg:py-2 lg:text-[14px] rounded-lg border font-sans font-medium text-white bg-[#163C50]"
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
    </nav>
  );
};

export default NavBar;
