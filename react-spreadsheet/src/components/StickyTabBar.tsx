import { FaPlus } from 'react-icons/fa';

const StickyTabBar = () => {
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="fixed bottom-0 z-10 bg-gray-100 border-b border-gray-300 w-full">
      <div className="flex px-4 py-2 overflow-x-auto">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            onClick={()=>{console.log(`this tab is ${tab}`)}}
            
            className={`mr-4 px-2 py-1 text-sm font-medium border-b-2 ${
              index === 0
                ? 'text-green-900 border-green-800 bg-green-100'
                : 'text-gray-600 border-transparent hover:border-gray-400'
            }`}
          >
            {tab}
          </div>
        ))}

        <button className=" text-gray-500 hover:text-gray-700" onClick={()=>{console.log("add new sheet")}}>
          <FaPlus size={14}  />
        </button>
      </div>
    </div>
  );
};

export default StickyTabBar;
