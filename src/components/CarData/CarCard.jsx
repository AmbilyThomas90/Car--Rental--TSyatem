import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const { imgUrl, model, carName, automatic, speed, price } = car;

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full w-80">
        
        {/* Car Image */}
        <div className="w-full h-40 overflow-hidden">
          <img
            src={imgUrl}
            alt={carName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Car Info */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          
          {/* Car Name & Price */}
          <div>
            <h4 className="text-center text-xl font-bold text-gray-800">{carName}</h4>
            <h6 className="text-center text-gray-600 mt-1 text-lg">
              ₹{price}.00 <span className="text-sm text-gray-400">/ Day</span>
            </h6>
          </div>

          {/* Car Specs */}
          <div className="flex justify-around items-center mt-4 mb-5 text-gray-700 text-sm font-medium">
            <div className="flex flex-col items-center gap-1">
              <i className="ri-roadster-line text-blue-500 text-xl"></i>
              <span>{model}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <i className="ri-settings-5-line text-green-500 text-xl"></i>
              <span>{automatic}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <i className="ri-timer-flash-line text-red-500 text-xl"></i>
              <span>{speed}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {/* Rent Button -> BookingForm Page */}
            <Link
              to="/booking"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Rent
            </Link>

            {/* More Info Button */}
            <Link
              to={`/cars/${carName}`}
              className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
