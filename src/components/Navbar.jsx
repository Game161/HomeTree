// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, User, SquareLibrary, BookType, Info } from "lucide-react";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#F4FCF9] p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-bold text-xl flex items-center space-x-2">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"
            }
          >
            <img src="/pic/booktree2.png" alt="BookTree" className="h-20" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 relative">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-black flex items-center"
            >
              <BookType size={18} className="inline-block mr-1" /> หมวดหมู่
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-2 border border-gray-200">
                <ul className="text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">นวนิยาย</li>
                  <li className="px-4 py-2 hover:bg-gray-100">นิยาย</li>
                  <li className="px-4 py-2 hover:bg-gray-100">จิตวิทยา</li>
                  <li className="px-4 py-2 hover:bg-gray-100">ธุรกิจ</li>
                  <li className="px-4 py-2 hover:bg-gray-100">การ์ตูน</li>
                  <li className="px-4 py-2 hover:bg-gray-100">สุขภาพ</li>
                  <li className="px-4 py-2 hover:bg-gray-100">สารคดี</li>
                </ul>
              </div>
            )}
          </div>

          <NavLink
            to="/readings"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"
            }
          >
            <SquareLibrary size={18} className="inline-block mr-1" /> คลังหนังสือ
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"
            }
          >
            <Info size={18} className="inline-block mr-1" /> เกี่ยวกับ
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white px-3 py-1 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="ค้นหาข้อมูล"
            className="outline-none text-sm text-gray-700"
          />
          <Search size={18} className="text-gray-500 ml-2" />
        </div>

        {/* User Info */}
        <div className="relative">
        <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"
            }
          >
          <button
         
            className="text-gray-700 hover:text-black flex items-center"
          >
            <User size={20} className="mr-1" /> เข้าสู่ระบบ
          </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
