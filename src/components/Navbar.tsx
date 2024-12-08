
import Image from "next/image";
import { FaSearch, FaSlidersH, FaBell, FaHeart, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-6 bg-white shadow-sm ">
      {/* Top Section: Logo and Profile */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <div className="text-blue-600 font-[700] text-[24px] md:text-[32px]">
          <span className="px-2 py-1 rounded">MORENT</span>
        </div>

        {/* Profile Image (visible only on smaller screens) */}
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 overflow-hidden md:hidden">
          <Image
            src="/profil.png" // Replace with your profile image path
            alt="Profile"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg mt-4 md:mt-0 md:w-1/2" style={{ height: "44px" }}>
        <FaSearch className="text-gray-500 ml-3" />
        <input
          type="text"
          placeholder="Search something here"
          className="ml-2 bg-transparent outline-none w-full px-2"
        />
        <FaSlidersH className="text-gray-500 mr-3" />
      </div>

      {/* Icons Section */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Heart Icon */}
        <button>
          <FaHeart className="text-gray-600 w-5 h-5" />
        </button>

        {/* Bell Icon with notification dot */}
        <button className="relative">
          <FaBell className="text-gray-600 w-5 h-5" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
            •
          </span>
        </button>

        {/* Settings Icon */}
        <button>
          <FaCog className="text-gray-600 w-5 h-5" />
        </button>

        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 overflow-hidden">
          <Image
            src="/profil.png" // Replace with your profile image path
            alt="Profile"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
}