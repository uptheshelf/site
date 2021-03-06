import React from "react";

import Header from "../components/header";
import KuttyHero from "../components/hero";
import FeatureList from "../components/features";
import ProductShowcase from "../components/product_showcase";
import Footer from "../components/footer";
import FormFooter from "../components/form_footer";
import ModalForm from "../components/modal";

import { useDisclosure } from "@chakra-ui/react";

const IndexPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Header onOpen={onOpen}/>
      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <KuttyHero/>
      <ProductShowcase id={'product-showcase'} onOpen={onOpen}/>
      <FeatureList id={'feature-list'}/>
      <FormFooter/>
      <Footer/>
    </React.Fragment>
  )
}

export default IndexPage;