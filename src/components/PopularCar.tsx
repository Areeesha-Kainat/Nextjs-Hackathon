

import React from "react";
import Card from "./Card";
import Link from "next/link";

const PopularCar: React.FC = () => {
  const cars = [
    {
      image: "/image 7.png",
      name: "Koenigsegg",
      type: "Sport",
      price: 99.0,
      discount: null,
      details: ["90L", "Manual", "2 People"],
      isFavorite: true,
    },
    {
      image: "/image 8.png",
      name: "Nissan GT-R",
      type: "Sport",
      price: 80.0,
      discount: 100.0,
      details: ["80L", "Manual", "2 People"],
      isFavorite: false,
    },
    {
      image: "/Car.png",
      name: "Rolls Royce",
      type: "Sedan",
      price: 96.0,
      details: ["70L", "Manual", "4 People"],
      isFavorite: true,
    },
    {
      image: "/image 8.png",
      name: "Nissan GT-R",
      type: "Sedan",
      price: 96.0,
      details: ["70L", "Manual", "4 People"],
      isFavorite: false,
    },
  ];

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Popular Cars</h2>
        <Link href="/category" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </div>
    </section>
  );
};

export default PopularCar;
