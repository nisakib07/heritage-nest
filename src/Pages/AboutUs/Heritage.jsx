import home2 from "../../assets/home2.png";

const Heritage = () => {
  return (
    <div className="mt-16 flex items-center flex-col lg:flex-row px-2 lg:px-0">
      <div className="lg:w-1/2 w-full">
        <div className="flex items-center gap-2">
          <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
          <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
            Meet the Team For Book Consultation
          </p>
        </div>

        <h2 className="text-xl lg:text-4xl font-bold mt-4 text-center lg:text-justify">
          Meet the stewards of your heritage journey
        </h2>

        <p className="text-[#6B7280] mt-6 text-center lg:text-justify">
          Each member an embodiment of expertise and warmth, dedicated to
          guiding you home, every step of the way.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 lg:justify-end">
        <img className="w-1/2" src={home2} alt="" />
      </div>
    </div>
  );
};

export default Heritage;
