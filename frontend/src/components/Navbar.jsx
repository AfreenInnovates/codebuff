import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 bg-black bg-opacity-70 backdrop-blur-sm fixed top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to={"/"}><div className="text-teal-400 text-xl font-bold">SmartRoute</div></Link>
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Demo</li>
          <li className="hover:text-white cursor-pointer">Testimonials</li>
        </ul>
        <button className="md:hidden text-gray-300">☰</button>
      </nav>
    </header>
  );
};

export default Navbar;
