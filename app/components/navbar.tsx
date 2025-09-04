
import Link from "next/link";

export default function Navbar() {
  return (
  
  <nav className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-50 font-mono">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer">
              botSphere
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors font-medium">
              About
            </a>
            <a href="#explore" className="text-gray-700 hover:text-black transition-colors font-medium">
              Explore
            </a>
            <a href="#community" className="text-gray-700 hover:text-black transition-colors font-medium">
              Community
            </a>

          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </nav>


  )
};