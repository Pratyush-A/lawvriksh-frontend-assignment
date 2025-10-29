import React from "react";

export default function ProgressDashboard() {
  const progress = 72;
  const totalProjects = 95;
  const completed = 26;
  const delayed = 35;
  const ongoing = 35;

  const size = 340; 
  const strokeWidth = 20;
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
    { start: 0, end: 50, color: "#22c55e" },
    { start: 50, end: 100, color: "#eab308" },
    { start: 100, end: 150, color: "#f97316" },
    { start: 150, end: 180, color: "#e5e7eb" },
  ];

  
  const viewPadX = 120; 
  const viewPadY = 80;  
  const viewX = -viewPadX / 2;
  const viewY = -viewPadY / 2.2;
  const viewWidth = size + viewPadX;
  const viewHeight = size * 0.55 + viewPadY; 

  return (
    <div className="bg-[#ede8e1] rounded-2xl shadow-sm p-8 w-[420px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Overall Progress</h2>
        <select className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>All</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      
      <div className="relative flex justify-center">
        <svg
          width="220%"  
          height="auto"
          viewBox={`${viewX} ${viewY} ${viewWidth} ${viewHeight}`}
          style={{ maxWidth: "400px" }} 
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
            if (value === 0 || value === 25 || value === 50 || value === 100) return null;
            const angle = (i / 40) * 180;
            const inner = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 6, angle);
            const outer = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 16, angle);
            return (
              <line
                key={`minor-${i}`}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#d1d5db"
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
                y={textPos.y + 5}
                textAnchor="middle"
                fontSize="14"
                fill="#6b7280"
                fontWeight="500"
              >
                {mark}
              </text>
            );
          })}
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fontSize="52"
            fontWeight="700"
            fill="#111827"
          >
            {progress}%
          </text>
          <text
            x={cx}
            y={cy + 20}
            textAnchor="middle"
            fontSize="13"
            fill="#9ca3af"
          >
            Completed
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center mt-2">
        <div>
          <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
          <div className="text-xs text-gray-500 mt-1">Total projects</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{completed}</div>
          <div className="text-xs text-gray-500 mt-1">Completed</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-yellow-500">{delayed}</div>
          <div className="text-xs text-gray-500 mt-1">Delayed</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-orange-500">{ongoing}</div>
          <div className="text-xs text-gray-500 mt-1">On going</div>
        </div>
      </div>
    </div>
  );
}
