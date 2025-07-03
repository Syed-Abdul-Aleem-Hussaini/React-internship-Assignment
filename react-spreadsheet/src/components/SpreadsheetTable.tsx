// components/SpreadsheetTable.tsx

import { FaUser, FaGlobe } from "react-icons/fa";
import { RiHandbagFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { HiHandRaised } from "react-icons/hi2";

const headers = [
  { label: "#", width: "w-[30px]" },
  { label: "Job Request", icon: <RiHandbagFill className="text-gray-400 inline" />, width: "w-[220px]",bg : "bg-gray-200",text : "text-gray-600" },
  { label: "Submitted", icon: <FaCalendarDays className="text-gray-400 inline" />, width: "w-[130px]",bg : "bg-gray-200" ,text : "text-gray-600"},
  { label: "Status", icon: <IoIosArrowDropdownCircle className="text-gray-400 inline" />, width: "w-[130px]" ,bg : "bg-gray-200",text : "text-gray-600"},
  { label: "Submitter", icon: <FaUser className="text-gray-400 inline" />, width: "w-[160px]",bg : "bg-gray-200",text : "text-gray-600" },
  { label: "URL", icon: <FaGlobe className="text-gray-400 inline" />, width: "w-[180px]",bg : "bg-gray-200",text : "text-gray-600" },
  { label: "Assigned", icon: <HiHandRaised className="text-gray-400 inline" />, width: "w-[140px]", bg: "bg-green-100",text : "text-green-800" },
  { label: "Priority", width: "w-[140px]", bg: "bg-purple-100",text : "text-purple-800" },
  { label: "Due Date", width: "w-[140px]", bg: "bg-purple-100",text : "text-purple-800" },
  { label: "Est. Value", width: "w-[140px]", bg: "bg-orange-100",text : "text-orange-800" },
  { label: "", width: "w-[100px]" },
];

const data = [
  {
    id: 1,
    job: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    id: 2,
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanpro.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    id: 3,
    job: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.io",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    id: 4,
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.dev",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    id: 5,
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.me",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "In-process":
      return "bg-yellow-100 text-yellow-800";
    case "Need to start":
      return "bg-blue-100 text-blue-800";
    case "Complete":
      return "bg-green-100 text-green-800";
    case "Blocked":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-red-600 font-semibold";
    case "Medium":
      return "text-yellow-600 font-medium";
    case "Low":
      return "text-blue-600 font-medium";
    default:
      return "text-gray-600";
  }
};

const SpreadsheetTable = () => {
  const emptyRows = Array.from({ length: 15 });

  return (
    <div className="px-4 overflow-x-auto">
      <table className="table-fixed w-full border-collapse text-sm">
        <thead className="bg-white sticky  z-10 border-b border-gray-300">
          <tr >
            {headers.map((h, idx) => (
              <th
                key={idx}
                className={`border  border-white px-3 py-2 text-left font-medium  ${h.bg || ""} ${h.width}  ${h.text || ""}`}
              >
                {h.icon && <span className="inline-block mr-1">{h.icon}</span>}
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}    onClick={() => console.log(`Row ${d.id} clicked`)}
  className="hover:bg-gray-50 transition cursor-pointer">
              <td className="border border-gray-300 px-3 py-2">{d.id}</td>
              <td className="border border-gray-300 px-3 py-2 truncate max-w-[200px]">{d.job}</td>
              <td className="border border-gray-300 px-3 py-2">{d.submitted}</td>
              <td className="border border-gray-300 px-3 py-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(d.status)}`}>
                  {d.status}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2">{d.submitter}</td>
              <td className="border border-gray-300 px-3 py-2">
                <a
                  href={`https://${d.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {d.url.length > 22 ? d.url.slice(0, 22) + "..." : d.url}
                </a>
              </td>
              <td className="border border-gray-300 px-3 py-2">{d.assigned}</td>
              <td className={`border border-gray-300 px-3 py-2 ${getPriorityColor(d.priority)}`}>{d.priority}</td>
              <td className="border border-gray-300 px-3 py-2">{d.dueDate}</td>
              <td className="border border-gray-300 px-3 py-2">{d.value}</td>
              <td className="border border-gray-300 px-3 py-2"></td>
            </tr>
          ))}

        {emptyRows.map((_, idx) => (
  <tr
    key={`empty-${idx}`}
    onClick={() => console.log(`Empty row ${idx + 1} clicked`)}
    className="hover:bg-gray-50 transition cursor-pointer"
  >
    {headers.map((_, i) => (
      <td key={i} className="border border-gray-300 px-3 py-6 h-10"></td>
    ))}
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetTable;
