import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

const ListingCardBlue = () => {
  return (
    <div className="bg-[#ECF5FF] p-6">
      <h1 className="text-[#0051A1] text-4xl font-bold">2k+</h1>
      <p>New Flat Listed</p>

      <div className="mt-9 flex justify-between items-center ">
        <p className="text-[#0059B1] underline hover:cursor-pointer">
          View All
        </p>

        <div className="text-2xl text-[#0059B1] border-2 border-[#0059B1] w-fit rounded-full">
          <IoIosArrowRoundDown></IoIosArrowRoundDown>
        </div>
      </div>
    </div>
  );
};

export default ListingCardBlue;
