
import React from 'react'
import { ChevronDown} from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full ">
           
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-4 gap-4 sm:gap-0 pt-8 px-8">
                
                <h1 className='[font-family:"Aeonik_Pro",sans-serif] font-bold text-2xl sm:text-3xl'>
                    Dashboard
                </h1>

                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center sm:items-start">
                    
                    <div className="relative w-full sm:w-[336px]">
                        <input
                        type="text"
                        placeholder="Search for anything..."
                        className='w-[336px] h-[48px] bg-white rounded-[55px] pl-11 text-[#A3A3A3] placeholder:text-[#A3A3A3] [font-family:"Aeonik_Pro",sans-serif] text-[16px] leading-[48px] shadow-sm outline-none focus:ring-0'
                    />
                    </div>

                    
                    <div className="h-[45px] w-[45px] rounded-full bg-white hidden sm:block"></div>

                    
                    <div className="h-[45px] sm:h-[48px] w-full sm:w-[195px] flex flex-row justify-between sm:justify-start rounded-[55px] bg-white px-4 sm:pl-[5px] sm:pr-[20px] items-center gap-2 sm:gap-3">
                        <img src="/assets/profile.png" alt="profile" className="h-[35px] w-[35px] rounded-full" />
                        <span className='[font-family:"Aeonik_Pro",sans-serif] font-semibold leading-tight text-left hidden sm:block'>
                            <p className="text-black text-[14px]">Alex Main</p>
                            <p className="text-[#292D3270] text-[12px]">Product Manager</p>
                        </span>
                        <ChevronDown className="font-medium text-[#292D32]" />
                    </div>
                </div>
            </div>

        
            <hr className="border-t-[1.5px] border-[#D0D0D0] w-full" />
        </div>
    )
}

export default Navbar;
