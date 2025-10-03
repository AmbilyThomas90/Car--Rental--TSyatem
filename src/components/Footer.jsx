import React from "react";
import { Link } from "react-router-dom";
import { BsFillCarFrontFill } from "react-icons/bs";

const Footer = ({ quickLinks, year }) => {
  return (
     <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* Logo and description */}
          <div>
            <h1 className="text-2xl font-bold mb-3">
              <Link to="/home" className="flex items-center gap-3">
                <i className="ri-car-line text-red-500 text-3xl"></i>
                   <BsFillCarFrontFill className="text-2xl" />
                <span>
                  Rentora Drive <br /> Car Service
                </span>
              </Link>
            </h1>
           
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Office-Time</h5>
            <ul className="space-y-2">
             
                <li  className="hover:text-red-500 transition-colors">
                     <p className="text-sm"> 09.00AM - 5:00PM [Monday-Friday]</p>
                 
                </li>
            
            </ul>
          </div>


          {/* Head Office Info */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Head Office</h5>
            <p className="text-sm mb-1">
              Kochi, Kerala · 
            </p>
            <p className="text-sm mb-1">Phone: +91 1234567890</p>
            <p className="text-sm mb-1">E-mail: Rentor#Drive@gmail.com</p>
           
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Newsletter</h5>
            <p className="text-sm mb-2">Subscribe to our newsletter</p>
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="flex-1 px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition-colors">
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright
        <div className="mt-10 border-t border-gray-300 pt-4">
          <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-1">
            <i className="ri-copyright-line"></i> Copyright {year}, Developed By Rahul Bamniya. All Rights Reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
