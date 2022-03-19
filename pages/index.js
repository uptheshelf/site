import React from "react";

import Header from "../components/header";
import KuttyHero from "../components/hero";
import FeatureList from "../components/features";
import ProductShowcase from "../components/product_showcase";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <KuttyHero/>
      <ProductShowcase/>
      <FeatureList/>
      <Footer/>
    </React.Fragment>
  )
}

export default IndexPage;