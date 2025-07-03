// components/SpreadsheetHeaderRow.tsx
import { FaLink, FaSyncAlt, FaPlus } from 'react-icons/fa';
import { TbArrowMerge } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";


const SpreadsheetHeaderRow = () => {
  return (
    <div className=" top-0 bottom-0 z-20 flex items-center gap-0.5 px-4  bg-gray-100 border-b border-gray-300 text-sm">
      {/* Left section: Link + Refresh */}
   
      
         <div className='bg-gray-300 '>
        <div className="flex items-center gap-2 px-2 py-1  bg-white rounded border-gray-300 shadow-sm">
        <FaLink className="text-blue-500 text-xs" />
        <span className="text-gray-800">Q3 Financial Overview</span>
      </div>
   
</div>
      <button className="text-orange-500 hover:rotate-90 transition-transform duration-300">
        <FaSyncAlt />
      </button>
       

      <div className="flex-grow  mb-0" />

      {/* Sticky right-side section */}
      <div className=" flex justify-center gap-3 w-[140px] text-center py-1 h-[35px] bg-green-200 text-s font-semibold pt-2 ">
        <TbArrowMerge className  = "mt-1" /> ABC <BsThreeDots  className  = "mt-1" />


      </div>
      <div className=" flex justify-center gap-3 w-[280px] text-center py-1 h-[35px]  bg-purple-100 text-purple-900 text-s font-semibold">
        <TbArrowMerge  className  = "mt-1" />Answer a question  <BsThreeDots className  = "mt-1" />


      </div>
      <div className="  flex justify-center gap-3 w-[140px] text-center py-1 h-[35px]  bg-orange-100 text-orange-900 text-s font-semibold">
        <TbArrowMerge  className  = "mt-1" />Extract   <BsThreeDots className  = "mt-1" />


      </div>
      <div className="w-[100px] h-[50px] flex items-center justify-center rounded bg-gray-100">
        <FaPlus className="text-gray-600" size={20} />
      </div>
    </div>
  );
};

export default SpreadsheetHeaderRow;
