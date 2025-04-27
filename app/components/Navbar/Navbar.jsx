import React from 'react'

function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-900 text-white shadow-lg">
        <div className="text-2xl font-extrabold text-gray-100">
          Edulearn
        </div>


        <div className="flex gap-6 text-gray-100 text-xl font-lg">
          <a href="#" className="relative group">
            <span className="text-gray-450 group-hover:text-white transition-colors duration-300">Home</span>
          </a>
          <a href="#" className="relative group">
            <span className="text-gray-450 group-hover:text-white transition-colors duration-300">Quiz</span>
          </a>
          <a href="#" className="relative group">
            <span className="text-gray-450 group-hover:text-white transition-colors duration-300">Study Timer</span>
          </a>
          <a href="#" className="relative group">
            <span className="text-gray-450 group-hover:text-white transition-colors duration-300">Doubt Solver</span>
          </a>
          <a href="#" className="relative group">
            <span className="text-gray-450 group-hover:text-white transition-colors duration-300">Daily Challenge</span>
          </a>
        </div>
      </nav>
    );
  }
  
export default Navbar;
