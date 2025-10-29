import React from "react";

export default function ProgressDashboard() {
    const progress = 72;
    const totalProjects = 95;
    const completed = 26;
    const delayed = 35;
    const ongoing = 35;

    const size = 360;
    const strokeWidth = 13;
    const radius = (size - strokeWidth) / 2;
    const cx = size / 2;
    const cy = size / 2;

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    const createArc = (startAngle, endAngle, color) => {
        const start = polarToCartesian(cx, cy, radius, endAngle);
        const end = polarToCartesian(cx, cy, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return {
            path: `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
            color,
        };
    };

    const segments = [
        { start: 0, end: 50, color: "#1c9430" },
        { start: 50, end: 100, color: "#E5AF24" },
        { start: 100, end: 150, color: "#e65f2b" },
        { start: 150, end: 180, color: "#d1d5db" },
    ];

    const viewPadX = 100;
    const viewPadY = 150;
    const viewX = -viewPadX / 2;
    const viewY = -viewPadY / 2.3;
    const viewWidth = size + viewPadX;
    const viewHeight = size * 0.75 + viewPadY;

    return (
        <div className="min-h-screen bg-[#e8e3dc] flex justify-center items-center p-10">
            <div className="bg-[#ede8e1] rounded-3xl shadow-sm p-10 w-[750px]">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-4xl font-normal text-gray-900">Overall Progress</h1>
                    <select className="px-6 py-3 bg-white border-0 rounded-full text-base font-normal text-gray-700 focus:outline-none shadow-sm">
                        <option>All</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                </div>

                
                <div className="relative flex justify-center mb-6">
                    <svg
                        width={size + viewPadX}
                        height={viewHeight}
                        viewBox={`${viewX} ${viewY} ${viewWidth} ${viewHeight}`}
                    >
                        {segments.map((segment, i) => {
                            const arc = createArc(segment.start, segment.end, segment.color);
                            return (
                                <path
                                    key={i}
                                    d={arc.path}
                                    fill="none"
                                    stroke={arc.color}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                />
                            );
                        })}

                        {[...Array(41).keys()].map((i) => {
                            const value = (i / 40) * 100;
                            if (value === 0 || value === 25 || value === 50 || value === 100) {
                                return null;
                            }
                            const angle = (i / 40) * 180;
                            const inner = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 10, angle);
                            const outer = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 30, angle);
                            return (
                                <line
                                    key={`minor-${i}`}
                                    x1={inner.x}
                                    y1={inner.y}
                                    x2={outer.x}
                                    y2={outer.y}
                                    stroke="#9ca3af"
                                    strokeWidth="1.5"
                                />
                            );
                        })}
                        {[0, 25, 50, 100].map((mark) => {
                            const angle = (mark / 100) * 180;
                            const textPos = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 20, angle);
                            return (
                                <text
                                    key={mark}
                                    x={textPos.x}
                                    y={textPos.y + 6}
                                    textAnchor="middle"
                                    fontSize="22"
                                    fill="#1f2937"
                                    fontWeight="500"
                                >
                                    {mark}
                                </text>
                            );
                        })}

                        <text
                            x={cx}
                            y={cy - 5}
                            textAnchor="middle"
                            fontSize="64"
                            fontWeight="800"
                            fill="#0f1724"
                            style={{ fontFamily: "Inter, system-ui, Arial" }}
                        >
                            {progress}%
                        </text>

                        <text
                            x={cx}
                            y={cy + 35}
                            textAnchor="middle"
                            fontSize="14"
                            fill="#64748b"
                            style={{ fontFamily: "Inter, system-ui, Arial" }}
                        >
                            Completed
                        </text>
                    </svg>
                </div>
                
                <div className="flex justify-between text-center mt-4">
                    <div>
                        <div className="text-4xl font-semibold text-gray-900">{totalProjects}</div>
                        <div className="text-base text-gray-500 mt-2">Total projects</div>
                    </div>
                    <div>
                        <div className="text-4xl font-semibold text-green-600">{completed}</div>
                        <div className="text-base text-gray-500 mt-2">Completed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-semibold text-yellow-500">{delayed}</div>
                        <div className="text-base text-gray-500 mt-2">Delayed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-semibold text-orange-500">{ongoing}</div>
                        <div className="text-base text-gray-500 mt-2">On going</div>
                    </div>
                </div>
            </div>
        </div>
    );
}