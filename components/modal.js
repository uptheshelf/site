import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';

import React from 'react';

export default function ModalForm({isOpen, onOpen, onClose}) {
    
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Join waitlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter your email</FormLabel>
                <Input ref={initialRef} placeholder='Email' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='brand' mr={3}>
                Join
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }