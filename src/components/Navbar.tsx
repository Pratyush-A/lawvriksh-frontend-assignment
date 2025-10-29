import React from 'react'
import {ChevronDown} from "lucide-react";
const Navbar = () => {
  return (
    <section className="flex flex-row items-center justify-between w-full mb-8">
                    <h1 className='[font-family:"Aeonik_Pro",sans-serif] font-bold text-3xl w-[321px] h-[36px]'>
                        Dashboard
                    </h1>
                    <div className="flex flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className=' w-[336px] h-[48px] bg-white rounded-[55px] pl-11 text-[#A3A3A3] placeholder:text-[#A3A3A3] [font-family:"Aeonik_Pro",sans-serif] text-[16px] leading-[48px] shadow-sm  outline-none focus:ring-0'
                        />
                        <div className="h-[48px] w-[48px] rounded-[55px] bg-white"></div>
                        <div className="h-[48px] w-[195px] flex flex-row rounded-[55px] bg-white pt-[5px] pb-[5px] pl-[5px] pr-[20px] items-center gap-2">
                            <img src="/assets/profile.png" alt="" className="h-[38px] w-[38px] rounded-3xl" />
                            <span className='[font-family:"Aeonik_Pro",sans-serif] font-semibold leading-tight text-left'>
                                <p className="text-black text-[14px]">Alex Main</p>
                                <p className="text-[#292D3270] text-[12px]">Product Manager</p>
                            </span>
                            <ChevronDown className="font-medium text-[#292D32]"/>

                        </div>
                    </div>
                </section>
  )
}

export default Navbar