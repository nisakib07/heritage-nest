import Listing from "../Buyer/Listing";
import AboutBanner from "./AboutBanner";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <div className="mt-14">
        <Listing></Listing>
      </div>

      <AboutFirst></AboutFirst>

      <AboutSecond></AboutSecond>
    </div>
  );
};

export default AboutUs;
