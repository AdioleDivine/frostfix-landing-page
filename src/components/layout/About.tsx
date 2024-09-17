import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // For detecting when elements are in view
import { ReactNode } from "react";

// MotionBox for animating Box components
const MotionBox = motion(Box);

// Icon SVG Component
const BenefitIcon = () => (
  <Icon viewBox="0 0 30 30" boxSize="30px">
    <path
      d="M12.5087 2.63C11.6606 2.35567 10.7424 2.39246 9.91891 2.73377C9.09541 3.07508 8.42043 3.69859 8.015 4.4925L7.0075 6.4625C6.88777 6.69703 6.69704 6.88777 6.4625 7.0075L4.49125 8.015C3.69735 8.42042 3.07384 9.09541 2.73252 9.91891C2.39121 10.7424 2.35442 11.6606 2.62875 12.5087L3.31125 14.615C3.39227 14.8653 3.39227 15.1347 3.31125 15.385L2.63 17.4912C2.35567 18.3394 2.39246 19.2576 2.73377 20.0811C3.07509 20.9046 3.6986 21.5796 4.4925 21.985L6.4625 22.9925C6.69704 23.1122 6.88777 23.303 7.0075 23.5375L8.015 25.5087C8.42043 26.3026 9.09541 26.9262 9.91891 27.2675C10.7424 27.6088 11.6606 27.6456 12.5087 27.3712L14.615 26.6887C14.8653 26.6077 15.1347 26.6077 15.385 26.6887L17.4913 27.37C18.3393 27.6444 19.2573 27.6078 20.0808 27.2667C20.9043 26.9257 21.5794 26.3024 21.985 25.5087L22.9925 23.5375C23.1122 23.303 23.303 23.1122 23.5375 22.9925L25.5088 21.9862C26.3029 21.5808 26.9266 20.9056 27.268 20.0818C27.6093 19.258 27.6459 18.3396 27.3713 17.4912L26.6888 15.385C26.6077 15.1347 26.6077 14.8653 26.6888 14.615L27.37 12.5087C27.6444 11.6607 27.6078 10.7427 27.2667 9.91919C26.9257 9.0957 26.3024 8.42063 25.5088 8.015L23.5375 7.0075C23.303 6.88777 23.1122 6.69703 22.9925 6.4625L21.9862 4.49125C21.5808 3.69707 20.9056 3.07336 20.0818 2.73203C19.258 2.3907 18.3396 2.35408 17.4913 2.62875L15.385 3.31125C15.1347 3.39227 14.8653 3.39227 14.615 3.31125L12.5087 2.63ZM8.45 14.6962L10.2175 12.9287L13.7525 16.465L20.8237 9.39375L22.5925 11.1612L13.7525 19.9987L8.45 14.6962Z"
      fill="#031C34"
    />
  </Icon>
);

interface BenefitCardProps {
  title: string;
  text: ReactNode;
}

const BenefitCard = ({ title, text }: BenefitCardProps) => (
  <MotionBox textAlign="left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
    <VStack align="center" flexDirection={"row"} spacing={2}>
      <BenefitIcon /> {/* Icon on top */}
      <Heading fontSize={["1.5rem", "1.75rem", "2rem"]} color="black" textAlign="center"> {/* Title */}
        {title}
      </Heading>
    </VStack>
    <Text
      mt={3} // Adds some space between title and the text
      fontSize={["1rem", "1rem", "1rem"]} // Paragraph text is 16px (1rem)
      color={"#000E1B80"}
    >
      {text}
    </Text>
  </MotionBox>
);

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2,    // When 20% of the component is in view
  });

  return (
    <Box p={[6, 10, 20]} bg={"#FCFCFC"} ref={ref}> {/* Background color set to #FCFCFC */}
      <Grid
        templateColumns={{
          base: "1fr", // Single column for mobile
          md: "1fr 1fr", // Two columns for tablet and above
        }}
        alignItems={"center"}
        gap={10}
        as={motion.div}  // Animate the grid
        initial={{ opacity: 0 }}  // Initial state
        animate={inView ? { opacity: 1 } : {}}  // Trigger animation on scroll
        transition={{ duration: 0.8 }}  // Animation duration
      >
        {/* Left Column: About Forstfix */}
        <GridItem>
          <Heading fontSize={["2rem", "2.5rem", "2.5rem"]} color={"black"} mb={4}>
            About Forstfix
          </Heading>
          <Text fontSize={["1rem", "1rem", "1rem"]} color={"#383838"} mb={4}>
            Lorem ipsum dolor sit amet consectetur. Urna vulputate neque arcu eget. Senectus scelerisque egestas quisque tortor elit eget bibendum amet aliquam. Pellentesque consectetur non non imperdiet. Sed tincidunt viverra a aliquet placerat porta tortor. Adipiscing tortor eu commodo sem in enim sit libero. Odio volutpat nunc tortor felis nibh sodales id. Vestibulum tristique convallis nec pulvinar etiam nullam elit neque. Massa faucibus mattis pulvinar sit mollis lorem ullamcorper odio faucibus. Nulla varius porttitor pellentesque tristique gravida massa cursus eros semper. Nunc suspendisse quis dui fames. Cras ridiculus in fringilla arcu interdum ultrices laoreet. A tristique orci venenatis lorem. Nisl tortor ligula tristique nam suspendisse elit.
          </Text>
          <Text fontSize={["1rem", "1rem", "1rem"]} color={"#383838"}>
            Pharetra id ipsum diam et ac maecenas aliquet vulputate. Duis blandit vitae ac risus commodo orci. Cursus feugiat diam habitasse habitant posuere.
          </Text>
        </GridItem>

        {/* Right Column: Benefits of Using Forstfix */}
        <GridItem>
          <Heading fontSize={["2rem", "2.5rem", "2.5rem"]} color={"black"} mb={6}>
            Benefits of Using Forstfix
          </Heading>
          <VStack align="start" spacing={6}>
            <BenefitCard
              title="More Convenient"
              text="Life is complicated. We use innovation to simplify it. From using artificial intelligence to learn property dimensions to adding a 3D property interface that lets you select which areas to shovel, forstix was designed to make snow removal simpler. By doing more, the app lets you do less."
            />
            <BenefitCard
              title="More Connected"
              text="Our provider app – Forstix – unlocks the true potential of an on-demand platform. Job requests are sent to a central server and offered to Forstixers based on their availability, real-time location, and other factors. So don’t worry about finding an optimal provider – the app does it for you."
            />
            <BenefitCard
              title="Stronger Communities"
              text="We love technology. But people are our true passion. The app brings local communities together to overcome snow. By using the app, you gain back valuable time. Your neighbors serving as Forstix gain additional income. Neighbors helping neighbors – we call that a win-win."
            />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutSection;