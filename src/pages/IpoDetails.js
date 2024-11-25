import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"; // Navigation Arrow Icon
import { FaFilePdf } from "react-icons/fa"; // PDF Icon for Download
import ipoData from "../mockData/ipos.json";
import IpoDetailsCard from "../components/IpoDetailsCard";
import IpoTimeline from "../components/IpoTimeline";

const IPODetails = () => {
  const { id } = useParams(); // Get the IPO ID from URL
  const navigate = useNavigate();
  const ipoDetails = ipoData.find((ipo) => ipo.id === parseInt(id));

  if (!ipoDetails) {
    return <div className="text-center py-6">IPO not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="text-navy" onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft size={24} />
          </button>

          <img
            src={ipoDetails.logo}
            alt={ipoDetails.companyName}
            className="h-16 w-16 rounded-full"
          />

          <div>
            <h1 className="text-xl font-bold text-navy">
              {ipoDetails.companyName}
            </h1>
            <p className="text-gray-500">{ipoDetails.subTitle}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 hidden sm:flex">
    <button
      className="bg-gray-500 text-white p-2 rounded-lg shadow hover:bg-gray-600"
      aria-label="Download PDF"
    >
      <FaFilePdf size={24} />
    </button>

    <button className="bg-navy text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800">
      Apply now
    </button>
  </div>
      </div>

      <h1 className="text-navy text-3xl font-bold mb-6">IPO Details</h1>
      <IpoDetailsCard details={ipoDetails} />
      <IpoTimeline timeline={ipoDetails.timeline} />
    </div>
  );
};

export default IPODetails;
