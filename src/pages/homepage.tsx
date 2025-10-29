import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import { ChevronDown } from "lucide-react";
import ProjectSummary from "../components/ProjectSummary";
import ProgressDashboard from "../components/ProgressDashboard";
import TodayTask from "../components/Today task";
import ProjectsWorkload from "../components/ProjectsWorkload";

const Homepage = () => {
    const [selectedRange, setSelectedRange] = useState("Last 30 days");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const options = ["Last 7 days", "Last 14 days", "Last 30 days", "This Month", "Custom Range"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen w-screen flex bg-[#ebdfd7]">
            <div className="flex-1 flex flex-col">
                <Navbar />

                
                <div className="flex flex-row mt-4 px-8 justify-between items-center relative">
                    <h1 className='[font-family:"Aeonik_Pro",sans-serif] font-bold text-xl sm:text-2xl'>
                        Overview
                    </h1>

                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="h-[40px] sm:h-[44px] w-[160px] bg-white rounded-full flex items-center justify-between px-5 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <span className='[font-family:"Aeonik_Pro",sans-serif] font-medium text-[14px] text-black'>
                                {selectedRange}
                            </span>
                            <ChevronDown
                                className={`h-5 w-5 text-[#292D32] transform transition-transform duration-200 ${
                                    dropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                            />
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
                <StatsCards />
                <div className="flex flex-row gap-10 w-[100%] h-full px-8 mt-6 mb-8">
                    <ProjectSummary />
                    <ProgressDashboard />
                </div>
                <div className="flex flex-row gap-10 w-[100%] h-full px-8 mt-6 mb-8">
                    <TodayTask />
                    <ProjectsWorkload />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
