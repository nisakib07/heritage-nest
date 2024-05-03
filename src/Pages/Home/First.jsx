import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import Efficient from "../../components/Efficient";
import Wrapper from "../../components/Wrapper";
import { FaCirclePlay } from "react-icons/fa6";

const First = () => {
  return (
    <Wrapper>
      <div className="mt-20 flex gap-16 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="relative">
            <img className="w-3/4" src={one} alt="" />
            <img
              className="absolute right-0 top-[65%] w-[280px] lg:w-[460px] rounded-lg"
              src={two}
              alt=""
            />
            <div className="text-[#0059B1] bg-white rounded-full text-6xl absolute top-[50%] right-[18%] lg:top-[58%] lg:right-[21%]">
              <FaCirclePlay></FaCirclePlay>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Efficient></Efficient>
        </div>
      </div>
    </Wrapper>
  );
};

export default First;
