import Avatar1 from "../assets/profile/photo1.webp";
import Avatar2 from "../assets/profile/photo2.webp";
import Avatar3 from "../assets/profile/photo3.webp";
import Avatar4 from "../assets/profile/photo4.webp";
import MinimalChart from "../component/MinimalChart";

const Stats = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:justify-center lg:items-center py-12 px-4 ">
      {/* Heading Large */}
      <h2 className="sm:hidden lg:inline text-center font-bold font-sans text-[#FC8019] text-[67px] mb-8">
        <span className="text-[#163C50]">Everyone’s</span> progressing
      </h2>
      {/* Heading Small */}
      <h2 className="lg:hidden text-left font-bold font-sans text-[#FC8019] text-[36px] leading-10 mb-4">
        <span className="text-[#163C50]">Everyone’s</span> <br /> progressing
      </h2>

      {/* Stats Large */}
      <div className="lg:flex justify-between gap-20 max-w-[1440px] mt-10 hidden ">
        <div>
          <h3 className="font-semibold text-[#163C50]  text-[30px] mb-2">
            Let our numbers speak for itself
          </h3>
          <p className="text-gray-600 font-sans mb-6 max-w-md">
            Whether you’re trying to lose weight, land a job or start something
            new, talking to someone who’s already done it makes all the
            difference.
          </p>
          <MinimalChart className="w-full h-auto" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className="flex">
              <span className="font-bold text-[#163C50] text-2xl lg:text-[45px]">
                97
              </span>
              <span className="font-semibold text-[#163C50] text-2xl lg:text-[45px]">
                %
              </span>
            </p>
            <span className="text-gray-600 font-sans text-base max-w-[350px]">
              with a mentor say they find the mentorship to be a valuable one.
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="flex">
              <span className="font-bold text-[#163C50] text-2xl lg:text-[45px]">
                97
              </span>
              <span className="font-semibold text-[#163C50] text-2xl lg:text-[45px]">
                %
              </span>
            </p>
            <span className="text-gray-600 font-sans text-base max-w-[350px]">
              with a mentor say they find the mentorship to be a valuable one.
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="flex">
              <span className="font-bold text-[#163C50] text-2xl lg:text-[45px]">
                97
              </span>
              <span className="font-semibold text-[#163C50] text-2xl lg:text-[45px]">
                %
              </span>
            </p>
            <span className="text-gray-600 font-sans text-base max-w-[350px]">
              with a mentor say they find the mentorship to be a valuable one.
            </span>
          </div>
        </div>
      </div>

      {/* Stats Small */}
      <p className="font-sans text-[15px] w-5/6 lg:hidden">
        Talking to someone who's already done it makes all the difference.
      </p>

      <div className="lg:hidden relative w-full mt-14">
        {/* Chart */}
        <MinimalChart className="w-full h-full" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col gap-8 justify-center w-10/12 mx-auto">
          <div className="flex items-center justify-center gap-3">
            <p className="flex">
              <span className="font-bold text-[#163C50] text-[36px]">97</span>
              <span className="font-medium text-[#163C50] text-[36px]">%</span>
            </p>
            <span className="text-gray-600 text-[12px] font-medium leading-4 font-sans max-w-[350px]">
              with a mentor say they find the mentorship to be a valuable one.
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-gray-600 text-right text-[12px] font-medium font-sans leading-4 max-w-[350px]">
              mentored will also go on to mentor others
            </span>
            <p className="flex">
              <span className="font-bold text-[#163C50] text-[36px]">97</span>
              <span className="font-medium text-[#163C50] text-[36px]">%</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="flex">
              <span className="font-bold text-[#163C50] text-[36px]">97</span>
              <span className="font-medium text-[#163C50] text-[36px]">%</span>
            </p>
            <span className="text-gray-600 text-[12px] font-sans font-medium leading-4 max-w-[350px]">
              with a mentor say they find the mentorship to be a valuable one.{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full flex flex-col items-center mt-16">
        <p className="text-center font-bold text-[#163C50] text-[16px] lg:text-2xl mb-2">
          “ I come to Meetmymentor for the curation of class quality.
          <br />
          That’s really worth the cost of everything “
        </p>
        <span className="text-center text-gray-600 font-sans sm:text-[12px] mb-4">
          Surya J, Meetmymentor Student
        </span>
        {/* Avatars */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <img
            src={Avatar1}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
          <img
            src={Avatar2}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
          <img
            src={Avatar3}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
          <img
            src={Avatar4}
            alt="avatar"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
