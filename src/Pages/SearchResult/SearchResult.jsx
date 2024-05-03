import React from "react";
import Wrapper from "../../components/Wrapper";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import location from "../../assets/location.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import LoanRange from "./LoanRange";
import Reviews from "../../components/Reviews";

const SearchResult = () => {
  const { data: propertyResults = [], isLoading } = useQuery({
    queryKey: ["propertyResults"],
    queryFn: async () => {
      const res = await axios.get("/propertyResults.json");
      return res?.data;
    },
  });

  return (
    <Wrapper>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3">
        <div className=" col-span-2">
          <div className="flex lg:gap-8 gap-2 text-center">
            <p className="bg-[#0059B1] text-white text-base lg:text-lg lg:font-medium w-fit p-2 rounded-lg">
              Properties (400)
            </p>
            <p className="bg-[#ECF5FF]  text-base lg:text-lg font-medium w-fit p-2 rounded-lg">
              New Projects (400)
            </p>
            <p className="bg-[#ECF5FF]  text-base lg:text-lg font-medium w-fit p-2 rounded-lg">
              Pre-launch offers
            </p>
          </div>
          <hr className="my-4 lg:w-3/4" />

          <p className="text-2xl text-center lg:text-justify font-medium">
            400 results for rental property
          </p>

          <div className="mt-10">
            {propertyResults?.map((property) => (
              <div
                key={property?.id}
                className="p-6 flex flex-col lg:flex-row gap-8 bg-[#F9FAFB] mb-6">
                <img src={property?.img} alt="" />
                <div>
                  {/* Header */}
                  <div className="flex gap-2">
                    <h1 className="text-lg font-semibold">
                      3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h1>
                    <p className="text-2xl font-bold">$ 300000</p>
                  </div>

                  {/* Location */}
                  <div className=" mt-4 flex lg:justify-between flex-wrap justify-center gap-2 lg:gap-0">
                    <div className="flex gap-2 items-center">
                      <img src={location} alt="" />
                      <p>Meadowshire Park, Greenfield, USA</p>
                    </div>

                    <button className="border-2 border-black px-4 py-2 rounded-lg">
                      Bid Property
                    </button>
                  </div>

                  {/* Property Details */}

                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <p className="font-medium">Property Details</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[500px] h-2"
                        viewBox="0 0 429 2"
                        fill="none">
                        <path d="M1 1H428" stroke="#E3E3E3" />
                      </svg>
                    </div>

                    <div className="flex justify-between flex-wrap">
                      <div className="flex items-center gap-3 mt-4">
                        <img
                          className="bg-[#EE6611] p-2 rounded-lg"
                          src={icon1}
                          alt=""
                        />
                        <div>
                          <p className="font-medium">Total Area</p>
                          <p className="text-[#535353]">891 sqft</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <img
                          className="bg-[#EE6611] p-2 rounded-lg"
                          src={icon2}
                          alt=""
                        />
                        <div>
                          <p className="font-medium">Status</p>
                          <p className="text-[#535353]">Ready to move</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <img
                          className="bg-[#EE6611] rounded-lg"
                          src={icon3}
                          alt=""
                        />
                        <div>
                          <p className="font-medium">Total Area</p>
                          <p className="text-[#535353]">891 sqft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="border-2 mb-6" />
          <div className="flex gap-2 px-2 lg:px-0">
            <h1 className="bg-[#0059B1] text-white w-fit p-2 rounded-lg">01</h1>
            <h1 className="bg-[#ECF5FF]  w-fit p-2 rounded-lg">02</h1>
            <h1 className="bg-[#ECF5FF] w-fit p-2 rounded-lg">Next</h1>
          </div>
        </div>
      </div>

      <LoanRange></LoanRange>
      <Reviews></Reviews>
    </Wrapper>
  );
};

export default SearchResult;
