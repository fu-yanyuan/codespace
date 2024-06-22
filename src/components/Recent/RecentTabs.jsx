import { useState } from "react";

const RecentTabs = ({setTabValue}) => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setTabValue(tabIndex)
  };

  return (
    <div className="flex flex-row items-center bg-neutral-800 px-4">
      {/* <div className="flex">
        <a className="btn btn-sm btn-ghost text-base text-neutral-100">Recent AC</a>
      </div> */}
      <div className='flex-1'>
        {/* <RecentTabs /> */}
        {/* <RecentTabs setTabValue={setTabValue} /> */}
        <div role='tablist' className="tabs flex">
          <a className={`tab tab-bordered rounded-lg font-bold text-base text-neutral-100 hover:bg-neutral-700 ${activeTab === 1 ? 'tab-active outline outline-green-400' : ''}`} 
              onClick={() => handleTabClick(1)}>Recent Solved</a>
          <a className={`tab tab-bordered rounded-lg font-bold text-base text-neutral-100 hover:bg-neutral-700 ${activeTab === 2 ? 'tab-active outline outline-green-400' : ''}`} 
              onClick={() => handleTabClick(2)}>Recent Modified</a>
          <a className={`tab tab-bordered rounded-lg font-bold text-base text-neutral-100 hover:bg-neutral-700 ${activeTab === 3 ? 'tab-active outline outline-green-400' : ''}`} 
              onClick={() => handleTabClick(3)}>Recent Solved All</a>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-sm input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>
  )
}

export default RecentTabs