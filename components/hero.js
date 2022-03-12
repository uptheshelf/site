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
                  Data to enrich your{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                >
                  online business
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
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
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
                        color="brand.700"
                        bg="brand.600"
                        _hover={{ bg: "brand.700" }}
                        px={{ base: 8, md: 10 }}
                        py={{ base: 3, md: 4 }}
                    >
                        Get Started
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