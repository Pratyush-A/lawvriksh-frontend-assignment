import React, { useState } from "react";

export default function ProjectsWorkload() {
  const data = [
    { name: "Sam", value: 7, circles: 3 },
    { name: "Meldy", value: 8, circles: 4 },
    { name: "Ken", value: 2, circles: 1 },
    { name: "Dmitry", value: 10, circles: 6 },
    { name: "Vego", value: 8, circles: 4 },
    { name: "Kadin", value: 2, circles: 1 },
    { name: "Melm", value: 4, circles: 2 },
  ];

  const getColor = (val) => {
    if (val >= 9) return "bg-[#E65F2B] text-white"; 
    if (val >= 7) return "bg-black text-white"; 
    return "bg-black text-white";
  };

  const options = ["Last 3 months", "Last 6 months", "Last year"];
  const [selectedRange, setSelectedRange] = useState(options[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-[480px] h-[348px] bg-[#f2eae5] rounded-3xl p-[18px] flex flex-col justify-between [font-family:'Aeonik_Pro',sans-serif]">
      
      <div className="flex items-center justify-between relative">
        <h2 className="text-[16px] font-bold text-[#292D32]">Projects Workload</h2>

   
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-[#292D32] focus:outline-none flex items-center gap-2"
          >
            {selectedRange}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[180px] bg-white rounded-2xl shadow-md z-50 overflow-hidden animate-fadeIn">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedRange(option);
                    setDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-5 py-2 text-[14px] [font-family:"Aeonik_Pro",sans-serif] transition-colors duration-150 ${
                    selectedRange === option
                      ? "bg-[#E65F2B]/10 text-[#E65F2B]"
                      : "text-[#292D32] hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="flex justify-between items-end flex-1 mt-6 px-2">
        {data.map((person, index) => (
          <div key={index} className="flex flex-col items-center justify-end space-y-1">
            <div className="flex flex-col items-center justify-end space-y-1 mb-1">
              {[...Array(person.circles)].map((_, i) => {
                const isTop = i === 0; 
                return (
                  <div
                    key={i}
                    className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-semibold ${
                      isTop
                        ? getColor(person.value)
                        : "bg-white border border-black text-transparent"
                    }`}
                  >
                    {isTop ? person.value.toString().padStart(2, "0") : ""}
                  </div>
                );
              })}
            </div>
            <span className="text-[13px] text-[#292D32] font-medium">
              {person.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
