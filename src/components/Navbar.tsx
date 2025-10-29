import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full">
           
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-4 gap-4 sm:gap-0 pt-4 sm:pt-8 px-4 sm:px-8">
                
                <h1 className='[font-family:"Aeonik_Pro",sans-serif] font-bold text-xl sm:text-2xl md:text-3xl'>
                    Dashboard
                </h1>

                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center">
                    
                    <div className="relative w-full sm:w-[280px] lg:w-[336px]">
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className='w-full h-[44px] sm:h-[48px] bg-white rounded-full pl-11 pr-4 text-[#A3A3A3] placeholder:text-[#A3A3A3] [font-family:"Aeonik_Pro",sans-serif] text-[14px] sm:text-[16px] shadow-sm outline-none focus:ring-2 focus:ring-[#E65F2B]/20'
                        />
                    </div>

                    
                    <div className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] rounded-full bg-white hidden sm:block"></div>

                    
                    <div className="h-[44px] sm:h-[48px] w-full sm:w-auto flex flex-row justify-between sm:justify-start rounded-full bg-white px-3 sm:px-4 lg:pl-[5px] lg:pr-[20px] items-center gap-2 sm:gap-3">
                        <img src="/assets/profile.png" alt="profile" className="h-[32px] w-[32px] sm:h-[35px] sm:w-[35px] rounded-full" />
                        <span className='[font-family:"Aeonik_Pro",sans-serif] font-semibold leading-tight text-left'>
                            <p className="text-black text-[13px] sm:text-[14px]">Alex Main</p>
                            <p className="text-[#292D3270] text-[11px] sm:text-[12px]">Product Manager</p>
                        </span>
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#292D32]" />
                    </div>
                </div>
            </div>

        
            <hr className="border-t-[1.5px] border-[#D0D0D0] w-full" />
        </div>
    )
}

export default Navbar;