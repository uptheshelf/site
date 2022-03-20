import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/contact_form";
import ModalForm from "../components/modal";

import { useDisclosure } from "@chakra-ui/react";


const ContactPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Header onOpen={onOpen}/>
      <ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <ContactForm/>
      <Footer/>
    </React.Fragment>
  )
}

export default ContactPage;