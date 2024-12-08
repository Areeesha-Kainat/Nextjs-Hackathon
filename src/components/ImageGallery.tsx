
import React from "react";
import HeaderCard from "./HeaderCard";

const ImageGallery = () => {
  return (
    <div>
      {/* Card 2 */}
      <HeaderCard
        title="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe and comfortable facilities."
        buttonText="Rental Car"
        imageSrc="/image 8.png"
        bgClass="bg-blue-600"
      />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {["/image 8.png", "/View 2.png", "/View 3.png"].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-20 object-cover rounded-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
