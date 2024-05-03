import React from "react";
import tub from "../../assets/bathtub.png";
import bath from "../../assets/bath.png";
import balcony from "../../assets/balcony.png";
import furnish from "../../assets/furnish.png";

const Overview = () => {
  return (
    <div className="bg-[#F9FAFB] mt-8 p-6 rounded-lg border-2">
      <h4 className="text-2xl font-semibold">Overview</h4>

      <div className="flex justify-between bg-white p-4 shadow-lg mt-8 flex-wrap gap-2 lg:gap-0">
        <div className="flex items-center gap-2">
          <img src={tub} alt="" />
          <p>
            <span className="font-semibold">2</span> Beds
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={bath} alt="" />
          <p>
            <span className="font-semibold">2</span> Bath
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={balcony} alt="" />
          <p>
            <span className="font-semibold">2</span> Balcony
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={furnish} alt="" />
          <p>Fully Furnished</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <p className="text-[#5C5C5C]">Carpet Area</p>
          <p className="font-medium">2000 sqft</p>
          <p className="text-[#535353]">$ 225/sqft</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Floor</p>
          <p className="font-medium">Second (Out of 6th floor)</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Transaction Type</p>
          <p className="font-medium">Ready to move</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Lift</p>
          <p className="font-medium">1</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Facing</p>
          <p className="font-medium">North - East</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Additional Rooms</p>
          <p className="font-medium">1 servant room & 1 guest room</p>
        </div>
        <div>
          <p className="text-[#5C5C5C]">Age of construction</p>
          <p className="font-medium">New Construction</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
