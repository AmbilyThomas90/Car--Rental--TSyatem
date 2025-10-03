import React from "react";
import HeroSlider from "../components/HeroSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; 
import carData from "../data/carData";  // ✅ use default export
import CarCard from "../components/CarData/CarCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div>
        <HeroSlider />
        <div className="flex justify-center px-5 pb-5 w">
  <input
    type="text"
    placeholder="Find Your Best Car Here..."
    className="w-full max-w-md p-3 rounded-xl bg-white text-blue-500 placeholder-gray-400 
               focus:ring-red-500 focus:border-red-500 focus:outline-none 
               transition duration-150"
  />
</div>


        {/* <div>
          <Link to="/about">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to About Page
            </button>
          </Link>
        </div> */}
    {/* Section 2: Using CarCard */}
       <div className="flex flex-wrap -m-3">
  {carData.map((car) => (
    <div key={car.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-3">
      <CarCard car={car} />
    </div>
  ))}
</div>

        {/* Section 1: Cars in a grid
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Find the right car now!
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {carData.map((car) => (
                <div key={car.id} className="group relative">
                  <img
                    alt={car.imageAlt}
                    src={car.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 object-fill"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={car.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {car.carTitle}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{car.color}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

    
      </div>
      <br/>
       <br/>
      <div>
         
  <Footer/>
</div>

      
    </>
  );
}

export default Home;
