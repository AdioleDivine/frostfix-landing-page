import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For detecting when elements are in view
import React, { ReactNode } from "react";

// MotionBox from framer-motion
const MotionBox = motion(Box);

interface CardProps {
  title: string;
  src: string;
  text: ReactNode;
}

const Card = ({ title, src, text }: CardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Trigger the animation when 10% of the card is in view

  // Animation variants for the cards
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below the viewport
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide up and fade in
  };

  return (
    <MotionBox
      ref={ref} // Attach ref to the MotionBox for intersection observer
      variants={variants} // Apply animation variants
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when the card is in view
    >
      <Image src={src} mb={4} />
      <Heading fontSize={["xl", "2xl", "3xl"]} mb={3}>
        {title}
      </Heading>
      <Text
        fontSize={["14px", "16px", "18px"]}
        color={"#000E1B80"}
        lineHeight={["20px", "24px", "26px"]}
      >
        {text}
      </Text>
    </MotionBox>
  );
};

const works = [
  {
    src: "/images/request-icon.png",
    title: "Request",
    text: "Select the areas you want shoveled and request a job from anywhere. If salt is selected, leave it by the front door.",
  },
  {
    src: "/images/relax-icon.png",
    title: "Relax",
    text: "We take care of the rest. Really. You will receive updates, pictures, and an email receipt once the job is done.",
  },
  {
    src: "/images/rate-icon.png",
    title: "Rate",
    text: "You have the option to rate the work and thank the Snow Pacifier by adding a tip within 24 hours.",
  },
];

const HowItWorks = () => {
  // Container animation for the whole section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Stagger children animations for a cascading effect
  };

  return (
    <MotionBox
      p={10}
      bg="rgba(252,252,252,1)"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }} // Animation only happens once
    >
      <Heading textAlign={"center"} py={10} fontSize={["2xl", "4xl", "5xl"]} color={"black"}>
        How it Works
      </Heading>

      {/* Responsive grid with appropriate gap between columns and items */}
      <Grid
        p={10}
        color={"black"}
        gap={20}
        templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
      >
        {works.map((work, i) => (
          <GridItem key={i}>
            <Card src={work.src} text={work.text} title={work.title} />
          </GridItem>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default HowItWorks;