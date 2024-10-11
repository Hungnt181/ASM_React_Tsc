import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../../Types/Product";
import { Link } from "react-router-dom";
const ShopPage = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setProduct(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main>
      {/* Banner */}
      <div>
        <img src="https://picsum.photos/1920/720" alt="Banner" />
      </div>
      {/* Content */}
      <div className="grid grid-cols-12 space-x-8 max-w-6xl mx-auto mt-16">
        {/* catalog */}
        <div className="col-span-3">
          <h5 className="tex-[20px] font-semibold">Categories</h5>
          <ul className="mt-4">
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Cafe Chair</Link>
            </li>
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Sofa</Link>
            </li>
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Lamp</Link>
            </li>
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Carpet</Link>
            </li>
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Cabinet</Link>
            </li>
            <li className="mt-2 tex-[16px] font-medium text-[#737373] hover:text-[#CA8A04]">
              <Link to="/">Tea table</Link>
            </li>
          </ul>
        </div>
        {/* box_right_product */}
        <div className="col-span-9 ">
          {/* product */}
          <div className="grid grid-cols-3 gap-8">
            {/* One Pro */}
            {products.map((product, index) => (
              <div key={index}>
                <div>
                  <img
                    className=" w-[296px] h-[301px]"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className=" pl-4 pr-4 bg-[#F5F5F5]">
                  <Link to={`/product/${product.id}`}>
                    <h5 className="font-semibold text-[20px] pt-4">
                      {product.name}
                    </h5>
                  </Link>
                  <p className="text-[#898989] mt-1">Stylish cafe chair</p>
                  <p className="font-semibold text-[20px] text-[#EF4444] mt-2">
                    {product.price} $
                  </p>
                  <button className="mt-3 w-full px-22 py-2 border border-[#CA8A04] mb-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-semibold text-[16px] text-[#CA8A04] "
                    >
                      View all products
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* button */}
          <div className="mt-8 ">
            <button className="w-[60px] h-[60px] text-[20px] font-medium justify-center items-center bg-[#CA8A04] rounded-[10px] mr-4">
              1
            </button>
            <button className="w-[60px] h-[60px] text-[20px] font-medium justify-center items-center bg-[#A3A3A3] rounded-[10px] mr-4">
              2
            </button>
            <button className="w-[60px] h-[60px] text-[20px] font-medium justify-center items-center bg-[#A3A3A3] rounded-[10px] mr-4">
              3
            </button>
            <button className="w-[98px] h-[60px] text-[20px] font-medium justify-center items-center bg-[#A3A3A3] rounded-[10px] mr-4">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* End */}

      <div className="w-full bg-[#FFF7ED] h-[186px] mt-16">
        {/*  */}
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
          {/* One_box */}
          <div className="flex mt-16 justify-center">
            <div className="mr-5">
              <img src="/High_Quality.svg" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">High Quality</h5>
              <p className="font-medium text-[16px] text-[#898989]">
                {" "}
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex mt-16 justify-center">
            <div className="mr-5">
              <img src="/Support.svg" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">24 / 7 Support</h5>
              <p className="font-medium text-[16px] text-[#898989]">
                {" "}
                Dedicated support
              </p>
            </div>
          </div>
          <div className="flex mt-16 justify-center">
            <div className="mr-5">
              <img src="/Warranty.svg" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">Warranty Protection</h5>
              <p className="font-medium text-[16px] text-[#898989]">
                {" "}
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex mt-16 justify-center">
            <div className="mr-5">
              <img src="/Vector.svg" alt="" />
            </div>
            <div>
              <h5 className="font-semibold text-[20px]">Free Shipping</h5>
              <p className="font-medium text-[16px] text-[#898989]">
                {" "}
                Order over 150 $
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
