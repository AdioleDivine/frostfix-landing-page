import { FC } from "react";
import {
    Box,
    Heading,
    Image,
    Button,
    Grid,
    Text,
    Flex,
} from "@chakra-ui/react";

const GetApp: FC = () => {
    return (
        <Box
            bgImage="url('/images/GetApp.png')" // Background image path
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            borderRadius="md"
            mt={10}
            px={4} // Padding for mobile responsiveness
            py={[6, 8, 10]} // Vertical padding
            maxW="81.875rem" // Max width as per your design
            mx="auto" // Centers the container horizontally
            height={["auto", "auto", "31.688rem"]} // Set responsive height
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                templateColumns={{
                    base: "1fr", // Single column for mobile
                    md: "1fr 1fr", // Two columns for tablet and desktop
                }}
                gap={10} // Gap between columns
                alignItems="center"
                w="100%" // Ensures grid takes full width
                maxW="80rem" // Restricts the width on large screens
                mx="auto" // Centers the grid horizontally
            >
                {/* Left side image of phones */}
                <Image
                    // src="/images/appPhone.png" // Path to the app phone image
                    alt="App display"
                    maxW={["100%", "80%", "100%"]} // Full width for mobile, 80% for tablet
                    display="block"
                    mx="auto" // Center on mobile and tablet
                />

                {/* Right side content for Get App */}
                <Box color="white" textAlign={["center", "center", "left"]}>
                    <Heading fontSize={["2xl", "3xl", "4xl"]} mb={4}>
                        Get the App Now
                    </Heading>
                    <Text fontSize={["sm", "md", "lg"]} mb={6}>
                        Get our mobile app on any device you use on the App
                        Store or Google Play store.
                    </Text>

                    {/* Buttons for app stores */}
                    <Flex
                        justifyContent={["center", "center", "flex-start"]}
                        gap={4}
                    >
                        {/* Google Play Button */}
                        <Button
                            as="a"
                            href="#"
                            bg="white"
                            color="black"
                            _hover={{ bg: "gray.200" }}
                            size="lg"
                            px={6}
                            py={4}
                            borderRadius="md"
                            padding={"2rem"}
                        >
                            <Grid
                                templateColumns="50px auto"
                                alignItems="center"
                                gap={2}
                            >
                                {/* Icon on the left */}
                                <Image
                                    src="/images/google-play.svg" // Updated image path
                                    alt="Google Play"
                                    boxSize="40px"
                                />
                                {/* Text on the right */}
                                <Grid templateRows="auto auto" gap={"0.3rem"}>
                                    <Text fontSize="1.1rem" color="black">
                                        Get it on
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color="black"
                                        fontWeight="bold"
                                    >
                                        Google Play
                                    </Text>
                                </Grid>
                            </Grid>
                        </Button>

                        {/* Apple Store Button */}
                        <Button
                            as="a"
                            href="#"
                            bg="white"
                            color="black"
                            _hover={{ bg: "gray.200" }}
                            size="lg"
                            px={6}
                            py={4}
                            borderRadius="md"
                            padding={"2rem"}
                        >
                            <Grid
                                templateColumns="50px auto"
                                alignItems="center"
                                gap={2}
                            >
                                {/* Icon on the left */}
                                <Image
                                    src="/images/apple-store.svg" // Updated image path
                                    alt="Apple Store"
                                    boxSize="40px"
                                />
                                {/* Text on the right */}
                                <Grid templateRows="auto auto" gap={"0.3rem"}>
                                    <Text fontSize="1rem" color="black">
                                        Download on the
                                    </Text>
                                    <Text
                                        fontSize="lg"
                                        color="black"
                                        fontWeight="bold"
                                    >
                                        Apple Store
                                    </Text>
                                </Grid>
                            </Grid>
                        </Button>
                    </Flex>
                </Box>
            </Grid>
        </Box>
    );
};

export default GetApp;
