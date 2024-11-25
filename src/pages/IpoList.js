import React, { useEffect, useState } from "react";
import ipoData from "../mockData/ipos.json";

const IPOList = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    setIpos(ipoData); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-navy text-3xl font-bold font-sora mb-6">IPO List</h1>

  
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-navy text-white">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-sm uppercase tracking-wide">Company / Issue Date</th>
              <th className="text-left px-6 py-3 font-medium text-sm uppercase tracking-wide">Issue Size</th>
              <th className="text-left px-6 py-3 font-medium text-sm uppercase tracking-wide">Price Range</th>
              <th className="text-left px-6 py-3 font-medium text-sm uppercase tracking-wide">Min Invest/Qty</th>
            </tr>
          </thead>
          <tbody>
            {ipos.map((ipo, index) => (
              <tr key={ipo.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}>
                <td className="px-6 py-4">
                  <div className="font-bold text-navy">{ipo.companyName}</div>
                  <div className="text-gray-500">{ipo.issueDate}</div>
                </td>
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
          <div key={ipo.id} className="border border-gray-200 bg-white rounded-lg shadow-md p-4">
            <div className="font-bold text-navy text-lg">{ipo.companyName}</div>
            <div className="text-gray-500 text-sm mb-2">{ipo.issueDate}</div>
            <div className="text-gray-700">
              <strong>Issue Size:</strong> {ipo.issueSize}
            </div>
            <div className="text-gray-700">
              <strong>Price Range:</strong> {ipo.priceRange}
            </div>
            <div className="text-gray-700">
              <strong>Min Investment:</strong> {ipo.minInvestment}
            </div>
            <div className="text-sm text-gray-500">
              <strong>Quantity:</strong> {ipo.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOList;
