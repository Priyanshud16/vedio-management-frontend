import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Sierra</div>
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer"><Link to="/signup">Signup</Link></li>
         
        </ul>
        <button className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

