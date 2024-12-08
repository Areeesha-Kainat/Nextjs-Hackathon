
import Link from "next/link";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  type: string;
  price: number;
  discount?: number | null;
  details: string[];
  isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  type,
  price,
  discount,
  details,
  isFavorite,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-black text-lg">{name}</h3>
        <button>
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF5A5F"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#90A3BF"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12.1 21.55l-1.1-1.05C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.51z" />
            </svg>
          )}
        </button>
      </div>

      {/* Subheader */}
      <p className="text-sm text-gray-500 mb-4">{type}</p>

      {/* Car Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />

      {/* Details */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <img src="/gas-station.png" alt="Fuel" className="w-5 h-5" />
          <span>{details[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/manual.png" alt="Manual" className="w-5 h-5" />
          <span>{details[1]}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/profile-2user.png" alt="People" className="w-5 h-5" />
          <span>{details[2]}</span>
        </div>
      </div>

      {/* Price, Day, Button, and Discount */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-black text-xl font-bold">${price.toFixed(2)}/ Day</div>
         
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <Link href="/car-details">
       
        Rent Now
       
      </Link>

        </button>
      </div>
      {discount && (
        <div className="text-gray-500 text-sm mt-2">
          Discount: ${discount.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Card;



