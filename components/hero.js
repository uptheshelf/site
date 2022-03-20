import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Icon,
  Image,
  HStack,
  Stack,
  SimpleGrid,
  VisuallyHidden,
  GridItem,
  Input,
  Button
} from "@chakra-ui/react";

const KuttyHero = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Open-source data platform for{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, #FBB040, #EF4136)"
                  fontWeight="extrabold"
                >
                  developers
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                {/* BI tools are clunky. Pure code is time consuming. 
                <b style={{color: '#FBB040'}}> UPTHESHELF</b> combines SQL, no-code, Python 🐍 and JS
                alongside scheduling, data diffs, notifications and ML <br/>
                on top of your <b>data warehouse.</b>
                <br/>
                🧑‍💻 Code-driven data analysis made simple. */}
                BI tools are not flexible enough for developers. UpTheShelf enables code-driven analysis
                on top of data warehouse thanks to lambda functions, cron jobs, data diffs and templating.
                <br/>
                Be the first to try it out 👇
              </chakra.p>
              <Stack 
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <SimpleGrid
                as="form"
                w={{ base: "full", md: 7 / 12 }}
                columns={{ base: 1, lg: 6 }}
                spacing={3}
                pt={1}
                mx="auto"
                mb={8}
                action="https://getform.io/f/975dfde6-ef2b-46b7-a7f1-96a7850fdec0" 
                method="POST"
                >
                    <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
                        <VisuallyHidden>Your Email</VisuallyHidden>
                        <Input
                            mt={0}
                            size="lg"
                            type="email"
                            placeholder="Enter your email..."
                            required="true"
                        />
                    </GridItem>
                    <Button
                        as={GridItem}
                        w="full"
                        variant="solid"
                        colSpan={{ base: "auto", lg: 2 }}
                        size="lg"
                        type="submit"
                        colorScheme="brand"
                        cursor="pointer"
                        border="solid 1px transparent"
                        fontSize={{ base: "md", md: "lg" }}
                        rounded="md"
                        px={{ base: 8, md: 10 }}
                        py={{ base: 3, md: 4 }}
                    >
                        Join waitlist
                    </Button>
                </SimpleGrid>
                {/* <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="brand.700"
                    bg="brand.600"
                    _hover={{ bg: "brand.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                  >
                    Join waitlist
                  </chakra.a>
                </Box> */}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KuttyHero;