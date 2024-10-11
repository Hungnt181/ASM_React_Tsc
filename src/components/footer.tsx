import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-[#262626] w-full ">
      <div className="text-white max-w-6xl mx-auto ">
        <div className=" text-white grid grid-cols-4 gap-8 items-start pt-16 mb-16">
          <div>
            <img src="/logo2.svg" alt="NHShop" />
            <p className="mt-4">400 University Drive Suite 200 Coral</p>
            <p>Gables, FL 33134 USA</p>
          </div>
          <div>
            <h5 className="font-semibold text-xl text-white">Sitemap</h5>
            <ul>
              <li>
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className=" text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className=" text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h5 className="font-semibold text-xl text-white">Help</h5>
            <ul>
              <li className="mt-2">
                <Link to="/" className=" text-white hover:underline">
                  Payment Options
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/shop" className=" text-whitehover:underline">
                  Returns
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className=" text-white hover:underline">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h5 className="font-semibold text-xl text-white">Location</h5>
            <ul>
              <li className="mt-2">
                <Link to="/" className="text-white hover:underline">
                  support@euphoria.in
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/shop" className=" text-white mhover:underline">
                  Ahmedabad Main Road
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/about" className=" text-white hover:underline">
                  Udaipur, India- 313002
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white-950">
          <p className="text-center mt-8 mb-8 text-white pb-8">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
