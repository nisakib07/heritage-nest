import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

const ListingCardOrange = () => {
  return (
    <div className="bg-[#FDF0E7] p-6">
      <h1 className="text-[#D95D0F] text-4xl font-bold">2k+</h1>
      <p>New Flat Listed</p>

      <div className="mt-9 flex justify-between items-center ">
        <p className="text-[#EE6611] underline hover:cursor-pointer">
          View All
        </p>

        <div className="text-2xl text-[#EE6611] border-2 border-[#EE6611] w-fit rounded-full">
          <IoIosArrowRoundDown></IoIosArrowRoundDown>
        </div>
      </div>
    </div>
  );
};

export default ListingCardOrange;
