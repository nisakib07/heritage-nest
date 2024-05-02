import map from "../../assets/map.png";
import icon from "../../assets/map icon.png";

const ValueLocation = () => {
  return (
    <div>
      <div className="bg-[#ECF5FF] p-6 rounded-lg">
        <p className="text-[#6B7280]">Property Value</p>

        <p className="text-2xl font-bold mt-2">$ 300k - $ 310k</p>
        <p className="text-[#6B7280] font-medium mt-4">
          Your bid can not be than 10% of the property Minimum value.
        </p>

        <div className="mt-8">
          <p>Min</p>
          <p className="bg-white py-3 px-4 rounded-lg">$ 280k</p>
          <p className="mt-2">Max</p>
          <p className="bg-white py-3 px-4 rounded-lg">$ 305k</p>
        </div>
        <div className="mt-6 relative">
          <div className="h-6 bg-[#EEEEEE] rounded-s-full rounded-e-full"></div>
          <div className="w-6 h-6 bg-[#EE6611] rounded-full absolute top-0 left-0"></div>
          <div className="w-6 h-6 bg-[#EE6611] rounded-full absolute top-0 right-0"></div>
          <div className="mt-2 flex justify-between">
            <p className="font-medium">$ 280k</p>
            <p className="font-medium">$ 305k</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#0059B1] text-lg font-semibold text-white py-3 px-6 rounded-lg">
            Bid Property
          </button>
        </div>
      </div>

      <div className="mt-5 relative">
        <img src={map} alt="" />
        <img className="absolute top-[25%] right-[30%]" src={icon} alt="" />
      </div>
    </div>
  );
};

export default ValueLocation;
