import Wrapper from "../../components/Wrapper";
import ListingCardBlue from "./ListingCardBlue";
import ListingCardOrange from "./ListingCardOrange";

const Listing = () => {
  return (
    <Wrapper>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ListingCardOrange></ListingCardOrange>
          <ListingCardBlue></ListingCardBlue>
          <ListingCardOrange></ListingCardOrange>
          <ListingCardBlue></ListingCardBlue>
        </div>
      </div>
    </Wrapper>
  );
};

export default Listing;
