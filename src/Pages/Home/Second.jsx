import Efficient from "../../components/Efficient";
import Wrapper from "../../components/Wrapper";
import three from "../../assets/three.jpg";
import four from "../../assets/four.png";
import { FaCirclePlay } from "react-icons/fa6";

const Second = () => {
  return (
    <Wrapper>
      <div className="mt-56 flex gap-16 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <Efficient></Efficient>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <img className="w-3/4" src={three} alt="" />
            <img
              className="absolute right-0 bottom-[65%] w-[460px] rounded-lg"
              src={four}
              alt=""
            />
            <div className="text-[#0059B1] bg-white rounded-full text-6xl absolute -top-[6%] right-[62%]">
              <FaCirclePlay></FaCirclePlay>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Second;
