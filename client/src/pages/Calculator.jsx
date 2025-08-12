import React, { useState } from "react";

const Calculator = () => {
  const [sessions, setSessions] = useState(10);
  const [price, setPrice] = useState(369);

  // Calculation logic
  const hoursPerSession = 1.25; // Assume each session is 1.25 hours
  const hoursPerMonth = Math.round(sessions * hoursPerSession * 4); // 4 weeks in a month
  const valuePerHour = price;

  return (
    <div className="w-full flex flex-col items-center py-12 px-4">
      <h2 className="text-center font-bold font-sans text-[#222] text-2xl lg:text-4xl mb-8">
        Lets Calculate How much you can earn?
      </h2>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col lg:flex-row gap-8 max-w-3xl w-full">
        {/* Left: Sessions & Price */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              How many sessions would you take in a week
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">0</span>
              <input
                type="range"
                min={0}
                max={20}
                step={2}
                value={sessions}
                onChange={e => setSessions(Number(e.target.value))}
                className="flex-1 accent-[#FC8019] h-2"
              />
              <span className="text-xs text-gray-400">20</span>
            </div>
            <div className="mt-2 text-[#FC8019] font-bold text-lg">{sessions}</div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              What feels like a fair price per session
            </label>
            <input
              type="number"
              min={0}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 w-32 font-semibold"
            />
          </div>
        </div>
        {/* Right: Results & CTA */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <div className="text-3xl font-bold text-[#222]">{hoursPerMonth} <span className="text-base font-normal">Hrs/Month</span></div>
            <div className="text-gray-500 mb-4">Time you'd spend mentoring</div>
            <div className="text-3xl font-bold text-[#FC8019]">{valuePerHour} <span className="text-base font-normal">Rs/Hour</span></div>
            <div className="text-gray-500">Value of your time shared</div>
          </div>
          <div>
            <div className="mb-3 text-gray-700 font-medium">
              Create your profile in under 2 minutes and start monetizing your skills
            </div>
            <button
              className="bg-[#FC8019] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ff9a3c] transition"
              onClick={() => window.location.href = "/become-mentor"}
            >
              Become a Mentor
            </button>
            <div className="absolute right-8 bottom-8 hidden lg:block">
          {/* <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="32" stroke="#FC8019" strokeWidth="5" />
            <path d="M35 20v15h12" stroke="#FC8019" strokeWidth="5" strokeLinecap="round" />
          </svg> */}
        </div>
          </div>
          
        </div>
        {/* Clock Icon */}
        
      </div>
    </div>
  );
}

export default Calculator