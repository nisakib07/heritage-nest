import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Wrapper from "./Wrapper";
import { IoStar } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Reviews = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("/review.json");
      return res?.data;
    },
  });

  return (
    <div className="mt-20">
      <Wrapper>
        <h1 className="text-center text-4xl font-bold mb-16">Testimonials</h1>

        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper">
            {reviews &&
              reviews?.map((review) => (
                <SwiperSlide key={review?.id}>
                  <div className="bg-[#ECF5FF] flex flex-col items-center text-center p-8 space-y-9">
                    <div className="flex gap-2 text-xl">
                      <IoStar className="text-[#FEC84B]"></IoStar>
                      <IoStar className="text-[#FEC84B]"></IoStar>
                      <IoStar className="text-[#FEC84B]"></IoStar>
                      <IoStar className="text-[#FEC84B]"></IoStar>
                      <IoStar className="text-[#F4E6C5]"></IoStar>
                    </div>
                    <p className="text-[#818181] text-lg">
                      "The level of security provided by CypherPlay is
                      unmatched. I feel confident using my card for both
                      everyday purchases and travel. It's the peace of mind I
                      was looking for."
                    </p>

                    <div className="flex flex-col items-center">
                      <img src={review?.img} alt="" />
                      <p className="text-xl font-semibold">Tony Stark</p>
                      <p className="text-[#6B7280]">Marketing manager, XYZ</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

export default Reviews;
