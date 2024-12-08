
import Link from "next/link";
import React from "react";

type Car = {
  name: string;
  type: string;
  price: string;
  oldPrice?: string;
  features: string[];
  image: string;
  isFavorite: boolean;
};

const recentCars: Car[] = [
  {
    name: "Koenigsegg",
    type: "Sport",
    price: "$99.00/day",
    features: ["90L", "Manual", "2 People"],
    image: "/image 7.png", // Replace with your image path
    isFavorite: true,
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    price: "$80.00/day",
    oldPrice: "$100.00",
    features: ["80L", "Manual", "2 People"],
    image: "/image 8.png",
    isFavorite: false,
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    price: "$96.00/day",
    features: ["70L", "Manual", "4 People"],
    image: "/Car.png",
    isFavorite: false,
  },
];

const recommendedCars: Car[] = [
  {
    name: "All New Rush",
    type: "SUV",
    price: "$72.00/day",
    oldPrice: "$80.00",
    features: ["70L", "Manual", "6 People"],
    image: "/Car (4).png",
    isFavorite: false,
  },
  {
    name: "CR-V",
    type: "SUV",
    price: "$80.00/day",
    features: ["80L", "Manual", "6 People"],
    image: "/Car (2).png",
    isFavorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    price: "$74.00/day",
    features: ["90L", "Manual", "6 People"],
    image: "/Car (3).png",
    isFavorite: false,
  },
];

const CarList: React.FC = () => {
  const renderCarCard = (car: Car) => (
    <div
      key={car.name}
      className="bg-white p-4 shadow-md rounded-md flex flex-col"
    >
      {/* Header: Name and Heart Icon */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{car.name}</h3>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={car.isFavorite ? "#FF5A5F" : "none"}
            stroke="#FF5A5F"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Title/Type */}
      <p className="text-sm text-gray-500 mb-4">{car.type}</p>

      {/* Image */}
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Details Section */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <img src="/gas-station.png" alt="Fuel" className="w-5 h-5" />
          <span>{car.features[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/manual.png" alt="Manual" className="w-5 h-5" />
          <span>{car.features[1]}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/profile-2user.png" alt="People" className="w-5 h-5" />
          <span>{car.features[2]}</span>
        </div>
      </div>

      {/* Price and Rent Now */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-blue-600">{car.price}</p>
          {car.oldPrice && (
            <p className="text-sm text-gray-500 line-through">{car.oldPrice}</p>
          )}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        <Link href="/payment">
        Rent Now
   
  </Link>  
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      {/* Recent Cars Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Car</h2>
          <button className="text-blue-500">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCars.map((car) => renderCarCard(car))}
        </div>
      </div>

      {/* Recommendation Cars Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recommendation Car</h2>
          <button className="text-blue-500">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCars.map((car) => renderCarCard(car))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
