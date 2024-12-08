import React from "react";
import Card from "./Card";
import Link from "next/link";

const RecommendationCar: React.FC = () => {
  const cars = [
    {
      image: "/Car (2).png",
      name: "All New Rush",
      type: "SUV",
      price: 72.0,
      discount: null,
      details: ["70L", "Manual", "6 People"],
      isFavorite: false,
    },
    {
      image: "/Car (4).png",
      name: "CR-V",
      type: "SUV",
      price: 72.0,
      discount: null,
      details: ["70L", "Manual", "6 People"],
      isFavorite: true,
    },
    {
      image: "/Car (5).png",
      name: "All New Terios",
      type: "SUV",
      price: 80.0,
      details: ["80L", "Manual", "7 People"],
      isFavorite: false,
    },
    {
      image: "/Car (4).png",
      name: "CR-V",
      type: "SUV",
      price: 80.0,
      discount: 100.0,
      details: ["80L", "Manual", "5 People"],
      isFavorite: true,
    },
    {
      image: "/Car (5).png",
      name: "MGZXExclusice",
      type: "Hatchback",
      price: 72.0,
      discount: 80.0,
      details: ["70L", "Manual", "4 People"],
      isFavorite: true,
    },
    {
      image: "/Car (6).png",
      name: "New MG ZS",
      type: "SUV",
      price: 72.0,
      discount: null,
      details: ["70L", "Manual", "6 People"],
      isFavorite: false,
    },
    {
      image: "/Car (5).png",
      name: "MGZXExclusice",
      type: "Hatchback",
      price: 80.0,
      details: ["80L", "Manual", "7 People"],
      isFavorite: true,
    },
    {
      image: "/Car (6).png",
      name: "New MG ZS",
      type: "SUV",
      price: 80.0,
      discount: 100.0,
      details: ["80L", "Manual", "5 People"],
      isFavorite: false,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800">Recommendation Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </div>
      {/* Show More Section */}
      <div className="flex items-center justify-between mt-6">
        {/* Empty div for alignment */}
        <div></div>
        {/* Centered Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mx-auto">
        <Link href="/category" className="text-white  text-lg font-medium">
        Show More Cars
        </Link>  
        </button>
        {/* Right-aligned text */}
        <p className="text-gray-500">120 cars</p>
      </div>
    </section>
  );
};

export default RecommendationCar;
