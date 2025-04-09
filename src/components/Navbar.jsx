import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 p-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="relative text-white text-3xl font-bold animate-pulse">
  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
    Pixels.
  </span> 
  <span className="bg-gradient-to-r from-cyan-500 via-green-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-x delay-500">
    Ai
  </span>
</div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-green-300">
              Home
            </a>
          </li>

          <li>
            <a href="/video" className="hover:text-gray-300">
              Videos
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu} className="focus:outline-none">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-white">
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/video" className="block px-4 py-2 hover:bg-gray-700">
                Videos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
