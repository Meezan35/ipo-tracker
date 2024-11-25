import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-4">
      <div className="container mx-auto px-4 text-center">
        
     
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-300">
          We provide real-time IPO listings and detailed insights to help you make informed investment decisions effortlessly.
          </p>
        </div>
        
       
        
       
      </div>


      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Ventura Securities. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
