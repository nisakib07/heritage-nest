import aboutHome from "../../assets/AboutHome.png";
import aboutFirst from "../../assets/aboutfirst.jpg";
import Wrapper from "../../components/Wrapper";

const AboutFirst = () => {
  return (
    <Wrapper>
      <div className="mt-14 relative mb-[200px]">
        <div className="w-4/6 relative">
          <img className="w-full object-fill h-auto" src={aboutFirst} alt="" />

          <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center text-white text-xl font-semibold"></div>

          <img
            className="absolute w-[25%] h-auto object-fill top-[20%] left-[10%]"
            src={aboutHome}
            alt=""
          />
        </div>

        <div className="bg-[#ECF5FF] p-2 lg:p-8 w-4/6 lg:w-1/2 rounded-lg absolute right-0 top-[50%] lg:top-[70%]">
          <div className="flex items-center gap-2">
            <p className="bg-[#EE6611] h-[2px] lg:h-1 w-12"></p>
            <p className="text-[#EE6611] text-xs lg:text-lg font-semibold">
              Our Story
            </p>
          </div>

          <h3 className="lg:text-4xl font-bold mt-4">
            Efficient and Transparent Home Buying Solutions
          </h3>
          <p className="text-[#6B7280] mt-6 font-medium text-xs lg:text-base">
            In the symphony of bustling markets and serene landscapes,
            Heritage-Nest was born—a vision to
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutFirst;
