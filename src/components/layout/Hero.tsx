import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  const SIZE = "150px";
  return (
    <Box minH={"60vh"} p={20}>
      <Center textAlign={"center"} flexDirection={"column"}>
        <Heading fontSize={"xxx-large"}>Forstfix Snow Removal</Heading>
        <Text my={2} maxW={"500px"} mx="auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          dicta. Totam perspiciatis corrupti nihil officia?
        </Text>
      </Center>

      <Flex my={10} justify={"center"} gap={10} align={"center"}>
        <Link href="">
          <Image w={SIZE} src="/images/app-store.png" />
        </Link>

        <Link href="">
          <Image w={SIZE} src="/images/play-store.png" />
        </Link>
      </Flex>

      {/* <Image src="/images/hero-bg.png" zIndex={-1} position={"absolute"} bottom={"30px"} /> */}

      <Flex bgImage={"/images/hero-bg.png"} bgSize={"cover"} bgPos={"center center"} justify={"center"} mt={20}>
        <Image src="/images/phone-2.png" />
        <Image src="/images/phone-1.png" />
        <Image src="/images/phone-2.png" />
      </Flex>
    </Box>
  );
};

export default Hero;
