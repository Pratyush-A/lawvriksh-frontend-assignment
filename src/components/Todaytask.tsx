// import { useState } from "react";

// const TodayTask = () => {
//   const [activeTab, setActiveTab] = useState("All");

//   const tasks = [
//     { title: "Create a user flow of social application design", status: "Approved", category: "Important", completed: true },
//     { title: "Create a user flow of social application design", status: "In review", category: "Important", completed: true },
//     { title: "Landing page design for Fintech project of singapore", status: "In review", category: "Notes", completed: true },
//     { title: "Interactive prototype for app screens of deltamine project", status: "On going", category: "Links", completed: false },
//     { title: "Interactive prototype for app screens of deltamine project", status: "Approved", category: "Notes", completed: true },
//   ];

//   const tabs = [
//     { name: "All", count: tasks.length },
//     { name: "Important", count: tasks.filter(t => t.category === "Important").length },
//     { name: "Notes", count: tasks.filter(t => t.category === "Notes").length },
//     { name: "Links", count: tasks.filter(t => t.category === "Links").length },
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved":
//         return "bg-[#1A932E2E] text-[#1A932E]";
//       case "In review":
//         return "bg-[#EE201C2E] text-[#E53333]";
//       case "On going":
//         return "bg-[#E65F2B2E] text-[#E65F2B]";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   const filteredTasks =
//     activeTab === "All"
//       ? tasks
//       : tasks.filter((task) => task.category === activeTab);

//   return (
//     <div className="w-full lg:w-[690px] h-auto lg:h-[348px] bg-[#f2eae5] rounded-3xl p-4 sm:p-[18px] flex flex-col gap-[10px] [font-family:'Aeonik_Pro',sans-serif] transition-all duration-300">
      
//       <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32] mb-2">Today task</h2>
      
//       <div className="flex items-center text-[13px] sm:text-[14px] text-[#292D32] border-b border-gray-300 pb-[6px] mb-1 overflow-x-auto scrollbar-hide">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             onClick={() => setActiveTab(tab.name)}
//             className={`flex items-center mr-4 [font-family:'Aeonik_Pro',sans-serif] font-extrabold sm:mr-6 cursor-pointer transition-all whitespace-nowrap ${
//               activeTab === tab.name
//                 ? "border-b-2 border-[#2B5CE6] font-semibold text-[#2B5CE6]"
//                 : "text-[#292D32] hover:text-[#2B5CE6]"
//             }`}
//           >
//             <span>{tab.name}</span>
//             {tab.count && (
//               <span
//                 className={`ml-1 text-[11px] sm:text-[12px] font-semibold rounded-full px-1.5 sm:px-2 py-[1px] ${
//                   activeTab === tab.name ? "text-[#2B5CE6]" : "text-[#2B5CE6]"
//                 } bg-[#2B5CE6]/10`}
//               >
//                 {tab.count.toString().padStart(2, "0")}
//               </span>
//             )}
//           </div>
//         ))}
//       </div>

      
//       <div className="flex flex-col gap-[8px] text-[13px] sm:text-[14px] [font-family:'Aeonik_Pro',sans-serif] font-extrabold text-[#292D32] overflow-y-auto scrollbar-hide max-h-[220px]">
//         {filteredTasks.length > 0 ? (
//           filteredTasks.map((task, index) => (
//             <div
//               key={index}
//               className="flex items-start sm:items-center justify-between pr-2 hover:bg-[#ffffff50] rounded-xl transition-colors duration-200 py-[6px] gap-2"
//             >
              
//               <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
//                 {task.completed ? (
//                   <div className="w-[16px] h-[16px] sm:w-[18px]  sm:h-[18px] rounded-full border-2 border-[#E65F2B] flex items-center justify-center bg-[#E65F2B] flex-shrink-0 mt-0.5 sm:mt-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 ) : (
//                   <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-2 border-gray-400 flex-shrink-0 mt-0.5 sm:mt-0" />
//                 )}
//                 <span className="break-words">{task.title}</span>
//               </div>

              
//               <span
//                 className={`px-2 sm:px-3 py-[3px] sm:py-[4px] rounded-full text-[12px] sm:text-[13px] font-medium ${getStatusColor(
//                   task.status
//                 )} whitespace-nowrap flex-shrink-0`}
//               >
//                 {task.status}
//               </span>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-500 mt-4 text-[12px] sm:text-[13px] italic">
//             No tasks in this category
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodayTask;



import { useState } from "react";

const TodayTask = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tasks = [
    { title: "Create a user flow of social application design", status: "Approved", category: "Important", completed: true },
    { title: "Create a user flow of social application design", status: "In review", category: "Important", completed: true },
    { title: "Landing page design for Fintech project of Singapore", status: "In review", category: "Notes", completed: true },
    { title: "Interactive prototype for app screens of Deltamine project", status: "On going", category: "Links", completed: false },
    { title: "Interactive prototype for app screens of Deltamine project", status: "Approved", category: "Notes", completed: true },
  ];

  const tabs = [
    { name: "All", count: tasks.length },
    { name: "Important", count: tasks.filter((t) => t.category === "Important").length },
    { name: "Notes", count: tasks.filter((t) => t.category === "Notes").length },
    { name: "Links", count: tasks.filter((t) => t.category === "Links").length },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-[#1A932E2E] text-[#1A932E]";
      case "In review":
        return "bg-[#EE201C2E] text-[#E53333]";
      case "On going":
        return "bg-[#E65F2B2E] text-[#E65F2B]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredTasks = activeTab === "All" ? tasks : tasks.filter((task) => task.category === activeTab);

  return (
    <div className="w-full lg:w-[690px] bg-[#f2eae5] rounded-3xl p-4 sm:p-[18px] flex flex-col gap-[10px] font-sans transition-all duration-300 shadow-md">
      
      {/* Header */}
      <h2 className="text-[16px] sm:text-[17px] font-bold text-[#292D32] mb-2">
        Today Task
      </h2>

      {/* Tabs */}
      <div className="flex items-center text-[13px] sm:text-[14px] text-[#292D32] border-b border-gray-300 pb-[6px] mb-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center mr-4 sm:mr-6 cursor-pointer whitespace-nowrap transition-all ${
              activeTab === tab.name
                ? "border-b-2 border-[#2B5CE6] font-semibold text-[#2B5CE6]"
                : "text-[#292D32] hover:text-[#2B5CE6]"
            }`}
          >
            <span>{tab.name}</span>
            <span className="ml-1 text-[11px] sm:text-[12px] font-semibold rounded-full px-1.5 sm:px-2 py-[1px] bg-[#2B5CE6]/10 text-[#2B5CE6]">
              {tab.count.toString().padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-[8px] text-[13px] sm:text-[14px] text-[#292D32] overflow-y-auto scrollbar-hide max-h-[230px] pr-1">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center justify-between pr-2 hover:bg-[#ffffff70] rounded-xl transition duration-200 py-[6px] gap-2"
            >
              <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                {task.completed ? (
                  <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-2 border-[#E65F2B] bg-[#E65F2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-2 border-gray-400 flex-shrink-0 mt-0.5" />
                )}
                <span className="break-words font-medium leading-tight">{task.title}</span>
              </div>

              <span
                className={`px-2 sm:px-3 py-[3px] sm:py-[4px] rounded-full text-[12px] sm:text-[13px] font-medium ${getStatusColor(
                  task.status
                )} whitespace-nowrap`}
              >
                {task.status}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4 text-[12px] sm:text-[13px] italic">
            No tasks in this category
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayTask;
