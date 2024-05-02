import Properties from "../../components/Properties";
import Wrapper from "../../components/Wrapper";
import BuyerBanner from "./BuyerBanner";
import Listing from "./Listing";

const Buyer = () => {
  return (
    <div>
      <BuyerBanner></BuyerBanner>
      <Listing></Listing>
      <Wrapper>
        <div className="mt-20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Popular Properties</h1>
            <p className="text-[#0059B1] text-lg font-semibold underline">
              See all property
            </p>
          </div>
          <Properties></Properties>
          <hr className="my-9" />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">New Listed Properties</h1>
          <p className="text-[#0059B1] text-lg font-semibold underline">
            See all property
          </p>
        </div>
        <Properties></Properties>
      </Wrapper>
    </div>
  );
};

export default Buyer;
