// components/SpreadsheetHeaderRow.tsx
import { FaLink, FaSyncAlt, FaPlus } from 'react-icons/fa';
import { TbArrowMerge } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

const SpreadsheetHeaderRow = () => {
  return (
    <div className="sticky top-0 z-20 flex items-center px-4 bg-gray-100 border-b border-gray-300 text-sm">
      {/* Left: Link Button */}
      <div className="bg-gray-300">
        <div className="flex items-center gap-2 px-2 py-1 bg-white rounded border-gray-300 shadow-sm">
          <FaLink className="text-blue-500 text-xs" />
          <span className="text-gray-800">Q3 Financial Overview</span>
        </div>
      </div>

      {/* Refresh Icon */}
      <button
        className="text-orange-500 hover:rotate-90 transition-transform duration-300 ml-2"
        onClick={() => console.log('Refreshed')}
      >
        <FaSyncAlt className="text-orange-500 w-4 h-4" />
      </button>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Sticky Tabs */}
      <div className="flex justify-center items-center gap-2 w-[140px] h-[36px] bg-green-200 text-s font-semibold rounded-t-sm">
        <TbArrowMerge className="mt-0.5 w-4 h-4" />
        ABC
        <BsThreeDots className="mt-0.5 w-4 h-4" />
      </div>

      <div className="flex justify-center items-center gap-2 w-[280px] h-[36px] bg-purple-100 text-purple-900 text-s font-semibold rounded-t-sm">
        <TbArrowMerge className="mt-0.5 w-4 h-4" />
        Answer a question
        <BsThreeDots className="mt-0.5 w-4 h-4" />
      </div>

      <div className="flex justify-center items-center gap-2 w-[140px] h-[36px] bg-orange-100 text-orange-900 text-s font-semibold rounded-t-sm">
        <TbArrowMerge className="mt-0.5 w-4 h-4" />
        Extract
        <BsThreeDots className="mt-0.5 w-4 h-4" />
      </div>

      {/* Plus Button */}
      <div className="w-[98px] h-[36px] flex items-center justify-center rounded bg-gray-100 ml-1">
        <button onClick={() => console.log('New Column added')}>
          <FaPlus className="text-gray-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetHeaderRow;
