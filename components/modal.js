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
    Button,
    useColorModeValue,
    Stack
  } from '@chakra-ui/react';

import React from 'react';

export default function ModalForm({isOpen, onOpen, onClose}) {
    
    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const [email, setEmail] = React.useState('');

    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <form action='https://getform.io/f/975dfde6-ef2b-46b7-a7f1-96a7850fdec0' method='post'>
            <ModalContent>
              <ModalHeader>Join waitlist</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                as={'form'}
                spacing={'12px'}
                method={'post'}
                action='https://getform.io/f/975dfde6-ef2b-46b7-a7f1-96a7850fdec0'
                >
                <FormControl>
                  <Input
                    variant={'solid'}
                    borderWidth={1}
                    color={'gray.800'}
                    _placeholder={{
                      color: 'gray.400',
                    }}
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                    id={'email'}
                    type={'email'}
                    name={'email'}
                    required
                    placeholder={'Your Email'}
                    aria-label={'Your Email'}
                    value={email}
                    ref={initialRef}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </FormControl>
                <FormControl w={{ base: '100%', md: '40%' }}>
                  <Button
                    colorScheme={'brand'}
                    w="100%"
                    type={'submit'}
                  >
                    Join
                  </Button>
                </FormControl>
              </Stack>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </>
    )
  }