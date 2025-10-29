import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import { ChevronDown } from "lucide-react";
import ProjectSummary from "../components/ProjectSummary";
import ProgressDashboard from "../components/ProgressDashboard";
import TodayTask from "../components/Todaytask";
import ProjectsWorkload from "../components/ProjectsWorkload";

const Homepage: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState("Last 30 days");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const options = [
    "Last 7 days",
    "Last 14 days",
    "Last 30 days",
    "This Month",
    "Custom Range",
  ];


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen w-full flex bg-[#ebdfd7] overflow-x-hidden">
      <div className="flex-1 flex flex-col w-full">
        <Navbar />

        <div className="flex flex-col sm:flex-row mt-5 px-4 sm:px-8 justify-between items-start sm:items-center gap-3 sm:gap-0 relative">
          <h1 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-[#292D32]">
            Overview
          </h1>

          <div ref={dropdownRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="h-[40px] sm:h-[44px] w-full sm:w-[160px] font-sans font-semibold bg-white rounded-full flex items-center justify-between px-4 sm:px-5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="font-sans font-semibold text-[13px] sm:text-[14px] text-black">
                {selectedRange}
              </span>
              <ChevronDown
                className={`h-4 w-4 sm:h-5 sm:w-5 text-[#292D32] transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-full sm:w-[180px] font-sans font-semibold bg-white rounded-2xl shadow-lg z-50 overflow-hidden animate-fadeIn">
                {options.map((option) => (
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

        <StatsCards />

        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full px-4 sm:px-8 mt-6 mb-6">
          <ProjectSummary />
          <ProgressDashboard />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full px-4 sm:px-8 mb-10">
          <TodayTask />
          <ProjectsWorkload />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
