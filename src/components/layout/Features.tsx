import { Box, Grid, GridItem, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

// MotionBox with Framer Motion for animations
const MotionBox = motion(Box);

// Feature Card Component
interface FeatureCardProps {
  title: string;
  text: ReactNode;
  icon: string; // Path to the icon as a string
}

const FeatureCard = ({ title, text, icon }: FeatureCardProps) => {
  return (
    <Flex gap={3} align="flex-start" direction="row">
      <Image src={icon} alt={title} boxSize="40px" /> {/* Use Image for PNG icons */}
      <Box>
        <Heading fontSize={["lg", "xl", "2xl"]} color="black">
          {title}
        </Heading>
        <Text fontSize={["sm", "md", "lg"]} paddingTop={"1rem"} color={"#000"}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

// Features Component with Animation
const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation only runs once
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

  return (
    <Box p={[6, 10, 20]} bg={"#FCFCFC"}>
      {/* Title and Subtitle */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading fontSize={["2xl", "3xl", "4xl"]} color={"black"}>
          Features
        </Heading>
        <Text fontSize={["sm", "md", "lg"]} color={"#000E1B80"}>
          This is a list of features that make your life a little easier.
        </Text>
      </VStack>

      {/* Features Grid with animations */}
      <Grid
        ref={ref}  // Attach IntersectionObserver to the grid
        as={motion.div} // Animate the grid
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger animation on in-view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation transition
        templateColumns={{
          base: "1fr", // Single column for mobile
          md: "repeat(2, 1fr)", // Two columns for tablet and desktop
        }}
        gap={10}
      >
        <GridItem>
          <FeatureCard
            title="Booking"
            text="Need your snow cleared by a certain time? You can now schedule a job up to twelve hours ahead! Scheduled jobs are offered to Snow Pacifiers in advance to get them done on time."
            icon="/images/booking.png"  // Replace with the correct PNG path
          />
        </GridItem>

        <GridItem>
          <FeatureCard
            title="Assesses Property Using AI"
            text="No need to measure your property – simply enter your address. Using artificial intelligence, Forstfix tries to detect the location of your sidewalk, walkway, and driveway, and estimates their dimensions."
            icon="/images/ai.png"  // Replace with the correct PNG path
          />
        </GridItem>

        <GridItem>
          <FeatureCard
            title="Reuse Your Favorite Options"
            text="We know you don’t have a lot of time, so no need to select the same options each time it snows. The app remembers your previous selections, so you can reuse the options you like to quickly request a job."
            icon="/images/reuse.png"  // Replace with the correct PNG path
          />
        </GridItem>

        <GridItem>
          <FeatureCard
            title="Objective Pricing"
            text="Pricing is based on objective factors such as the estimated dimensions of your property and estimated snow accumulation in your area. Pricing changes with each selection you make in the app, so you can request tasks based on your budget."
            icon="/images/pricing.png"  // Replace with the correct PNG path
          />
        </GridItem>

        <GridItem>
          <FeatureCard
            title="Weather Detection"
            text="By incorporating Dark Sky’s technology, Pacify Snow finds how much snow has accumulated in your specific area. This leads to fairer pricing."
            icon="/images/weather.png"  // Replace with the correct PNG path
          />
        </GridItem>

        <GridItem>
          <FeatureCard
            title="Provide Us Feedback"
            text="You can rate the quality of a Snow Pacifier’s work, and provide comments through a simple interface. Give it to us straight. This will help us to improve the app to better serve you."
            icon="/images/feedback.png"  // Replace with the correct PNG path
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Features;