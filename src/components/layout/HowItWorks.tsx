import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  src: string;
  text: ReactNode;
}

const Card = ({ title, src, text }: CardProps) => {
  return (
    <Box>
      <Image src={src} />
      <Heading>{title}</Heading>
      <Text fontSize={"small"}>{text}</Text>
    </Box>
  );
};

const works = [
  {
    src: "/images/request-icon.png",
    title: "Request",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia id ex molestiae quae laborum possimus architecto molestias a voluptates.",
  },
  {
    src: "/images/relax-icon.png",
    title: "Relax",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia id ex molestiae quae laborum possimus architecto molestias a voluptates.",
  },
  {
    src: "/images/rate-icon.png",
    title: "Rate",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia id ex molestiae quae laborum possimus architecto molestias a voluptates.",
  },
];

const HowItWorks = () => {
  return (
    <Box>
      <Heading textAlign={"center"} py={10} fontSize={"xxx-large"}>
        How it Works
      </Heading>

      <Grid p={10} gap={20} templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}>
        {works.map((work, i) => (
          <GridItem key={i}>
            <Card src={work.src} text={work.text} title={work.title} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
