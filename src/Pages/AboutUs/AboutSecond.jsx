import React from "react";
import about2 from "../../assets/about2.png";
import aboutHome from "../../assets/AboutHome.png";

const AboutSecond = () => {
  return (
    <div className="mt-14 relative mb-[200px]">
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

      <div className="bg-[#ECF5FF] p-2 lg:p-8 w-4/6 lg:w-1/2 rounded-lg absolute left-0 top-[50%] lg:top-[70%] lg:ml-20 ml-4">
        <div className="flex items-center gap-2">
          <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
          <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
            Our Story
          </p>
        </div>

        <h3 className="lg:text-4xl font-bold mt-4">
          Efficient and Transparent Home Buying Solutions
        </h3>
        <p className="text-[#6B7280] mt-6 font-medium text-xs lg:text-base">
          In the symphony of bustling markets and serene landscapes,
          Heritage-Nest was born—a vision to
        </p>
      </div>
    </div>
  );
};

export default AboutSecond;
