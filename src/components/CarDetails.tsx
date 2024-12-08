import Link from "next/link";
import React from "react";
import { FiStar } from "react-icons/fi";

const CarDetails = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Nissan GT-R</h1>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-2">440+ Reviewer</p>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </div>
        <button className="mt-4 sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF5A5F"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Details */}
      <p className="text-gray-700 mb-4">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the “race track”.
      </p>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { label: "Type", value: "Sport" },
          { label: "Capacity", value: "2" },
          { label: "Steering", value: "Manual" },
          { label: "Gasoline", value: "70L" },
        ].map((spec, index) => (
          <div key={index} className="flex justify-between">
            <h4 className="text-gray-500">{spec.label}</h4>
            <p className="text-black">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-800">$80.00</div>
          <div className="text-sm text-gray-500 line-through">$100.00</div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <Link href="/payment">
        Rent Now
   
  </Link>  
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
