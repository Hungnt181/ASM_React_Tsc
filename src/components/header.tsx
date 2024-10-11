import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="mb-4">
      <div className="max-w-6xl mx-auto mt-2">
        <div className="grid grid-cols-3 gap-8 items-center ">
          <div className="">
            <img src="/logo.svg" alt="NHShop" />
          </div>
          <nav>
            <ul className="flex justify-center space-x-5 text-xl font-medium">
              <li>
                <Link to="/" className=" hover:text-yellow-600">
                  Home
                </Link>{" "}
              </li>
              <li>
                <Link to="/shop" className=" hover:text-yellow-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className=" hover:text-yellow-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className=" hover:text-yellow-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex  space-x-4 justify-end">
            <Link to="/auth/signup">
              <AiOutlineUser />
            </Link>
            <Link to="/search">
              <AiOutlineSearch />
            </Link>
            <Link to="/wishlist">
              <AiOutlineHeart />
            </Link>
            <Link to="/wishlist">
              <AiOutlineShoppingCart />{" "}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
