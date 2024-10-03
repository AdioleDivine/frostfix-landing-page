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
                fontSize={["1.5rem", "1.75rem", "2rem"]}
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
        <Box p={["5rem", "1rem", "1.5rem"]} bgColor={"#FCFCFC"} ref={ref}>
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
                    padding={["1rem", "0", "0 3.7rem"]}
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
                        Lorem ipsum dolor sit amet consectetur. Urna vulputate
                        neque arcu eget. Senectus scelerisque egestas quisque
                        tortor elit eget bibendum amet aliquam. Pellentesque
                        consectetur non non imperdiet. Sed tincidunt viverra a
                        aliquet placerat porta tortor. Adipiscing tortor eu
                        commodo sem in enim sit libero. Odio volutpat nunc
                        tortor felis nibh sodales id. Vestibulum tristique
                        convallis nec pulvinar etiam nullam elit neque. Massa
                        faucibus mattis pulvinar sit mollis lorem ullamcorper
                        odio faucibus. Nulla varius porttitor pellentesque
                        tristique gravida massa cursus eros semper. Nunc
                        suspendisse quis dui fames. Cras ridiculus in fringilla
                        arcu interdum ultrices laoreet. A tristique orci
                        venenatis lorem. Nisl tortor ligula tristique nam
                        suspendisse elit.
                    </Text>
                    <Text fontSize={["1rem", "1rem", "1rem"]} color={"#383838"}>
                        Pharetra id ipsum diam et ac maecenas aliquet vulputate.
                        Duis blandit vitae ac risus commodo orci. Cursus feugiat
                        diam habitasse habitant posuere.
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
