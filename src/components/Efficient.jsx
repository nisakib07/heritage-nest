import { SlMagnifier } from "react-icons/sl";

const Efficient = () => {
  return (
    <div className="max-w-[590px] text-center lg:text-justify">
      <p className="text-[#F06711] font-semibold text-lg">
        <span className="line-through">Prope</span>rty buying
      </p>
      <h2 className="text-2xl lg:text-4xl font-bold mt-4">
        Efficient and Transparent Home Buying Solutions
      </h2>
      <p className="text-[#667085] font-medium mt-6">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. 
      </p>

      <div className="flex justify-center lg:justify-start">
        <button className="bg-[#ECF5FF] flex items-center px-6 py-4 gap-2.5 rounded-[4px] text-[#0059B1] text-lg font-medium mt-12">
          <SlMagnifier></SlMagnifier> Find Property
        </button>
      </div>
    </div>
  );
};

export default Efficient;
