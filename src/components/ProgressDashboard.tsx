import  { useState } from "react";

export default function ProgressDashboard() {
  const progress = 72;
  const totalProjects = 95;
  const completed = 26;
  const delayed = 35;
  const ongoing = 35;

  const size = 340;
  const strokeWidth = 15;
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
    { start: 100, end: 150, color: "#fb923c" },
    { start: 150, end: 180, color: "#e5e7eb" },
  ];

  const viewPadX = 120;
  const viewPadY = 80;
  const viewX = -viewPadX / 2;
  const viewY = -viewPadY / 2.2;
  const viewWidth = size + viewPadX;
  const viewHeight = size * 0.55 + viewPadY;

  const options = ["All", "This Week", "This Month"];
  const [selectedRange, setSelectedRange] = useState(options[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-full lg:w-[480px] h-auto lg:h-[450px] bg-[#f2eae5] rounded-3xl shadow-sm p-4 sm:p-[18px] flex flex-col justify-between [font-family:'Aeonik_Pro',sans-serif]">
      
      <div className="flex items-center justify-between mb-2 relative">
        <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32]">Overall Progress</h2>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-3 sm:px-4 py-1.5 bg-white border [font-family:'Aeonik_Pro',sans-serif] font-semibold border-gray-200 rounded-full text-[13px] sm:text-sm text-[#292D32] focus:outline-none flex items-center gap-2"
          >
            {selectedRange}
            <svg
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[160px] sm:w-[180px] [font-family:'Aeonik_Pro',sans-serif] font-semibold bg-white rounded-2xl shadow-md z-50 overflow-hidden animate-fadeIn">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedRange(option);
                    setDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 sm:px-5 py-2 text-[13px] sm:text-[14px] [font-family:"Aeonik_Pro",sans-serif] transition-colors duration-150 ${
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

      
      <div className="flex justify-center mt-4 mb-2">
        <svg
          width="100%"
          height="auto"
          viewBox={`${viewX} ${viewY} ${viewWidth} ${viewHeight}`}
          style={{ maxWidth: "400px" }}
          className="w-full"
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
            const outer = polarToCartesian(cx, cy, radius + strokeWidth / 2 + 25, angle);
            return (
              <line
                key={`minor-${i}`}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#0606064D"
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
                fontSize="15"
                fill="#000000"
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
            fontSize="14px"
            fill="#9ca3af"
            className="[font-family:'Aeonik_Pro',sans-serif] fontweight-[1000px]"
            
          >
            Completed
          </text>
        </svg>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 text-center mb-2">
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#292D32]">{totalProjects}</div>
          <div className="text-[11px] sm:text-xs text-gray-500 mt-1">Total projects</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#1A932E]">{completed}</div>
          <div className="text-[11px] sm:text-xs text-gray-500 mt-1">Completed</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#DFA510]">{delayed}</div>
          <div className="text-[11px] sm:text-xs text-gray-500 mt-1">Delayed</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-[#E65F2B]">{ongoing}</div>
          <div className="text-[11px] sm:text-xs text-gray-500 mt-1">On going</div>
        </div>
      </div>
    </div>
  );
}