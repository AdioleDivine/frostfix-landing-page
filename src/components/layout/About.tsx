import {
  Box,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowDown2, ArrowDown3, Briefcase } from "iconsax-react";
import React from "react";

const About = () => {
  return (
    <Box p={10}>
      <Box>
        <Box>
          <Divider
            borderWidth={2}
            bg="rgba(26,32,44,1)"
            borderColor={"rgba(26,32,44,1)"}
            ml={5}
            opacity={1}
            borderRadius={10}
            h={5}
            w={1}
          />
          <Heading
            display={"flex"}
            alignItems={"center"}
            gap={4}
            as="h2"
            fontSize={"xx-large"}
            my={4}
          >
            <Circle
              size={50}
              borderRadius={100}
              className="glow-bg"
              backdropBlur={10}
            >
              <Briefcase />
            </Circle>
            <Text as="span" fontWeight={"thin"}>
              About
            </Text>
          </Heading>
          <Divider
            borderWidth={2}
            bg="rgba(26,32,44,1)"
            borderColor={"rgba(26,32,44,1)"}
            ml={5}
            opacity={1}
            borderRadius={10}
            h={5}
            w={1}
          />
        </Box>
        <Heading as="h1" fontWeight={"semibold"} fontSize={"xxx-large"}>
          <Text color={"rgb(1, 65, 255)"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          neque arcu eget. Senectus scelerisque egestas quisque tortor elit eget
          bibendum amet aliquam. Pellentesque consectetur non non imperdiet.{" "}
        </Heading>
      </Box>

      <Box my={10}>
        <Divider
          borderWidth={2}
          bg="rgba(26,32,44,1)"
          borderColor={"rgba(26,32,44,1)"}
          ml={5}
          opacity={1}
          borderRadius={10}
          h={5}
          w={1}
        />
        <Heading
          display={"flex"}
          alignItems={"center"}
          gap={4}
          as="h2"
          fontSize={"xx-large"}
          my={4}
        >
          <Circle
            size={50}
            borderRadius={100}
            className="glow-bg"
            backdropBlur={10}
          >
            <Briefcase />
          </Circle>
          <Text as="span" fontWeight={"thin"}>
            Benefits of using FrostFix
          </Text>
        </Heading>
        <Divider
          borderWidth={2}
          bg="rgba(26,32,44,1)"
          borderColor={"rgba(26,32,44,1)"}
          ml={5}
          opacity={1}
          borderRadius={10}
          h={5}
          w={1}
        />
      </Box>

      <Grid gap={19} templateColumns={"repeat(6,1fr)"}>
        <GridItem
          backdropFilter={"blur(10px)"}
          gridColumn={"1/7"}
          borderRadius={30}
          bg="rgba(26,32,44,.3)"
          border={"1px solid rgba(255,255,255,.1)"}
        >
          <Grid px={10} alignItems={"center"} templateColumns={"350px auto"}>
            <GridItem py={10}>
              <Heading fontWeight={"semibold"} my={2}>
                More <br />
                Convenient
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                expedita optio officia minus hic amet perspiciatis laudantium
                obcaecati ea provident enim quaerat nihil voluptatibus, dolores
                earum quibusdam delectus minima reprehenderit fugit sequi ab
                est. Pariatur, ipsum. Magni exercitationem ut obcaecati.
              </Text>

              <Flex my={2} align={"center"} cursor={"pointer"} gap={2}>
                {" "}
                <Circle
                  size={50}
                  borderRadius={100}
                  bg={"rgb(1, 65, 255)"}  
                  backdropBlur={10}
                >
                  <ArrowDown2 />
                </Circle>{" "}
                <Text>Scroll Down</Text>
              </Flex>
            </GridItem>

            <GridItem alignSelf={"end"} justifySelf={"end"}>
              <Image src="/images/phone-2.png" />
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          backdropFilter={"blur(10px)"}
          gridColumn={"1/4"}
          borderRadius={30}
          bg="rgba(26,32,44,.3)"
          border={"1px solid rgba(255,255,255,.1)"}
        >
          <Grid px={10} alignItems={"center"} templateColumns={"auto"}>
            <GridItem py={10}>
              <Heading fontWeight={"semibold"} my={2}>
                More <br />
                Convenient
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                expedita optio officia minus hic amet perspiciatis laudantium
                obcaecati ea provident enim quaerat nihil voluptatibus, dolores
                earum quibusdam delectus minima reprehenderit fugit sequi ab
                est. Pariatur, ipsum. Magni exercitationem ut obcaecati.
              </Text>

              <Flex my={2} align={"center"} cursor={"pointer"} gap={2}>
                {" "}
                <Circle
                  size={50}
                  borderRadius={100}
                  bg={"rgb(1, 65, 255)"}
                  backdropBlur={10}
                >
                  <ArrowDown2 />
                </Circle>{" "}
                <Text>Scroll Down</Text>
              </Flex>
            </GridItem>

            <GridItem alignSelf={"end"} justifySelf={"end"}>
              <Image src="/images/phone-2.png" />
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          backdropFilter={"blur(10px)"}
          gridColumn={"4/7"}
          borderRadius={30}
          bg="rgba(26,32,44,.3)"
          border={"1px solid rgba(255,255,255,.1)"}
        >
          <Grid px={10} alignItems={"center"} templateColumns={"auto"}>
            <GridItem py={10}>
              <Heading fontWeight={"semibold"} my={2}>
                More <br />
                Convenient
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                expedita optio officia minus hic amet perspiciatis laudantium
                obcaecati ea provident enim quaerat nihil voluptatibus, dolores
                earum quibusdam delectus minima reprehenderit fugit sequi ab
                est. Pariatur, ipsum. Magni exercitationem ut obcaecati.
              </Text>

              <Flex my={2} align={"center"} cursor={"pointer"} gap={2}>
                {" "}
                <Circle
                  size={50}
                  borderRadius={100}
                  bg={"rgb(1, 65, 255)"}
                  backdropBlur={10}
                >
                  <ArrowDown2 />
                </Circle>{" "}
                <Text>Scroll Down</Text>
              </Flex>
            </GridItem>

            <GridItem alignSelf={"end"} justifySelf={"end"}>
              <Image src="/images/phone-2.png" />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
