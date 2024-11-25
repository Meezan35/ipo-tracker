import React from "react";

const About = ({ title, content }) => {
   
  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-navy mb-4">
        <span className="hidden sm:inline">About the Company</span>
        <span className="sm:hidden">{title}</span>
      </h2>
      <p className="text-gray-700 text-base leading-relaxed">{content}</p>
    </div>
  );
};

export default About;
