import React from "react";

const IpoDetailsCard = ({ details }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
       
        <div className="sm:block md:block">
          <p className="text-gray-500">Issue size</p>
          <p className="font-semibold text-navy">{details.issueSize}</p>
        </div>

       
        <div className="sm:block md:block">
          <p className="text-gray-500">Price range</p>
          <p className="font-semibold text-navy">{details.priceRange}</p>
        </div>

   
        <div className="sm:block md:block">
          <p className="text-gray-500">Minimum amount</p>
          <p className="font-semibold text-navy">{details.minInvestment}</p>
        </div>

    
        <div className="sm:block md:block">
          <p className="text-gray-500">Lot size</p>
          <p className="font-semibold text-navy">{details.lotSize}</p>
        </div>

     
        <div className="sm:block md:block">
          <p className="text-gray-500">Issue dates</p>
          <p className="font-semibold text-navy">{details.issueDate}</p>
        </div>

     
        <div className="hidden md:block">
          <p className="text-gray-500">Listed on</p>
          <p className="font-semibold text-navy">{details.listedOn}</p>
        </div>

       
        <div className="hidden md:block">
          <p className="text-gray-500">Listed price</p>
          <p className="font-semibold text-navy">{details.listedPrice}</p>
        </div>

     
        <div className="hidden md:block">
          <p className="text-gray-500">Listing gains</p>
          <p className="font-semibold text-navy">
            {details.listingGains}{" "}
            <span className="text-red-500">({details.gainPercentage})</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoDetailsCard;
