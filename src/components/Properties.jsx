import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Wrapper from "./Wrapper";
import location from "../assets/location.png";
import gallery from "../assets/Gallery.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const Properties = () => {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axios.get("/house.json");
      return res?.data;
    },
  });

  return (
    <Wrapper>
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper">
          {properties &&
            properties?.map((property) => (
              <SwiperSlide key={property?.id}>
                <div className="relative">
                  <img src={property?.img} alt="" />
                  <div className="mt-4 flex justify-between">
                    <p className="bg-[#C5E2FF] w-fit px-2 py-1 rounded-lg">
                      Apartment
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="w-2 h-2 bg-[#EE6611]"> </p>
                      <p>Ready to Move</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center bg-white rounded-lg p-1 absolute top-[45%] left-[3%]">
                    <img src={gallery} alt="" />
                    <p>20</p>
                  </div>
                  <hr className="my-2" />

                  <div>
                    <h2 className="text-xl font-semibold">SunnySlope Suites</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <img src={location} alt="" />
                      <p className="text-[#6B7280]">
                        Meadowshire Park, Greenfield, USA
                      </p>
                    </div>

                    <h4 className="mt-6 text-2xl font-semibold">$ 250000</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Properties;
