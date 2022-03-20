import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    MdEmail,
    MdFacebook,
    MdOutlineEmail,
    MdCalculate,
  } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { useState } from 'react';
  
  export default function ContactForm() {

    const [formData, setFormData] = useState({name: '', email: '', message: '', calculation: ''});

    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if (formData.calculation === '7') {
            setError('');
            window.location.href = "mailto:kotuaigor@gmail.com";
            return;
        }

        else {
            console.log('error');
            setError('Wrong calculation');
            return;
        }


    }

    return (
      <Container bg={useColorModeValue("#F9FAFB", "gray.600")} maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.900")}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        {/* <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="grey.900"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#de8b08" size="20px" />}>
                          +91-988888888
                        </Button> */}
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="grey.900"
                          leftIcon={<MdEmail color="#de8b08" size="20px" />}>
                          kotuaigor at gmail dot com
                        </Button>
                        {/* <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="grey.900"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#de8b08" size="20px" />}>
                          Karnavati, India
                        </Button> */}
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      {/* <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      /> */}
                      {/* <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'brand.500' }}
                        icon={<BsGithub size="28px" />}
                        onClick={e => {e.preventDefault(); window.location.href='https://github.com/uptheshelf'}}
                      /> */}
                      {/* <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      /> */}
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form onSubmit={handleSubmit}>
                        <FormControl id="name" isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" 
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            value={formData.name}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail" isRequired>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" 
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            value={formData.email}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message" isRequired>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            onChange={e => setFormData({...formData, message: e.target.value})}
                            value={formData.message}
                          />
                        </FormControl>
                        <FormControl id="calculation" isRequired mb={3} isInvalid={error !== ''}>
                          <FormLabel>1 + 6 = ?</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdCalculate color="gray.800" />}
                            />
                            <Input type="text" size="md" 
                            onChange={e => setFormData({...formData, calculation: e.target.value})}
                            value={formData.calculation}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="button" float="right">
                          <Button
                            variant="solid"
                            colorScheme={'brand'}
                            type={'submit'}
                            >
                            Send Message
                          </Button>
                        </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }