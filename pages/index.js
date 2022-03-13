import React from "react";

import Header from "../components/header";
import KuttyHero from "../components/hero";
import FeatureList from "../components/features";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <KuttyHero/>
      <FeatureList/>
    </React.Fragment>
  )
}

export default IndexPage;