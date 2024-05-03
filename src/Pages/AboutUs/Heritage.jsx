import home2 from "../../assets/home2.png";

const Heritage = () => {
  return (
    <div className="mt-16 flex items-center">
      <div className="w-1/2">
        <div className="flex items-center gap-2">
          <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
          <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
            Meet the Team For Book Consultation
          </p>
        </div>

        <h2 className="text-4xl font-bold mt-4">
          Meet the stewards of your heritage journey
        </h2>

        <p className="text-[#6B7280] mt-6">
          Each member an embodiment of expertise and warmth, dedicated to
          guiding you home, every step of the way.
        </p>
      </div>

      <div className="w-1/2 flex justify-end">
        <img className="w-1/2" src={home2} alt="" />
      </div>
    </div>
  );
};

export default Heritage;
