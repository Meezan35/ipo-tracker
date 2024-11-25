import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import ipoData from "../mockData/ipos.json";

const IPOList = () => {
  const [ipos, setIpos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIpos(ipoData); 
  }, []);

  const handleIPOClick = (id) => {
    navigate(`/ipo-details/${id}`); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-navy text-3xl font-bold mb-6">IPO List</h1>

      {/* Web View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-navy text-white">
            <tr>
              <th className="text-left px-6 py-3">Company</th>
              <th className="text-left px-6 py-3">Issue Date</th>
              <th className="text-left px-6 py-3">Issue Size</th>
              <th className="text-left px-6 py-3">Price Range</th>
              <th className="text-left px-6 py-3">Min Invest/Qty</th>
            </tr>
          </thead>
          <tbody>
            {ipos.map((ipo, index) => (
              <tr 
                key={ipo.id} 
                onClick={() => handleIPOClick(ipo.id)} 
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 flex items-center space-x-4">
                  <img src={ipo.logo} alt={ipo.companyName} className="h-12 w-12 rounded-full" />
                  <div>
                    <div className="font-bold text-navy">{ipo.companyName}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{ipo.issueDate}</td>
                <td className="px-6 py-4 text-gray-700">{ipo.issueSize}</td>
                <td className="px-6 py-4 text-gray-700">{ipo.priceRange}</td>
                <td className="px-6 py-4">
                  <div className="text-gray-700">{ipo.minInvestment}</div>
                  <div className="text-sm text-gray-500">{ipo.quantity}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4 mt-4">
        {ipos.map((ipo) => (
          <div 
            key={ipo.id} 
            onClick={() => handleIPOClick(ipo.id)} 
            className="border border-gray-200 bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 cursor-pointer"
          >
            <img src={ipo.logo} alt={ipo.companyName} className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-bold text-navy text-lg">{ipo.companyName}</div>
              <div className="text-gray-500 text-sm">{ipo.issueDate}</div>
              <div className="text-gray-700">
              <strong>Price Range:</strong> {ipo.priceRange}
            </div>
              <div className="text-gray-700 text-sm">
                <strong>Issue Size:</strong> {ipo.issueSize}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOList;
