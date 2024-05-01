import OtherServicesCard from "./OtherServicesCard";
import Wrapper from "./Wrapper";

const OtherServices = () => {
  return (
    <Wrapper>
      <div className="mt-32">
        <h2 className="text-4xl font-bold text-center">Other Services</h2>

        <div className="flex gap-8 mt-16">
          <OtherServicesCard
            title={"Advanced Property Search"}
            description={
              "Effortlessly find your dream property with advanced search filters."
            }></OtherServicesCard>
          <OtherServicesCard
            title={"Virtual Tours and Multimedia"}
            description={
              "Explore properties through immersive virtual tours and HD photos."
            }></OtherServicesCard>
          <OtherServicesCard
            title={"Secure Online Transactions"}
            description={
              "Ensure secure transactions and e-sign documents seamlessly online."
            }></OtherServicesCard>
        </div>
      </div>
    </Wrapper>
  );
};

export default OtherServices;
