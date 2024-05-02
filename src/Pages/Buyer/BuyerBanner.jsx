import React from "react";
import buyerBanner from "../../assets/Buyer-banner.jpg";
import { Link } from "react-router-dom";
import magnifier from "../../assets/magnifier.png";
import location from "../../assets/location.png";
import home from "../../assets/home.png";
import Dollar from "../../assets/Dollar.png";
import { CiSearch } from "react-icons/ci";

const BuyerBanner = () => {
  return (
    <div className="relative">
      <img className="w-full" src={buyerBanner} alt="" />

      <div className="absolute flex top-[30%] justify-center inset-x-0">
        <div className="bg-white p-8 max-w-[920px] mx-auto rounded-lg shadow-lg">
          <div className="flex gap-8 font-medium  pb-2">
            <Link className="text-[#0059B1] border-[#0059B1] border-b-2">
              Buy
            </Link>
            <Link>Rent</Link>
            <Link>PG</Link>
            <Link>Plot</Link>
            <Link>Commercial</Link>
          </div>
          <hr className="border-2 border-[#C5E2FF]" />

          <div className="relative">
            <input
              className="border-2 my-8 py-2 w-full placeholder:px-10"
              type="text"
              placeholder="Search Properties"
            />
            <img
              className="absolute top-[40%] left-[1%] w-6"
              src={magnifier}
              alt=""
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location */}
            <div>
              <div className="flex items-center gap-2">
                <img src={location} alt="" />
                <p className="text-lg font-semibold">Your Location</p>
              </div>
              <select
                className="bg-[#ECF5FF] w-[250px] py-3 px-2 text-[#EE6611] mt-4 cursor-pointer"
                name=""
                id="">
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Barishal">Barishal</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <div className="flex items-center gap-2">
                <img src={home} alt="" />
                <p className="text-lg font-semibold">Property Type</p>
              </div>
              <select
                className="bg-[#ECF5FF] w-[250px] py-3 px-2 text-[#EE6611] mt-4 cursor-pointer"
                name=""
                id="">
                <option value="Apartment">Apartment</option>
                <option value="Duplex">Duplex</option>
                <option value="Villa">Villa</option>
                <option value="Cottage">Cottage</option>
                <option value="Ranch">Ranch</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <div className="flex items-center gap-2">
                <img src={Dollar} alt="" />
                <p className="text-lg font-semibold">Budget</p>
              </div>
              <input
                className="bg-[#ECF5FF] w-[250px] py-3 px-2 text-[#EE6611] mt-4"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>

          <button className="flex items-center gap-3 bg-[#0059B1] text-white font-semibold w-full justify-center mt-8 py-3 rounded-lg">
            <CiSearch></CiSearch> <p>Find Property</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerBanner;
