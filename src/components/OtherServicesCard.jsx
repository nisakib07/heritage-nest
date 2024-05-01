import React from "react";
import otherlogo from "../../src/assets/otherlogo.jpg";

const OtherServicesCard = ({ title, description }) => {
  return (
    <div className="flex gap-5 bg-[#ECF5FF] rounded-lg p-6">
      <div>
        <img
          className="bg-[#EE6611] p-3 rounded-lg w-16"
          src={otherlogo}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-[#6B7280] font-medium mt-4">{description}</p>
      </div>
    </div>
  );
};

export default OtherServicesCard;
