import OtherServices from "../../components/OtherServices";
import Properties from "../../components/Properties";
import Wrapper from "../../components/Wrapper";
import Amenities from "./Amenities";
import DetailsBanner from "./DetailsBanner";

const Details = () => {
  return (
    <Wrapper>
      <div className="mt-7">
        <DetailsBanner></DetailsBanner>
        <Amenities></Amenities>
        <OtherServices></OtherServices>

        <hr className="border-2 my-8" />
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Other Nearby Properties</h1>
          <p className="text-[#0059B1] text-lg font-semibold underline">
            See all property
          </p>
        </div>
        <Properties></Properties>
      </div>
    </Wrapper>
  );
};

export default Details;
