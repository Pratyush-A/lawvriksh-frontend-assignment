import React from "react";
import SidebarLogo from "/assets/sidebar.png";
import { Plus, CircleQuestionMark, LayoutGrid, Briefcase, ListChecks } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-10 bg-black text-white h-[1080px] w-[260px] fixed sm:static top-0 left-0 transition-all duration-300 z-50 sm:flex">
            <div className="flex flex-row items-center gap-2 mt-10 px-5">
                <img
                    src={SidebarLogo}
                    alt="Sidebar Logo"
                    className="h-10 w-auto object-contain"
                />
                <p className="text-2xl font-semibold whitespace-nowrap">Promage</p>
            </div>

            <div className="px-6 space-y-4 hidden sm:block h-auto">
                <button
                    className="h-[48px] w-[184px] bg-white rounded-3xl flex flex-row items-center pl-2 gap-2 hover:scale-[1.03] transition-transform duration-200 active:scale-[0.98]"
                >
                    <div className="h-[34px] w-[34px] bg-[#E65F2B] rounded-4xl flex items-center justify-center">
                        <Plus className="text-white h-[24px] w-[24px] font-bold" />
                    </div>
                    <span className='text-black [font-family:"Aeonik_Pro",sans-serif] font-semibold leading-tight text-left'>
                        <p>Create New</p>
                        <p>Project</p>
                    </span>
                </button>
            </div>

            <div className="px-6 space-y-4 hidden sm:block h-auto">
                <button className="flex items-center gap-3 bg-white rounded-3xl px-4 py-2 w-[184px] text-[#E65F2B]">
                    <LayoutGrid className="h-5 w-5" />
                    <span className='[font-family:"Aeonik_Pro",sans-serif] font-normal text-[17px]'>
                        Dashboard
                    </span>
                </button>

                <button className="flex items-center gap-3 px-4 py-2 w-[184px] text-white hover:text-[#E65F2B] hover:bg-white/10 rounded-3xl transition-all duration-200">
                    <Briefcase className="h-5 w-5" />
                    <span className='[font-family:"Aeonik_Pro",sans-serif] font-normal text-[17px]'>
                        Projects
                    </span>
                </button>


                <button className="flex items-center gap-3 px-4 py-2 w-[184px] text-white hover:text-[#E65F2B] hover:bg-white/10 rounded-3xl transition-all duration-200">
                    <ListChecks className="h-5 w-5" />
                    <span className='[font-family:"Aeonik_Pro",sans-serif] font-normal text-[17px]'>
                        Tasks
                    </span>
                </button>


            </div>

            <div className="px-6 space-y-4 hidden sm:block h-auto mt-auto mb-10">
                <button className="h-[48px] w-[48px] bg-[#E65F2B] rounded-4xl flex items-center justify-center  hover:scale-[1.03] transition-transform duration-200 active:scale-[0.98]">
                    <CircleQuestionMark className="text-white h-[30px] w-[30px] font-bold" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
