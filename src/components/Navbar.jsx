import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-9 md:px-16 lg:px-24">
      <div className="container py-3 flex justify-center md:justify-between items-center">
        <div className="hidden md:inline text-3xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          Karan Kashyap
        </div>

        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <button
          onClick={() => (window.location.href = "tel:+918595998512")}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
             transform transition-transform duration-300 hover:scale-105 
             px-6 py-2 rounded-full shadow-lg hover:shadow-xl"
        >
          Contact me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
