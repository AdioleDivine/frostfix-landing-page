import { ReactNode, FC } from "react";
import { useInView } from "react-intersection-observer"; // For detecting when elements are in view
import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion"; // For animations

import { BenefitIcon } from "../core/Icons";

// MotionBox for animating Box components
const MotionBox = motion(Box);

interface BenefitCardProps {
    title: string;
    text: ReactNode;
}

const BenefitCard = ({ title, text }: BenefitCardProps) => (
    <MotionBox
        textAlign="left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <VStack align="center" flexDirection={"row"} spacing={2}>
            <BenefitIcon /> {/* Icon on top */}
            <Heading
                fontSize={["1.3rem", "1.75rem", "2rem"]}
                color="black"
                textAlign="center"
            >
                {" "}
                {/* Title */}
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

const AboutSection: FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.2, // When 20% of the component is in view
    });

    return (
        <Box p={["2rem", "2rem", "1.5rem"]} bgColor={"#FCFCFC"} ref={ref}>
            {" "}
            {/* Background color set to #FCFCFC */}
            <Grid
                templateColumns={{
                    base: "1fr", // Single column for mobile
                    md: "1fr 1fr", // Two columns for tablet and above
                }}
                alignItems={"center"}
                gap={10}
                as={motion.div} // Animate the grid
                initial={{ opacity: 0 }} // Initial state
                animate={inView ? { opacity: 1 } : {}} // Trigger animation on scroll
                // transition={{ duration: 0.8 }}  // Animation duration
            >
                {/* Left Column: About Horai */}
                <GridItem
                    bgColor={"#FCFCFC"}
                    padding={["0rem", "0", "0 3.7rem"]}
                    borderRadius={"1rem"}
                >
                    <Heading
                        fontSize={["2rem", "2.5rem", "2.5rem"]}
                        color={"black"}
                        mb={4}
                    >
                        About Horai
                    </Heading>
                    <Text
                        fontSize={["1rem", "1rem", "1rem"]}
                        color={"#383838"}
                        mb={4}
                    >
                       Horai App is your reliable companion for seasonal home care. We specialize in offering tailored snow removal, driveway clearing, and leaf blowing services designed to keep your home safe, clean, and accessible throughout the year. Whether it&apos;s the harsh winter or the leafy fall, Horai App ensures your property is well-maintained, giving you peace of mind.
                    </Text>
                    <Text fontSize={["1rem", "1rem", "1rem"]} color={"#383838"}>
                    With features like early-hour snow removal and subscription packages, we prioritize convenience and flexibility, allowing homeowners to choose the services that best fit their needs. Whether you&apos;re a homeowner looking for professional help or a contractor offering your services, Horai App brings the community together, making seasonal maintenance hassle-free and efficient.
                    </Text>
                </GridItem>

                {/* Right Column: Benefits of Using Horai */}
                <GridItem>
                    <Heading
                        fontSize={["2rem", "2.5rem", "2.5rem"]}
                        color={"black"}
                        mb={6}
                    >
                        Benefits of Using Horai
                    </Heading>
                    <VStack align="start" spacing={6}>
                        <BenefitCard
                            title="Year round Convenience"
                            text="With seasonal services like snow removal in the winter and leaf blowing in the fall, homeowners can maintain a clean, safe property without the hassle of doing it themselves."
                        />

                        <BenefitCard
                            title="Reliable and Local Contractors"
                            text="asily connect with trusted, local contractors, view ratings, and book services with confidence, ensuring that your home care needs are met by professionals."
                        />

                        <BenefitCard
                            title="Effortless Service Requests"
                            text="With just a few taps, you can schedule services for your home. No more phone calls or long waits—Horai App streamlines the process so help is just a click away."
                        />
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default AboutSection;
