import React from "react";
import InfoBox from "./Home/InfoBox";
// import cocacola from "./images/cocacola.jpg";
import FeatureCards from "./Home/FeatureCards";

export default function Home() {
  return (
    <>
      <div>
        <InfoBox />
        <hr />
        <FeatureCards/>
      </div>
    </>
  );
}
