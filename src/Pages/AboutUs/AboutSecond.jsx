import React from "react";
import about2 from "../../assets/about2.png";
import aboutHome from "../../assets/AboutHome.png";
import vector from "../../assets/Vector.png";

const AboutSecond = () => {
  return (
    <div className="mt-14 relative mb-[250px] lg:mb-[200px]">
      <div className="relative flex justify-end lg:px-20">
        <div className="w-3/5 relative">
          <img className="w-full object-fill h-auto" src={about2} alt="" />

          <div className="absolute inset-0 flex justify-center items-center">
            <img
              className="w-[10%] h-auto object-fill"
              src={aboutHome}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="absolute lg:top-[30%] top-[25%]">
        <img className="w-1/4 lg:w-5/6" src={vector} alt="" />
      </div>

      <div className="bg-[#FDF0E7] p-2 lg:p-8 w-4/6 lg:w-1/2 rounded-lg absolute left-0 top-[70%] lg:top-[70%] lg:ml-20 ml-4">
        <div className="flex items-center gap-2">
          <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
          <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
            Mission Statement
          </p>
        </div>

        <h3 className="lg:text-4xl font-bold mt-4">
          Efficient and Transparent Home Buying Solutions
        </h3>
        <p className="text-[#6B7280] mt-6 font-medium text-xs lg:text-base">
          To bridge the miles with smiles, Heritage-Nest pledges to be the
          golden thread connecting NRIs to their homeland, through trust,
          transparency, and tailored real estate solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSecond;
