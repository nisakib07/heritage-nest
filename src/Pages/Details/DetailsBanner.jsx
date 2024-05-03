import location from "../../assets/location.png";
import detail1 from "../../assets/Detail1.jpg";
import detail2 from "../../assets/Detail2.jpg";
import detail3 from "../../assets/Detail3.jpg";
import detail4 from "../../assets/Detail4.jpg";
import Overview from "./Overview";
import ValueLocation from "./ValueLocation";

const DetailsBanner = () => {
  return (
    <div>
      <div className="flex items-center gap-16">
        <h1 className="text-xl font-semibold">
          3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
        </h1>

        <p className="text-3xl font-semibold">$ 300K</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img src={location} alt="" />
        <p className="text-[#606060] text-lg">
          Meadowshire Park, Greenfield, USA
        </p>
      </div>

      <hr className="max-w-[950px] border-2 my-4" />

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image */}
          <div className="w-full grid grid-cols-3 gap-4">
            <img className="col-span-3 w-full" src={detail1} alt="" />
            <img src={detail2} alt="" />
            <img src={detail3} alt="" />
            <div className="relative">
              <img className="w-full h-auto" src={detail4} alt="" />
              <div class="absolute inset-0 bg-black opacity-60 flex items-center justify-center text-white text-xl font-semibold">
                View more
              </div>
            </div>
          </div>

          {/* Overview */}

          <Overview></Overview>
        </div>

        <div>
          <ValueLocation></ValueLocation>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
