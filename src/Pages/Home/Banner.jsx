import { SlMagnifier } from "react-icons/sl";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/6yjBySb/banner.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <p className="text-white mb-12 font-medium">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <h1 className="text-6xl font-bold">
            Your Portal to India's Exquisite Real Estate
          </h1>
          <div className="flex justify-center mt-12">
            <button className="bg-[#0059B1] flex items-center px-6 py-4 gap-2.5 rounded-[4px] font-medium text-lg">
              <SlMagnifier></SlMagnifier> Find Property
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
