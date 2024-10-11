import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../../../Types/Product";

const ProductDetailPage = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState<Product | null>(null);
  const getProductDetail = async () => {
    const { data } = await axios.get("http://localhost:3000/products/" + id);
    console.log(data);

    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <main className="max-w-6xl mx-auto mb-20">
      {/* Product_info */}
      <div className=" grid grid-cols-2 gap-8 mt-16">
        {/* IMAGE */}
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <div>
              <img className="w-[77px] h-[77px]" src={product?.image} alt="" />
            </div>
            <div className="mt-4">
              <img className="w-[77px] h-[77px]" src={product?.image} alt="" />
            </div>
            <div className="mt-4">
              <img className="w-[77px] h-[77px]" src={product?.image} alt="" />
            </div>
            <div className="mt-4">
              <img className="w-[77px] h-[77px]" src={product?.image} alt="" />
            </div>
            <div className="mt-4">
              <img className="w-[77px] h-[77px]" src={product?.image} alt="" />
            </div>
          </div>
          <div className="col-span-5">
            <img className="w-[515px] h-[515px]" src={product?.image} alt="" />
          </div>
        </div>
        {/* Info */}
        <div className="bg-red">
          {/* name */}
          <h5 className="text-[20px] font-medium">{product?.name}</h5>
          {/* price */}
          <h3 className="text-[40px] font-bold mt-2 text-[#EF4444]">
            {product?.price} $
          </h3>
          <div className="flex">
            <ul className="flex gap-1 border-r border-[#A3A3A3] pr-4 ">
              <li className="text-[#FFC700] flex items-center">
                <AiFillStar />
              </li>
              <li className="text-[#FFC700] flex items-center ">
                <AiFillStar />
              </li>
              <li className="text-[#FFC700] flex items-center">
                <AiFillStar />
              </li>
              <li className="text-[#FFC700] flex items-center">
                <AiFillStar />
              </li>
              <li className="text-[#FFC700] flex items-center ">
                <AiFillStar />
              </li>
            </ul>

            <p className="text-[14px] font-medium ml-4 text-[#9F9F9F] justify-center mt-0">
              5 Customer Review
            </p>
          </div>
          {/* descript */}
          <p className="mt-3 text-[#16px] font-medium ">
            {product?.description}
          </p>
          {/* size */}
          <div className="mt-4">
            <p className="text-[#A3A3A3]">Size</p>
            <ul className="flex gap-4 mt-1">
              <li className="w-[30px] h-[30px] bg-[#CA8A04] text-[#FFFFFF] text-[#13px] rounded-[5px] justify-center flex">
                <button>L</button>
              </li>
              <li className="w-[30px] h-[30px] bg-[#A3A3A3] text-[#FFFFFF] text-[#13px] rounded-[5px] justify-center flex">
                <button>XL</button>
              </li>
              <li className="w-[30px] h-[30px] bg-[#A3A3A3] text-[#FFFFFF] text-[#13px] rounded-[5px] justify-center flex">
                <button>XS</button>
              </li>
            </ul>
          </div>

          {/* color */}
          <div className="mt-4">
            <p className="text-[#A3A3A3]">Color</p>
            <div className="flex gap-4 mt-1">
              <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-[50%]"></div>
              <div className="w-[30px] h-[30px] bg-[#000000] rounded-[50%]"></div>
              <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-[50%]"></div>
            </div>
          </div>

          {/* Button quantity/buy/compare */}
          <div className="mt-8 flex border-b border-[#A3A3A3] pb-8 ">
            <div className="grid grid-cols-3 w-[123px] h-[44px] border border-[#A3A3A3] rounded-[5px] ">
              <button className="justify-center flex items-center">+</button>
              <p className=" flex justify-center items-center">1</p>
              <button className="justify-center flex items-center">-</button>
            </div>
            <div>
              <button className="justify-center flex items-center border border-[#CA8A04] rounded-[5px] w-[215px] h-[44px] ml-3 text-[#CA8A04]">
                Add To Cart
              </button>
            </div>
            <div>
              {" "}
              <button className="justify-center flex items-center border border-[#262626] rounded-[5px] w-[215px] h-[44px] ml-3 text-[#262626]">
                + Compare
              </button>
            </div>
          </div>
          {/* inf_end */}
          <div className="mt-3">
            <div className="text-[#A3A3A3] text-[16px] mb-3 ">SKU : SS001</div>
            <div className="text-[#A3A3A3] text-[16px] mb-3 ">
              Category: Sofa
            </div>
            <div className="text-[#A3A3A3] text-[16px] mb-3 ">
              Tags: Sofa, Chair, Home, Shop
            </div>
          </div>
        </div>
      </div>
      {/* product_description / comment */}
      <div>
        <ul className="flex gap-x-16 mb-4">
          <li className="text-[20px] font-semibold text-[#000000]">
            <Link to="/">Description</Link>
          </li>
          <li className="text-[20px] font-semibold text-[#A3A3A3]">
            <Link to="/">Additional Information</Link>
          </li>
          <li className="text-[20px] font-semibold text-[#A3A3A3]">
            <Link to="/">Reviews [5]</Link>
          </li>
        </ul>
        {/* content */}
        <div className=" border-t border-[#A3A3A3] pt-8">
          <p className="text-[#A3A3A3] font-medium">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#A3A3A3] mt-2 font-medium">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>

          {/* img */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <img src="https://picsum.photos/624/378" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/624/378" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Prodcut same categories */}
      <div className="container max-w-6xl mx-auto mt-16">
        <div>
          {/* head */}
          <div className="flex justify-center mb-4 ">
            <h3 className="font-semibold text-[40px] ">Related Products</h3>
          </div>

          {/* Pro_inf */}
          <div className="grid grid-cols-4 gap-8">
            <div>
              {/* One_pro */}
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 bg-[#F5F5F5]">
                <Link to="/">
                  <h5 className="font-semibold text-[20px] pt-4">Syltherine</h5>
                </Link>
                <p className="text-[#898989] mt-1">Stylish cafe chair</p>
                <p className="font-semibold text-[20px] text-[#EF4444] mt-2">
                  2.500.000đ
                </p>
                <button className="mt-3 w-full px-22 py-2 border border-[#CA8A04] mb-4">
                  <Link
                    to="/"
                    className="font-semibold text-[16px] text-[#CA8A04] "
                  >
                    View all products
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 bg-[#F5F5F5]">
                <Link to="/">
                  <h5 className="font-semibold text-[20px] pt-4">Syltherine</h5>
                </Link>
                <p className="text-[#898989] mt-1">Stylish cafe chair</p>
                <p className="font-semibold text-[20px] text-[#EF4444] mt-2">
                  2.500.000đ
                </p>
                <button className="mt-3 w-full px-22 py-2 border border-[#CA8A04] mb-4">
                  <Link
                    to="/"
                    className="font-semibold text-[16px] text-[#CA8A04] "
                  >
                    View all products
                  </Link>
                </button>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 bg-[#F5F5F5]">
                <Link to="/">
                  <h5 className="font-semibold text-[20px] pt-4">Syltherine</h5>
                </Link>
                <p className="text-[#898989] mt-1">Stylish cafe chair</p>
                <p className="font-semibold text-[20px] text-[#EF4444] mt-2">
                  2.500.000đ
                </p>
                <button className="mt-3 w-full px-22 py-2 border border-[#CA8A04] mb-4">
                  <Link
                    to="/"
                    className="font-semibold text-[16px] text-[#CA8A04] "
                  >
                    View all products
                  </Link>
                </button>
              </div>
            </div>{" "}
            <div>
              <div>
                <img src="https://picsum.photos/296/301" alt="" />
              </div>
              <div className=" pl-4 pr-4 bg-[#F5F5F5]">
                <Link to="/">
                  <h5 className="font-semibold text-[20px] pt-4">Syltherine</h5>
                </Link>
                <p className="text-[#898989] mt-1">Stylish cafe chair</p>
                <p className="font-semibold text-[20px] text-[#EF4444] mt-2">
                  2.500.000đ
                </p>
                <button className="mt-3 w-full px-22 py-2 border border-[#CA8A04] mb-4">
                  <Link
                    to="/"
                    className="font-semibold text-[16px] text-[#CA8A04] "
                  >
                    View all products
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
