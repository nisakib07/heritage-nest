import React from "react";
import Banner from "./Banner";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import OtherServices from "../../components/OtherServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <First></First>
      <Second></Second>
      <Third></Third>
      <OtherServices></OtherServices>
    </div>
  );
};

export default Home;
