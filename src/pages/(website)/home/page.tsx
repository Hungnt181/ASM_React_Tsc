import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../../Types/Product";
import { Link } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    // Sắp xếp mảng sản phẩm theo id giảm dần và giới hạn chỉ lấy 4 sản phẩm
    const sortedProducts = data
      .sort((a: Product, b: Product) => b.id - a.id) // Sắp xếp theo id giảm dần
      .slice(0, 4); // Lấy 4 sản phẩm đầu tiên
    setProduct(sortedProducts);
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
      {/* New product */}
      <div className="container max-w-6xl mx-auto mt-16">
        <div>
          {/* head */}
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-[40px]">New Products</h3>
            <button>
              <Link
                to="/"
                className="font-semibold text-[16px] text-[#CA8A04] px-4 py-2 border border-[#CA8A04]"
              >
                View all products
              </Link>
            </button>
          </div>

          {/* Pro_inf */}
          <div className="grid grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index}>
                {/* One_pro */}
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
        </div>
      </div>

      {/* Gallery */}

      <div className="container max-w-6xl mx-auto mt-16">
        <div>
          {/* head */}
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-[40px]">Gallery</h3>
            <button>
              <Link
                to="/"
                className="font-semibold text-[16px] text-[#CA8A04] px-4 py-2 border border-[#CA8A04]"
              >
                View all products
              </Link>
            </button>
          </div>

          {/* Image_div */}
          <div className=" grid grid-rows-2 gap-8">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/406/296" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}

      <div className="container max-w-6xl mx-auto mt-16">
        <div>
          {/* head */}
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-[40px]">News</h3>
            <button>
              <Link
                to="/"
                className="font-semibold text-[16px] text-[#CA8A04] px-4 py-2 border border-[#CA8A04]"
              >
                View all products
              </Link>
            </button>
          </div>

          {/* Pro_inf */}
          <div className="grid grid-cols-4 gap-8 mt-4">
            {/* One_pro */}
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4  ">
                <ul className="flex pt-4">
                  <li className="text-[#9CA3AF] mr-1">
                    <AiOutlineCalendar />
                  </li>
                  <li className="text-[12px] font-semibold text-[#9CA3AF]">
                    24/04/2024
                  </li>
                </ul>
                <Link to="/">
                  <p className="text-[#262626] mt-1 text-[20px] font-semibold text-start">
                    A bedroom must have something like this
                  </p>
                </Link>
                <button className="mt-3 w-[121px] px-22 mb-4 flex justify-between">
                  <Link
                    to="/"
                    className=" font-semibold text-[16px] text-[#EF4444] mt-1 mb-1 "
                  >
                    Xem chi tiết
                  </Link>
                  <span className="text-[#EF4444]  mt-2 mb-1">
                    <AiOutlineArrowRight className="w-6 h-5 font-semibold" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 ">
                <ul className="flex pt-4">
                  <li className="text-[#9CA3AF] mr-1">
                    <AiOutlineCalendar />
                  </li>
                  <li className="text-[12px] font-semibold text-[#9CA3AF]">
                    24/04/2024
                  </li>
                </ul>
                <Link to="/">
                  <p className="text-[#262626] mt-1 text-[20px] font-semibold  text-start">
                    A bedroom must have something like this
                  </p>
                </Link>
                <button className="mt-3 w-[121px] px-22  mb-4 flex justify-between">
                  <Link
                    to="/"
                    className=" font-semibold text-[16px] text-[#EF4444] mt-1 mb-1 "
                  >
                    Xem chi tiết
                  </Link>
                  <span className="text-[#EF4444]  mt-2 mb-1">
                    <AiOutlineArrowRight className="w-6 h-5 font-semibold" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4  ">
                <ul className="flex pt-4">
                  <li className="text-[#9CA3AF] mr-1">
                    <AiOutlineCalendar />
                  </li>
                  <li className="text-[12px] font-semibold text-[#9CA3AF]">
                    24/04/2024
                  </li>
                </ul>
                <Link to="/">
                  <p className="text-[#262626] mt-1 text-[20px] font-semibold text-start">
                    A bedroom must have something like this
                  </p>
                </Link>
                <button className="mt-3 w-[121px] px-22  mb-4 flex justify-between">
                  <Link
                    to="/"
                    className=" font-semibold text-[16px] text-[#EF4444] mt-1 mb-1 "
                  >
                    Xem chi tiết
                  </Link>
                  <span className="text-[#EF4444]  mt-2 mb-1">
                    <AiOutlineArrowRight className="w-6 h-5 font-semibold" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 ">
                <ul className="flex pt-4">
                  <li className="text-[#9CA3AF] mr-1">
                    <AiOutlineCalendar />
                  </li>
                  <li className="text-[12px] font-semibold text-[#9CA3AF]">
                    24/04/2024
                  </li>
                </ul>
                <Link to="/">
                  <p className="text-[#262626] mt-1 text-[20px] font-semibold text-start">
                    A bedroom must have something like this
                  </p>
                </Link>
                <button className="mt-3 w-[121px] px-22  mb-4 flex justify-between">
                  <Link
                    to="/"
                    className=" font-semibold text-[16px] text-[#EF4444] mt-1 mb-1 "
                  >
                    Xem chi tiết
                  </Link>
                  <span className="text-[#EF4444]  mt-2 mb-1">
                    <AiOutlineArrowRight className="w-6 h-5 font-semibold" />
                  </span>
                </button>
              </div>
            </div>
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

export default HomePage;
