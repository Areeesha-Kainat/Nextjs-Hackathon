import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Importing filled and outlined stars from Font Awesome

const Reviews = () => {
  const reviews = [
    {
      name: "Alex Stanton",
      role: "CEO at Bukalapak",
      comment:
        "We are very happy with the service from the MORENT App. Morent has low prices...",
      date: "21 July 2022",
      profilePicture: "/Profil.png", // Replace with actual image path
    },
    {
      name: "Skylar Dias",
      role: "CEO at Amazon",
      comment:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices...",
      date: "20 July 2022",
      profilePicture: "/Profill.png", // Replace with actual image path
    },
  ];

  return (
    <section className="mt-8">
      <div className="flex items-center mb-4 ml-2">
        {/* Review heading */}
        <h2 className="text-xl font-bold text-gray-800">Reviews</h2>
        {/* Blue square with number 13 */}
        <div className="w-8 h-8 bg-blue-600 text-white flex justify-center items-center rounded-full ml-3">
          <span className="font-bold text-sm">13</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm">
            <div className="flex justify-between mb-2">
              <div className="flex items-center space-x-3">
                {/* Profile picture */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={review.profilePicture} alt={review.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <p className="text-sm text-gray-500">{review.date}</p>
                {/* Yellow star icons (4 filled, 1 outlined) */}
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                  <FaRegStar className="text-yellow-400" size={16} />
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
