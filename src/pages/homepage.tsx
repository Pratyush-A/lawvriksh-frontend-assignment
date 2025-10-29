import React from "react";
import ProgressDashboard from "../components/ProgressDashboard";
import Sidebar from "../components/sidebar";
import {ChevronDown} from "lucide-react";
import Navbar from "../components/Navbar";

const Homepage = () => {
    return (
        <div className="h-[1080px] w-screen flex bg-[#ebdfd7]">
            <Sidebar />

            <div className="flex-1 flex flex-col items-center p-8">
                <Navbar />

                {/* <div className="w-full max-w-[500px]">
          <ProgressDashboard />
        </div> */}
            </div>
        </div>
    );
};

export default Homepage;
