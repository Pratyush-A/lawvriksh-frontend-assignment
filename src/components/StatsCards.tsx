import React from "react";
import {
    BarChart3,
    Briefcase,
    Clock,
    Users,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";

const StatsCards = () => {
    const cards = [
        {
            icon: <BarChart3 className="h-6 w-6 text-white" />,
            bg: "bg-[#CBB4F6]",
            title: "Total revenue",
            value: "$53,00989",
            subtext: "12% increase from last month",
            positive: true,
        },
        {
            icon: <Briefcase className="h-6 w-6 text-white" />,
            bg: "bg-[#F6B49C]",
            title: "Projects",
            value: "95 /100",
            subtext: "10% decrease from last month",
            positive: false,
        },
        {
            icon: <Clock className="h-6 w-6 text-white" />,
            bg: "bg-[#AFCBF6]",
            title: "Time spent",
            value: "1022 /1300 Hrs",
            subtext: "8% increase from last month",
            positive: true,
        },
        {
            icon: <Users className="h-6 w-6 text-white" />,
            bg: "bg-[#F6D49C]",
            title: "Resources",
            value: "101 /120",
            subtext: "2% increase from last month",
            positive: true,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mt-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="h-[196px] w-[268px] bg-[#f2eae5] rounded-3xl shadow-sm p-5 flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between">
                        <div
                            className={`h-[42px] w-[42px] rounded-full flex items-center justify-center ${card.bg}`}
                        >
                            {card.icon}
                        </div>
                    </div>

                    <div>
                        <p className='[font-family:"Aeonik_Pro",sans-serif] text-[#292D32] text-[15px] font-medium mb-1'>
                            {card.title}
                        </p>
                        <h2 className='[font-family:"Aeonik_Pro",sans-serif] text-black font-bold text-[24px]'>
                            {card.value}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        {card.positive ? (
                            <ArrowUpRight className="text-green-500 h-4 w-4" />
                        ) : (
                            <ArrowDownRight className="text-red-500 h-4 w-4" />
                        )}
                        <p
                            className={`text-[13px] [font-family:"Aeonik_Pro",sans-serif] ${
                                card.positive ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {card.subtext}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
