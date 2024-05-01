import Wrapper from "../../components/Wrapper";
import five from "../../assets/five.jpg";
import six from "../../assets/six.jpg";
import { FaCirclePlay } from "react-icons/fa6";
import Efficient from "../../components/Efficient";

const Third = () => {
  return (
    <Wrapper>
      <div className="mt-28 flex gap-16 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="relative">
            <img className="w-3/4" src={five} alt="" />
            <img
              className="absolute right-0 top-[65%] w-[460px] rounded-lg"
              src={six}
              alt=""
            />
            <div className="text-[#0059B1] bg-white rounded-full text-6xl absolute top-[58%] right-[21%]">
              <FaCirclePlay></FaCirclePlay>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Efficient></Efficient>
        </div>
      </div>
    </Wrapper>
  );
};

export default Third;
