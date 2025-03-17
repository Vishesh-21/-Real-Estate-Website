import React from "react";
import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full text-white py-3 px-6 md:px-16 bg-transparent z-10">
      {/* Top bar with social icons and email */}
      <div className="flex justify-between items-center border-b border-gray-400 pb-2">

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <FaFacebookF className="cursor-pointer hover:text-blue-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
          <FaPinterestP className="cursor-pointer hover:text-red-500" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaYoutube className="cursor-pointer hover:text-red-600" />
        </div>

        {/* Contact Email */}
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            contact@krystelleromy.com
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center mt-3">
        {/* Logo */}
        <div className="text-lg font-semibold">
          <span className="text-blue-400">KRYSTELLE ROMY</span> RESIDENCE
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm ">
          <a href="#" className="hover:text-blue-400">
            HOME
          </a>
          <a href="#" className="hover:text-blue-400">
            SELL
          </a>
          <a href="#" className="hover:text-blue-400">
            BUY
          </a>
          <a href="#" className="hover:text-blue-400">
            ACTIVE LISTINGS
          </a>
          <a href="#" className="hover:text-blue-400">
            CONTACT
          </a>
          <a href="#" className="hover:text-blue-400">
            BLOGS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
