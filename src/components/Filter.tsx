
import React from "react";

const Filter = () => {
  return (
    <aside className="bg-white p-4 sm:p-6 shadow-md rounded-md">
      {/* Type */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">Type</h3>
        <ul className="space-y-2">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <li key={type} className="flex items-center gap-2">
              <input type="checkbox" id={type} className="h-4 w-4" />
              <label htmlFor={type} className="text-sm text-gray-700">
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">Capacity</h3>
        <ul className="space-y-2">
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
            <li key={capacity} className="flex items-center gap-2">
              <input type="checkbox" id={capacity} className="h-4 w-4" />
              <label htmlFor={capacity} className="text-sm text-gray-700">
                {capacity}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-lg mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full mt-2 accent-blue-500"
        />
        <div className="flex items-center justify-between text-gray-700">
          <span>Max. $100.00</span>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
