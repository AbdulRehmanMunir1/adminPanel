// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FiHome, FiSearch, FiSettings, FiLogOut, FiPieChart } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
   <>
   <div className='w-[25%] h-screen rounded-md bg-third flex flex-col gap-1 '>
          <div className='w-100 py-10 border-b-4 border-pur rounded-md'><h1 className='text-[140%] text-center font-extrabold tracking-tighter cursor-pointer'><span className='text-pur'>ADMIN</span> PANEL</h1></div>
          <div>
            <nav className="flex flex-col mt-2 gap-3 " >
              <Link to="/" className="flex gap-2 p-1 items-center hover:text-white hover:bg-zinc-600">
                <FiHome className="w-16 text-pur" />
                <span>Dashboard</span>
              </Link>
              <Link to="/schedule" className="flex gap-2 p-1 items-center hover:text-white hover:bg-zinc-600">
                <FiPieChart className="w-16 text-pur" />
                <span>Schedule Classes</span>
              </Link>
              <Link to="/search-content" className="flex gap-2 p-1 items-center hover:text-white hover:bg-zinc-600">
                <FiSearch className="w-16 text-pur" />
                <span>Smart Content Retriever</span>
              </Link>
              <Link to="/settings" className="flex gap-2 p-1 items-center hover:text-white hover:bg-zinc-600">
                <FiSettings className="w-16 text-pur" />
                <span>Settings </span>
              </Link>
              <Link to="/logout" className="flex gap-2 p-1 items-center hover:text-white hover:bg-zinc-600">
                <FiLogOut className="w-16 text-pur" />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>
   </>
  );
};

export default Sidebar;
