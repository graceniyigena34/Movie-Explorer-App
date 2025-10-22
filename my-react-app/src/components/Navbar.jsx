import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
  
      <Link to="/" className="text-2xl font-bold">
        Movies Explorer
      </Link>

     
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Favorites
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
