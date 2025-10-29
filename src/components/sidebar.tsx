import  { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarLogo from "/assets/sidebar.png";
import { Plus, CircleHelp, LayoutGrid, Briefcase, ListChecks, Menu, X } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutGrid, link: "/dashboard" },
        { id: "projects", label: "Projects", icon: Briefcase, link: "/projects" },
        { id: "tasks", label: "Tasks", icon: ListChecks, link: "/tasks" },
    ];

    return (
        <>
            <div className="sm:hidden fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-5 py-4 z-50">
                <div className="flex items-center gap-2">
                    <img src={SidebarLogo} alt="Sidebar Logo" className="h-8 w-auto object-contain" />
                    <p className="text-xl font-semibold whitespace-nowrap">Promage</p>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md hover:bg-white/10 transition"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <div
                className={`flex flex-col gap-10 bg-black text-white w-[260px] fixed top-0 left-0 transition-transform duration-300 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:flex sm:h-auto h-auto`}
            >

                <div className="flex flex-row items-center gap-2 mt-10 px-5">
                    <img src={SidebarLogo} alt="Sidebar Logo" className="h-10 w-auto object-contain" />
                    <p className="text-2xl font-semibold whitespace-nowrap">Promage</p>
                </div>

                <div className="px-6 space-y-4 h-auto">
                    <NavLink
                        to="/create"
                        className="h-[48px] w-[184px] bg-white rounded-3xl flex flex-row items-center pl-2 gap-2 hover:scale-[1.03] transition-transform duration-200 active:scale-[0.98]"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="h-[34px] w-[34px] bg-[#E65F2B] rounded-4xl flex items-center justify-center">
                            <Plus className="text-white h-[24px] w-[24px] font-bold" />
                        </div>
                        <span className='text-black [font-family:"Aeonik_Pro",sans-serif] font-semibold leading-tight text-left'>
                            <p>Create New</p>
                            <p>Project</p>
                        </span>
                    </NavLink>
                </div>

                <div className="px-6 space-y-4 h-auto">
                    {menuItems.map(({ id, label, icon: Icon, link }) => (
                        <NavLink
                            key={id}
                            to={link}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 w-[184px] rounded-3xl transition-all duration-200 ${isActive
                                    ? "bg-white text-[#E65F2B]"
                                    : "text-white hover:text-[#E65F2B] hover:bg-white/10"
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            <Icon className="h-5 w-5" />
                            <span className='[font-family:"Aeonik_Pro",sans-serif] font-normal text-[17px]'>
                                {label}
                            </span>
                        </NavLink>
                    ))}
                </div>

                <div className="px-6 space-y-4 h-auto mt-auto mb-10">
                    <button className="h-[48px] w-[48px] bg-[#E65F2B] rounded-4xl flex items-center justify-center hover:scale-[1.03] transition-transform duration-200 active:scale-[0.98]">
                        <CircleHelp className="text-white h-[30px] w-[30px] font-bold" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 sm:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
