import { FC } from "react"; // Import the FunctionComponent
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import the actual icons used in Get In Touch
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import {
    Box,
    Grid,
    GridItem,
    Heading,
    Text,
    Flex,
    Icon,
} from "@chakra-ui/react";

const Footer: FC = () => {
    return (
        <Box
            as="footer"
            bg="white"
            p={[6, 8, 10]}
            mt={10}
            borderTop="1px solid #E5E5E5"
        >
            <Grid
                templateColumns={{
                    base: "1fr", // Single column for mobile
                    md: "1fr 1fr 1fr", // Three columns for tablet and desktop
                }}
                gap={10} // Gap between columns
                alignItems="start"
            >
                {/* Left side: Logo (replaced by h2) and description */}
                <GridItem>
                    <Flex direction="column">
                        <Heading as="h2" fontSize="3xl" mb={4} color={"#000"}>
                            Horai
                        </Heading>{" "}
                        {/* Replaced logo with Heading */}
                        <Text color="gray.600" fontSize="md">
                            Lorem ipsum dolor sit amet consectetur. Nec integer
                            consectetur arcu cursus massa nulla egestas.
                            Malesuada tellus porta justo egestas velit.
                        </Text>
                    </Flex>
                </GridItem>

                {/* Middle: Support Links (styled as subtitle) */}
                <GridItem>
                    <Heading fontSize="lg" mb={4} color={"#000"}>
                        Support
                    </Heading>{" "}
                    {/* Support styled as subtitle */}
                    <Flex direction="column" gap={2}>
                        {["home", "about", "features", "contact"].map(
                            (section, idx) => (
                                <ScrollLink
                                    key={idx}
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="active"
                                >
                                    <Text
                                        as="span"
                                        cursor="pointer"
                                        color="gray.600"
                                        position="relative"
                                        _hover={{
                                            color: "blue.900",
                                            textDecoration: "none",
                                            _after: {
                                                width: "100%", // Animate the underline from left to right
                                            },
                                        }}
                                        _after={{
                                            content: '""',
                                            position: "absolute",
                                            width: "0", // Start with no underline
                                            height: "2px",
                                            bottom: "-2px", // Place the underline slightly below the text
                                            left: "0",
                                            bg: "blue.900", // Underline color
                                            transition:
                                                "width 0.3s ease-in-out", // Smooth underline animation
                                        }}
                                    >
                                        {section.charAt(0).toUpperCase() +
                                            section.slice(1)}
                                    </Text>
                                </ScrollLink>
                            )
                        )}
                    </Flex>
                </GridItem>

                {/* Right side: Contact Info with Icons (styled as subtitle) */}
                <GridItem>
                    <Heading fontSize="lg" mb={4} color={"#000"}>
                        Contact Info
                    </Heading>{" "}
                    {/* Contact Info styled as subtitle */}
                    <Flex alignItems="center" mb={4}>
                        <Icon
                            as={FaMapMarkerAlt}
                            boxSize={5}
                            mr={3}
                            color="blue.900"
                        />{" "}
                        {/* Address icon */}
                        <Text color="gray.600">
                            ui fames Cras Street, ridiculus in fringilla arcu
                            interdum ultrices Canada
                        </Text>
                    </Flex>
                    <Flex alignItems="center" mb={4}>
                        <Icon
                            as={FaPhoneAlt}
                            boxSize={5}
                            mr={3}
                            color="blue.900"
                        />{" "}
                        {/* Phone icon */}
                        <Text color="gray.600">
                            +447 093 3773 373, +447 8363 733 333
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon
                            as={FaEnvelope}
                            boxSize={5}
                            mr={3}
                            color="blue.900"
                        />{" "}
                        {/* Email icon */}
                        <Text color="gray.600">horaiapp@gmail.com</Text>
                    </Flex>
                </GridItem>
            </Grid>

            {/* Copyright section */}
            <Text textAlign="center" color="gray.500" mt={10} fontSize="sm">
                &copy; Horai 2024
            </Text>
        </Box>
    );
};

export default Footer;
