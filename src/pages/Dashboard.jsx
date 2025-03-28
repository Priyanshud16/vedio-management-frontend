import React from "react";
import { FiVideo, FiUpload, FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Video Manager</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-3 bg-purple-600 text-white rounded-lg cursor-pointer">
            <FiVideo />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FiUpload />
            <span><Link to="/video-upload">Upload Video</Link></span>
          </li>
          <li className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FiSettings />
            <span>Manage Videos</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <IoMdNotificationsOutline className="text-2xl text-gray-600 cursor-pointer" />
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-gray-600">Total Videos</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <FiVideo className="text-4xl text-purple-600" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-gray-600">Total Views</h3>
              <p className="text-2xl font-bold">25,000</p>
            </div>
            <FiVideo className="text-4xl text-green-600" />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-gray-600">Total Likes</h3>
              <p className="text-2xl font-bold">5,000</p>
            </div>
            <FiVideo className="text-4xl text-blue-600" />
          </div>
        </div>

        {/* Recent Uploads */}
        {/* <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Uploads</h3>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-600">No recent uploads found.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;