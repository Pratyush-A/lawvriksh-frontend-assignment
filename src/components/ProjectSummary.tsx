// import { ChevronDown } from "lucide-react";

// const ProjectSummary = () => {
//     const projects = [
//         {
//             name: "Nelsa web development",
//             manager: "Om prakash sao",
//             due: "May 25, 2023",
//             status: "Completed",
//             progress: 100,
//         },
//         {
//             name: "Datascale AI app",
//             manager: "Neilsan mando",
//             due: "Jun 20, 2023",
//             status: "Delayed",
//             progress: 35,
//         },
//         {
//             name: "Media channel branding",
//             manager: "Tiruelly priya",
//             due: "July 13, 2023",
//             status: "At risk",
//             progress: 68,
//         },
//         {
//             name: "Corlax iOS app development",
//             manager: "Matte hannery",
//             due: "Dec 20, 2023",
//             status: "Completed",
//             progress: 100,
//         },
//         {
//             name: "Website builder development",
//             manager: "Sukumar rao",
//             due: "Mar 15, 2024",
//             status: "On going",
//             progress: 50,
//         },
//     ];

//     const getStatusColor = (status) => {
//         switch (status) {
//             case "Completed":
//                 return "bg-[#1A932E2E] text-[#1A932E]";
//             case "Delayed":
//                 return "bg-[#E2B1332E] text-[#DFA510]";
//             case "At risk":
//                 return "bg-[#EE201C2E] text-[#EE201C]";
//             case "On going":
//                 return "bg-[#E65F2B2E] text-[#E65F2B]";
//             default:
//                 return "bg-gray-100 text-gray-600";
//         }
//     };

//     const getProgressColor = (status) => {
//         switch (status) {
//             case "Completed":
//                 return "#22c55e"; 
//             case "Delayed":
//                 return "#facc15"; 
//             case "At risk":
//                 return "#ef4444"; 
//             case "On going":
//                 return "#fb923c"; 
//             default:
//                 return "#9ca3af"; 
//         }
//     };

//     return (
//         <div className="w-full lg:w-[690px] h-auto lg:h-[450px] bg-[#f2eae5] rounded-3xl shadow-sm p-4 sm:p-[18px] flex flex-col gap-[10px] [font-family:'Aeonik_Pro',sans-serif] font-semibold">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-3">
//                 <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32]">Project summary</h2>
//                 <div className="flex flex-wrap gap-2">
//                     {["Project", "Project manager", "Status"].map((label, idx) => (
//                         <button
//                             key={idx}
//                             className="h-[32px] sm:h-[36px] bg-white rounded-full px-3 sm:px-4 flex items-center justify-between gap-2 text-[13px] sm:text-[14px] text-[#292D32] shadow-sm hover:shadow-md transition-all"
//                         >
//                             {label}
//                             <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#292D32]" />
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="w-full text-left text-[13px] sm:text-[14px] min-w-[640px]">
//                     <thead>
//                         <tr className="text-[#292D32] border-b border-gray-300">
//                             <th className="py-2 font-semibold">Name</th>
//                             <th className="py-2 font-semibold hidden sm:table-cell">Project manager</th>
//                             <th className="py-2 font-semibold">Due date</th>
//                             <th className="py-2 font-semibold">Status</th>
//                             <th className="py-2 font-semibold">Progress</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {projects.map((project, index) => (
//                             <tr key={index} className="border-b border-gray-200 last:border-0">
//                                 <td className="py-3 max-w-[180px] truncate">{project.name}</td>
//                                 <td className="py-3 hidden sm:table-cell">{project.manager}</td>
//                                 <td className="py-3">{project.due}</td>
//                                 <td className="py-3">
//                                     <span
//                                         className={`px-2 sm:px-3 py-1 rounded-full text-[12px] sm:text-[13px] font-medium ${getStatusColor(
//                                             project.status
//                                         )}`}
//                                     >
//                                         {project.status}
//                                     </span>
//                                 </td>
//                                 <td className="py-3 text-right">
//                                     <div className="relative w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center ml-auto">
//                                         <svg className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] transform -rotate-90">
//                                             <circle
//                                                 cx="16"
//                                                 cy="16"
//                                                 r="13"
//                                                 stroke="#e5e5e5"
//                                                 strokeWidth="3"
//                                                 fill="none"
//                                                 className="sm:hidden"
//                                             />
//                                             <circle
//                                                 cx="18"
//                                                 cy="18"
//                                                 r="15"
//                                                 stroke="#e5e5e5"
//                                                 strokeWidth="3"
//                                                 fill="none"
//                                                 className="hidden sm:block"
//                                             />
//                                             <circle
//                                                 cx="16"
//                                                 cy="16"
//                                                 r="13"
//                                                 stroke={getProgressColor(project.status)}
//                                                 strokeWidth="3"
//                                                 fill="none"
//                                                 strokeDasharray="82"
//                                                 strokeDashoffset={`calc(82 - (82 * ${project.progress}) / 100)`}
//                                                 strokeLinecap="round"
//                                                 className="sm:hidden"
//                                             />
//                                             <circle
//                                                 cx="18"
//                                                 cy="18"
//                                                 r="15"
//                                                 stroke={getProgressColor(project.status)}
//                                                 strokeWidth="3"
//                                                 fill="none"
//                                                 strokeDasharray="94"
//                                                 strokeDashoffset={`calc(94 - (94 * ${project.progress}) / 100)`}
//                                                 strokeLinecap="round"
//                                                 className="hidden sm:block"
//                                             />
//                                         </svg>
//                                         <span className="absolute text-[10px] sm:text-[11px] font-semibold text-[#292D32]">
//                                             {project.progress}%
//                                         </span>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ProjectSummary;










import { ChevronDown } from "lucide-react";

const ProjectSummary = () => {
  const projects = [
    {
      name: "Nelsa web development",
      manager: "Om Prakash Sao",
      due: "May 25, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Datascale AI app",
      manager: "Neilsan Mando",
      due: "Jun 20, 2023",
      status: "Delayed",
      progress: 35,
    },
    {
      name: "Media channel branding",
      manager: "Tiruelly Priya",
      due: "July 13, 2023",
      status: "At risk",
      progress: 68,
    },
    {
      name: "Corlax iOS app development",
      manager: "Matte Hannery",
      due: "Dec 20, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Website builder development",
      manager: "Sukumar Rao",
      due: "Mar 15, 2024",
      status: "On going",
      progress: 50,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#1A932E2E] text-[#1A932E]";
      case "Delayed":
        return "bg-[#E2B1332E] text-[#DFA510]";
      case "At risk":
        return "bg-[#EE201C2E] text-[#EE201C]";
      case "On going":
        return "bg-[#E65F2B2E] text-[#E65F2B]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#22c55e";
      case "Delayed":
        return "#facc15";
      case "At risk":
        return "#ef4444";
      case "On going":
        return "#fb923c";
      default:
        return "#9ca3af";
    }
  };

  return (
    <div className="w-full lg:w-[690px] h-auto lg:h-[450px] bg-[#f2eae5] rounded-3xl shadow-sm p-4 sm:p-[18px] flex flex-col gap-[10px] font-semibold">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-3">
        <h2 className="text-[15px] sm:text-[16px] font-bold text-[#292D32]">
          Project Summary
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Project", "Project Manager", "Status"].map((label) => (
            <button
              key={label}
              className="h-[32px] sm:h-[36px] bg-white rounded-full px-3 sm:px-4 flex items-center justify-between gap-2 text-[13px] sm:text-[14px] text-[#292D32] shadow-sm hover:shadow-md transition-all"
            >
              {label}
              <ChevronDown
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#292D32]"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px] sm:text-[14px] min-w-[640px]">
          <thead>
            <tr className="text-[#292D32] border-b border-gray-300">
              <th className="py-2 font-semibold">Name</th>
              <th className="py-2 font-semibold hidden sm:table-cell">
                Project Manager
              </th>
              <th className="py-2 font-semibold">Due Date</th>
              <th className="py-2 font-semibold">Status</th>
              <th className="py-2 font-semibold">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-0 hover:bg-[#ebe2dc]/50 transition"
              >
                <td className="py-3 max-w-[180px] truncate">{project.name}</td>
                <td className="py-3 hidden sm:table-cell">{project.manager}</td>
                <td className="py-3">{project.due}</td>
                <td className="py-3">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-[12px] sm:text-[13px] font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <div className="relative w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center ml-auto">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        stroke="#e5e5e5"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        stroke={getProgressColor(project.status)}
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="94"
                        strokeDashoffset={`calc(94 - (94 * ${project.progress}) / 100)`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-[10px] sm:text-[11px] font-semibold text-[#292D32]">
                      {project.progress}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectSummary;
