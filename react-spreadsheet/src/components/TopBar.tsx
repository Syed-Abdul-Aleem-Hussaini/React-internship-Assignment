import React from 'react';
import { Bell, GitCompareArrows,ArrowDownToLine, ChevronDown, ArrowDownUp, SquareLibrary,ChevronsRight,ListFilter,ArrowUpFromLine ,Share2 ,Table2 } from 'lucide-react';



import { VscEyeClosed } from "react-icons/vsc";

const TopBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      {/* First Row: Breadcrumbs + Search + Buttons */}
      <div className="flex justify-between  items-center  px-4 py-2 text-sm  bg-gray-100">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-green-600 font-medium"><Table2  size={23}  /></span>
          <span>Workspace  </span>
          <span>›</span>
          <span>Folder 2</span>
          <span>›</span>
          <span className="text-black font-semibold">Spreadsheet 3</span>
          <ChevronDown size={14} className="ml-1" />
        </div>

        {/* Right Side: Search + Actions */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search within sheet"
            className="input input-sm input-bordered  w-60 text-sm bg-gray-200"
          />
          <div className="indicator">
                        <Bell size={21} className="text-gray-600 hover:animate-bounce" />



            <span className="indicator-item badge badge-success badge-xs top-0 right-0 bg-green-800 border-green-800 text-xxxxxxs text-white">2</span>
          </div>

          <div className='flex  items-center gap-3 '>

            <div className="avatar">
            <div className="w-8 rounded-full ring-1 ring-gray-200">
              <img src="https://i.pravatar.cc/300" alt="user" />
             
            </div>
          </div>
           <div className='flex flex-col leading-tight'>
            <span className='font-bold text-sm text-gray-900'>Abdul Aleem</span>
            <span className='text-xs text-gray-500'>aleemsd127@gmail.com</span>

           </div>
          </div>
        
        </div>
      </div>

      {/* Second Row: Toolbar Actions */}
      <div className="flex justify-between items-center px-4 py-2 text-sm text-black border-t border-gray-300">
        <div className="flex gap-6 items-center">
          <div className='flex flex-row justify-between'>
            <span className="font-medium text-gray-700 hover:cursor-default">Tool bar  </span>
               <ChevronsRight className='text-grey-600' />
          </div>
          <button className="flex items-center gap-1  text-black hover:text-black">
            <VscEyeClosed size={20} /> Hide fields
          </button>
          <button className="flex items-center gap-1  text-black hover:text-black">
            <ArrowDownUp size={14} /> Sort
          </button>
          <button className="flex items-center gap-1  text-black hover:text-black">
            <ListFilter  size={14} /> Filter
          </button>
          <button className="flex items-center gap-1 hover:text-black">
            <SquareLibrary size={16} /> Cell view
          </button>
        </div>

        <div className="flex gap-3">
          <button className="btn btn-sm btn-outline border-gray-300 text-gray-500 "><ArrowDownToLine size={17} />Import</button>
          <button className="btn btn-sm btn-outline border-gray-300 text-gray-500"><ArrowUpFromLine size={17} />Export</button>
          <button className="btn btn-sm btn-outline border-gray-300 text-gray-500"><Share2 size={17} />Share</button>
          <button className="btn btn-sm w-35 bg-green-800 hover:bg-green-900 text-white border-gray-300">
            <GitCompareArrows size = {14} />
 New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
