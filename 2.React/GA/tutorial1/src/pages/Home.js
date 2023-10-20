import React from "react";
import { GaClickButtonEvent, GaImpressionEvent } from "../components/GATools";

const Home = () => {
  return (
    <div>
      Home
      <GaClickButtonEvent />
      <GaImpressionEvent />
    </div>
  );
};

export default Home;
