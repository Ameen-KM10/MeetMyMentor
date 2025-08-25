import Squares from "../component/Squares";
import { memo } from "react";
import Marquee from "../component/Marquee";
import Mentors from "../assets/mentors.png";
import Line from "../assets/path8.svg";
import { cards } from "../component/MarqueeData";

// Memoize the Line SVG to prevent unnecessary re-renders
const LineSVG = memo(() => (
  <img
    src={Line}
    alt=""
    className="absolute left-[-5px] md:left-[-5px] lg:left-[-5px] top-[35px] lg:top-[35px] md:top-[35px] w-[25px] sm:w-[30px] md:w-[35px] lg:w-[40px] h-auto z-10"
    loading="lazy"
  />
));

LineSVG.displayName = "LineSVG";

const GridsBackground = memo(() => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden will-change-scroll">
      {/* Background layer (interactive) */}
      <div className="absolute inset-0 z-10">
        <Squares
          speed={0.2}
          squareSize={35}
          direction="down"
          borderColor="#000000"
          hoverFillColor="#000"
          className='opacity-60'
        />
        {/* Circular fade overlay for Squares only */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 11,
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 60%, #fff 100%)",
          }}
        />
        {/* Fade overlay (not interactive) - optimized with transform3d for GPU acceleration */}
        <div
          className="absolute left-0 right-0 bottom-0 lg:pointer-events-none"
          style={{
            height: "30vh",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
            transform: "translate3d(0, 0, 0)", // Force GPU acceleration
          }}
        />
      </div>
      {/* Content layer (pointer-events-none, except for interactive elements) */}
      <div className="relative h-screen z-10 pointer-events-none flex flex-col justify-center will-change-transform">
        {/* Hero */}
        <div className="flex flex-col sm:gap-6">
          {/* Mentors count */}
          <div className="flex items-center justify-center gap-3">
            <img
              src={Mentors}
              alt="mentors"
              className="sm:h-5 lg:h-7"
              loading="eager"
              decoding="async"
            />
            <div className="font-sans font-medium sm:text-[12px] lg:text-[16px]">
              500+ Mentors
            </div>
          </div>

          {/* Title */}
          {/* Title */}
          <div className="sm:my-3 lg:my-1">
            <div className="flex items-center justify-center space-x-2">
              <p className="font-dessaufont font-semibold sm:text-[36px] lg:text-[64px]">
                Meet Your
              </p>
              <div className="relative inline-block">
                <p className="relative z-10 font-dessaufont font-semibold sm:text-[36px] lg:text-[64px]">
                  Mentor
                </p>
                <img
                  src={Line}
                  alt="Decorative line"
                  className="absolute top-1 left-1/2 -translate-x-1/2 z-10"
                />
              </div>
            </div>
            <div className="mx-auto text-center font-sans font-medium text-gray-600 sm:w-[300px] sm:text-[12px] lg:w-[522px] lg:text-[20px]">
              Talk to real people with real experience through 1:1 calls, chats
              or webinars.
            </div>
          </div>

          {/* CTA buttons */}
          {/* CTA buttons */}
          <div className="flex lg:pointer-events-auto sm:gap-2 sm:pointer-events-auto lg:gap-4 justify-center">
            <button
              className="
              sm:px-5 sm:py-2 sm:text-[14px] sm:rounded-lg
              lg:px-8 lg:py-4 lg:text-[16px] lg:rounded-xl
              border font-sans font-medium text-white bg-[#163C50]
              transition-transform duration-200 will-change-transform active:scale-95 hover:bg-[#1e4a60]
            "
              onClick={() => (window.location.href = "/explore")}
              type="button"
              aria-label="Find a Mentor"
            >
              Find a Mentor
            </button>
            <button
              className="
              sm:px-5 sm:py-2 sm:text-[14px] sm:rounded-lg
              lg:px-8 lg:py-4 lg:text-[16px] lg:rounded-xl
              border font-sans font-medium text-white bg-[#FC8019]
              transition-transform duration-200 will-change-transform active:scale-95 hover:bg-[#e6721a]
            "
              onClick={() => (window.location.href = "/mentorsignup")}
              type="button"
              aria-label="Become a Mentor"
            >
              Become a Mentor
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center text-center font-sans sm:gap-12 sm:text-[14px] lg:gap-16 lg:text-[20px]">
            <div>
              <p className="font-semibold">2,500+</p>
              <p className="font-medium text-gray-600 lg:text-[16px]">
                Courses
              </p>
            </div>
            <div>
              <p className="font-semibold">5,000+</p>
              <p className="font-medium text-gray-600 lg:text-[16px]">
                Meetings
              </p>
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
        <div className="relative w-full mt-7 overflow-hidden lg:pointer-events-auto">
          <div className="absolute top-0 left-0 h-full sm:w-4 lg:w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none will-change-transform" />
          <div className="absolute top-0 right-0 h-full sm:w-4 lg:w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none will-change-transform" />
          <Marquee cards={cards} />
        </div>
      </div>
    </div>
  );
});

GridsBackground.displayName = "GridsBackground";

export default GridsBackground;
