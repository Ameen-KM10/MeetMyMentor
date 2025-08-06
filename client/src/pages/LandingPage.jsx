import Marquee from "../component/Marquee";
import BackgroundImage from "../assets/hero_background.png";
import Logo from "../assets/Logo.png";
import Mentors from "../assets/mentors.png";
import Line from "../assets/path8.svg";

const LandingPage = () => {
  const cards = [
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
    { title: "Vanesa", description: "Product Marketing" },
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
        <div className="
        sm:h-20 sm:w-full sm:px-4 
        flex items-center justify-between">

          <img className="
          sm:w-[50px] sm:h-[50px]" src={Logo} alt="logo"></img>
          <div className="sm:text-[50px]">&#9776;</div>
        </div>

        {/* 
        Mentor count element
        */}
        <div className="
        sm:gap-6 sm:mt-10 
        flex flex-col ">
          <div className="flex gap-3 justify-center items-center">
            <img className="
            sm:h-5 
            lg:h-7" src={Mentors}>
            </img>
            <div className="
            sm:text-[12px] 
            lg:text-[16px] 
            font-sans font-medium ">
              500+ Mentors
            </div>
          </div>

          {/* 
        Hero title text "Meet Your Mentors"
        */}
          <div className="
          sm:my-3 
          lg:my-1">
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-2">
                <p className="
                sm:text-[36px] 
                lg:text-[64px] 
                font-sans font-semibold ">
                  Meet Your
                </p>
                <div className="relative inline-block">
                  <img
                    className="absolute top-1 left-1/2 -translate-x-1/2 z-10"
                    src={Line}
                    alt="Decorative line"
                  />
                  <p className="
                  sm:text-[36px] 
                  lg:text-[64px] 
                  relative z-10 font-sans font-semibold">
                    Mentor
                  </p>
                </div>
              </div>
            </div>
            <div className="
            sm:w-[300px] sm:text-[12px] 
            lg:w-[522px] lg:text-[20px] 
            mx-auto font-sans font-medium text-center text-gray-600">
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

          <div className="
          sm:text-[14px] sm:gap-12 
          lg:text-[20px] lg:gap-16 
          text-center font-sans flex justify-center ">
            <div>
              <p className="font-semibold">2,500+</p>
              <p className="
              lg:text-[16px] 
              font-medium text-gray-600 ">
                Courses
              </p>
            </div>
            <div>
              <p className="font-semibold">5,000+</p>
              <p className="
              lg:text-[16px] 
              font-medium text-gray-600 ">
                Meetings
              </p>
            </div>
          </div>
          <div className="
        sm:hidden
        lg:inline
        flex text-center text-[28px] font-sans font-semibold
        ">
           You Don’t Need <span className="text-[#FC8019]">Another Course</span>. You Need a <span className="text-[#FC8019]">Real Mentor</span>.
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
