import React, { useState } from 'react';
import { logo } from '../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    
        <div className="text-navy text-2xl font-bold flex items-center">
          <img src={logo} alt="Ventura Logo" className="h-8 mr-2" />
          <span className="font-sora">ventura</span>
        </div>

     
        <button 
          className="md:hidden text-navy focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
    
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

       

  
        <div className="hidden md:flex space-x-4">
          <button className="text-navy border border-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-dark transition-colors">
            Create Account
          </button>
        </div>
      </div>

 
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <button className="text-navy border border-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors w-3/4">
            Login
          </button>
          <button className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-dark transition-colors w-3/4">
            Create Account
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
