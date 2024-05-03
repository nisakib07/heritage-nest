import Reviews from "../../components/Reviews";
import Wrapper from "../../components/Wrapper";
import Listing from "../Buyer/Listing";
import AboutBanner from "./AboutBanner";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";
import Heritage from "./Heritage";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <div className="mt-14">
        <Listing></Listing>
      </div>

      <AboutFirst></AboutFirst>

      <AboutSecond></AboutSecond>

      <Wrapper>
        <Team></Team>
        <Heritage></Heritage>
        <Reviews></Reviews>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
