import React from "react";

const IpoTimeline = ({ timeline }) => {
  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold text-navy mb-4">IPO Timeline</h2>

      <div className="flex flex-col md:flex-row relative w-full">
        {timeline.map((step, index) => (
          <div
            key={index}
            className="flex items-start md:flex-1 flex-row md:flex-col relative text-center"
          >
           
            <div className="relative z-10 flex items-center md:flex-col">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  step.completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.completed ? "✔" : index + 1}
              </div>

          
              {index < timeline.length - 1 && (
                <div
                  className={`absolute top-8 left-4 md:hidden w-0.5 h-16 transform -translate-x-1/2 ${
                    step.completed && timeline[index + 1].completed
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>

         
            <div className="ml-4 md:ml-0 text-left md:text-center flex-1 md:mt-2 py-2">
              <p className="text-gray-700 text-sm font-semibold">{step.label}</p>
              <p className="text-gray-500 text-xs">{step.date}</p>
            </div>

         
            {index < timeline.length - 1 && (
              <div
                className={`hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 w-full ${
                  step.completed && timeline[index + 1].completed
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
                style={{
                  height: "4px", 
                  zIndex: 0, 
                  width: "100%",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IpoTimeline;
