// import { useState } from "react";

// export default function ProjectsWorkload() {
//   const data = [
//     { name: "Sam", value: 7, circles: 3 },
//     { name: "Meldy", value: 8, circles: 4 },
//     { name: "Ken", value: 2, circles: 1 },
//     { name: "Dmitry", value: 10, circles: 6 },
//     { name: "Vego", value: 8, circles: 4 },
//     { name: "Kadin", value: 2, circles: 1 },
//     { name: "Melm", value: 4, circles: 2 },
//   ];

//   const getColor = (val) => {
//     if (val >= 9) return "bg-[#E65F2B] text-white"; 
//     if (val >= 7) return "bg-black text-white"; 
//     return "bg-black text-white";
//   };

//   const options = ["Last 3 months", "Last 6 months", "Last year"];
//   const [selectedRange, setSelectedRange] = useState(options[0]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="relative w-full lg:w-[480px] h-auto lg:h-[348px] bg-[#f2eae5] rounded-3xl p-4 sm:p-[18px] flex flex-col justify-between [font-family:'Aeonik_Pro',sans-serif]">
      
//       <div className="flex items-center justify-between relative">
//         <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32]">Projects Workload</h2>

//         <div className="relative">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="px-3 sm:px-4 py-1.5 [font-family:'Aeonik_Pro',sans-serif] font-semibold bg-white border border-gray-200 rounded-full text-[13px] sm:text-sm text-[#292D32] focus:outline-none flex items-center gap-2"
//           >
//             <span className="hidden sm:inline">{selectedRange}</span>
//             <span className="sm:hidden">{selectedRange.split(' ')[0]} {selectedRange.split(' ')[1]}</span>
//             <svg
//               className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
//                 dropdownOpen ? "rotate-180" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
//             </svg>
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-[160px] [font-family:'Aeonik_Pro',sans-serif] font-semibold sm:w-[180px] bg-white rounded-2xl shadow-md z-50 overflow-hidden animate-fadeIn">
//               {options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setSelectedRange(option);
//                     setDropdownOpen(false);
//                   }}
//                   className={`block w-full text-left px-4 sm:px-5 py-2 text-[13px] sm:text-[14px] [font-family:"Aeonik_Pro",sans-serif] transition-colors duration-150 ${
//                     selectedRange === option
//                       ? "bg-[#E65F2B]/10 text-[#E65F2B]"
//                       : "text-[#292D32] hover:bg-gray-100"
//                   }`}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

      
//       <div className="flex justify-between items-end flex-1 mt-6 px-1 sm:px-2 overflow-x-auto scrollbar-hide">
//         <div className="flex justify-between items-end min-w-full gap-2 sm:gap-0">
//           {data.map((person, index) => (
//             <div key={index} className="flex flex-col items-center justify-end space-y-1">
//               <div className="flex flex-col items-center justify-end space-y-1 mb-1">
//                 {[...Array(person.circles)].map((_, i) => {
//                   const isTop = i === 0; 
//                   return (
//                     <div
//                       key={i}
//                       className={`w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[34px] lg:h-[34px] rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-semibold ${
//                         isTop
//                           ? getColor(person.value)
//                           : "bg-white border border-black text-transparent"
//                       }`}
//                     >
//                       {isTop ? person.value.toString().padStart(2, "0") : ""}
//                     </div>
//                   );
//                 })}
//               </div>
//               <span className="text-[12px] sm:text-[13px] text-[#292D32] font-medium">
//                 {person.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

interface Person {
  name: string;
  value: number;
  circles: number;
}

export default function ProjectsWorkload() {
  const data: Person[] = [
    { name: "Sam", value: 7, circles: 3 },
    { name: "Meldy", value: 8, circles: 4 },
    { name: "Ken", value: 2, circles: 1 },
    { name: "Dmitry", value: 10, circles: 6 },
    { name: "Vego", value: 8, circles: 4 },
    { name: "Kadin", value: 2, circles: 1 },
    { name: "Melm", value: 4, circles: 2 },
  ];

  const getColor = (val: number): string => {
    if (val >= 9) return "bg-[#E65F2B] text-white";
    if (val >= 7) return "bg-black text-white";
    return "bg-black text-white";
  };

  const options: string[] = ["Last 3 months", "Last 6 months", "Last year"];
  const [selectedRange, setSelectedRange] = useState<string>(options[0]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // ✅ Example typed handler (like your handleSliderChange)
  // const handleSliderChange = (val: number): void => {
  //   console.log("Slider value:", val);
  // };

  return (
    <div className="relative w-full lg:w-[480px] h-auto lg:h-[348px] bg-[#f2eae5] rounded-3xl p-4 sm:p-[18px] flex flex-col justify-between font-semibold transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between relative">
        <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32]">
          Projects Workload
        </h2>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            aria-label="Select Time Range"
            className="px-3 sm:px-4 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] sm:text-sm text-[#292D32] flex items-center gap-2 hover:shadow-sm transition-all duration-200"
          >
            <span className="hidden sm:inline">{selectedRange}</span>
            <span className="sm:hidden">
              {selectedRange.split(" ")[0]} {selectedRange.split(" ")[1]}
            </span>
            <svg
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[160px] sm:w-[180px] bg-white rounded-2xl shadow-md z-50 overflow-hidden animate-fadeIn">
              {options.map((option: string) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedRange(option);
                    setDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 sm:px-5 py-2 text-[13px] sm:text-[14px] transition-colors duration-150 ${
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

      {/* Graph Section */}
      <div className="flex justify-between items-end flex-1 mt-6 px-1 sm:px-2 overflow-x-auto scrollbar-hide">
        <div className="flex justify-between items-end min-w-full gap-2 sm:gap-0">
          {data.map((person: Person, index: number) => (
            <div key={index} className="flex flex-col items-center justify-end space-y-1">
              <div className="flex flex-col items-center justify-end space-y-1 mb-1">
                {[...Array(person.circles)].map((_, i: number) => {
                  const isTop = i === 0;
                  return (
                    <div
                      key={i}
                      className={`w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[34px] lg:h-[34px] rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-semibold transition-all duration-300 ${
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
              <span className="text-[12px] sm:text-[13px] text-[#292D32] font-medium">
                {person.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
