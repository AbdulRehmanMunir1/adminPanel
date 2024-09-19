import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        {/* Header Section */}
        <div className="w-full flex flex-col mb-5 border-b-4 border-pur bg-zinc-800 rounded-lg tracking-tighter  text-center p-2">
          <h1 className="text-[130%] font-extrabold"><span className='text-purple-700'>DASH</span>B<span className='text-purple-700'>O</span>ARD</h1>
          <p className="text-zinc-400">Overview of the system's performance and statistics</p>
        </div>
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-5  ">
          {/* Total Students */}
          <div className="flex  items-center gap-3 p-2 rounded-md bg-fourth">
            <div className=" flex items-center justify-center text-pur bg-primary rounded-full w-10 h-10  ">
              <FaUserGraduate size={24} />
            </div>
            <div>
              <p className="p-3 font-semibold tracking-tighter ">Total Students</p>
              <h2 className="text-center">1,200</h2>
            </div>
          </div>

          {/* Total Teachers */}
          <div className="flex  items-center gap-3 p-2 rounded-md bg-fourth">
            <div className="flex items-center justify-center text-pur bg-primary rounded-full w-10 h-10  ">
              <FaChalkboardTeacher size={24} />
            </div>
            <div>
              <p className="p-3 font-semibold tracking-tighter ">Total Teachers</p>
              <h2 className="text-center">80</h2>
            </div>
          </div>

          {/* Today's Attendance */}
          <div className="flex  items-center gap-3 p-2 rounded-md bg-fourth">
            <div className="flex items-center justify-center text-pur bg-primary rounded-full w-10 h-10  ">
              <FaCalendarAlt size={24} />
            </div>
            <div>
              <p className="p-3 font-semibold tracking-tighter ">Today’s Classes</p>
              <h2 className="text-center">5</h2>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-fourth p-4 rounded-lg">
          <h3 className="text-[140%] font-semibold mb-4 border-b-2 border-pur">Todays Classes</h3>
          <ul className="flex flex-col gap-3 ">
            <li className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 text-white rounded-full">
                <FaUsers size={18} />
              </div>
              <div>
                <p className="text-sm">John Doe marked present</p>
                <span className="text-gray-400 text-xs">2 hours ago</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-2 bg-green-500 text-white rounded-full">
                <FaUsers size={18} />
              </div>
              <div>
                <p className="text-sm ">Mary Jane marked absent</p>
                <span className="text-gray-400 text-xs">3 hours ago</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500 text-white rounded-full">
                <FaUsers size={18} />
              </div>
              <div>
                <p className="text-sm ">Alex Johnson marked late</p>
                <span className="text-gray-400 text-xs">4 hours ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
