import { NextPage } from "next";
import React, { useState } from "react";
import {
    Box,
    Heading,
    Input,
    Button,
    Radio,
    RadioGroup,
    Stack,
    Image,
    Flex,
    Text,
    VStack,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

import Header from "../components/layout/Header"; // Import the Header

// Motion components for animations
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const sendEmail = async (email: string, name: string, interest: string) => {
    // Send email logic here
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
        console.error("API URL not found");
        return;
    }

    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            name,
            interest: interest.toUpperCase(),
        }),
    });

    if (!res.ok) {
        console.error("Failed to send email", res.status, res.statusText);
    }

    const data = await res.json();
    console.log("Email sent!", data);
};

const Waitlist: NextPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [interest, setInterest] = useState<string>("homeowner");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setName(e.target.value);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setEmail(e.target.value);
        }
    };

    // Animation variants
    const formVariants = {
        hidden: { opacity: 0, x: -50 }, // Hidden to the left
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide into view
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 }, // Hidden to the right
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Slide into view with a delay
    };

    const radioVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            {/* Header with background color changed to #FCFCFC */}
            <Box as="header">
                <Header showActionButton={false} />{" "}
                {/* Use Header without the action button */}
            </Box>

            {/* Snowflake Background */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100vw"
                height="100vh"
                backgroundImage="url('/images/snow.jpg')" // Replace with actual snowflake background image
                backgroundSize="cover"
                opacity={0.05} // Light opacity for subtle effect
                zIndex={-1}
            />

            <Box
                minH="100vh"
                p={[6, 10, 20]}
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <MotionBox
                    w="100%"
                    maxW="1000px"
                    display="flex"
                    alignItems="center"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{ base: 10, md: 0 }} // Adds gap between form and image on mobile
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Section: Form with animation */}
                    <MotionVStack
                        w={{ base: "100%", md: "50%" }}
                        align="start"
                        spacing={5}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font size for all devices
                            color="#0B2545"
                        >
                            Sign up to get early Access
                        </Heading>

                        {/* Input Group with Icon for Full Name */}
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                height="100%" // Ensures the icon height matches the input
                                display="flex"
                                alignItems="center" // Vertically center the icon
                            >
                                <Image
                                    src="/images/solar_user-linear.svg"
                                    alt="user icon"
                                    boxSize={6}
                                />
                            </InputLeftElement>
                            <Input
                                borderRadius={"0.8rem"}
                                placeholder="Full Name"
                                size="lg"
                                w="100%"
                                color="black" // Ensure text inside the input is visible
                                _placeholder={{ color: "#A0AEC0" }} // Lighter color for the placeholder
                                _hover={{
                                    borderColor: "blue.500", // Frosty blue border on hover
                                }}
                                _focus={{
                                    borderColor: "blue.900", // Dark blue on focus
                                    transform: "scale(1.02)", // Slight scaling effect on focus
                                    transition: "transform 0.2s ease", // Smooth transition
                                }}
                                value={name} // Bind the value to the fullName state
                                onChange={handleNameChange} // Handle input change
                            />
                        </InputGroup>

                        {/* Input Group with Icon for Email Address */}
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                height="100%" // Ensures the icon height matches the input
                                display="flex"
                                alignItems="center" // Vertically center the icon
                            >
                                <Image
                                    src="/images/mdi-light_email.svg"
                                    alt="email icon"
                                    boxSize={6}
                                />
                            </InputLeftElement>
                            <Input
                                placeholder="Email Address"
                                borderRadius={"0.8rem"}
                                size="lg"
                                w="100%"
                                color="black" // Ensure text inside the input is visible
                                _placeholder={{ color: "#A0AEC0" }} // Lighter color for the placeholder
                                _hover={{
                                    borderColor: "blue.500", // Frosty blue border on hover
                                }}
                                _focus={{
                                    borderColor: "blue.900", // Dark blue on focus
                                    transform: "scale(1.02)", // Slight scaling effect on focus
                                    transition: "transform 0.2s ease", // Smooth transition
                                }}
                                value={email} // Bind the value to the fullName state
                                onChange={handleEmailChange} // Handle input change
                            />
                        </InputGroup>

                        <Text
                            fontSize={{ base: "md", md: "lg", lg: "xl" }} // Adjust the text size responsively
                            color="#0B2545"
                        >
                            Signing up as a
                        </Text>

                        {/* Styled Radio Buttons with transition animation */}
                        <RadioGroup
                            onChange={setInterest}
                            value={interest}
                            color="#0B2545"
                        >
                            <Stack direction="row" gap="2rem">
                                <MotionBox
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={radioVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Radio
                                        value="contractor"
                                        size="lg" // Larger radio button
                                        _hover={{
                                            borderColor: "blue.500", // Hover color for radio
                                            transition: "all 0.3s ease", // Smooth hover transition
                                        }}
                                        _checked={{
                                            bg: "blue.900", // Dark blue fill when checked
                                            color: "white", // White checkmark when selected
                                            borderColor: "blue.900", // Border matches the dark blue fill
                                        }}
                                    >
                                        Contractor
                                    </Radio>
                                </MotionBox>
                                <MotionBox
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={radioVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Radio
                                        value="homeowner"
                                        size="lg" // Larger radio button
                                        _hover={{
                                            borderColor: "blue.500", // Hover color for radio
                                            transition: "all 0.3s ease", // Smooth hover transition
                                        }}
                                        _checked={{
                                            bg: "blue.900", // Dark blue fill when checked
                                            color: "white", // White checkmark when selected
                                            borderColor: "blue.900", // Border matches the dark blue fill
                                        }}
                                    >
                                        Homeowner
                                    </Radio>
                                </MotionBox>
                            </Stack>
                        </RadioGroup>

                        {/* Join Button with Hover Effect */}
                        <Button
                            bg="blue.900"
                            color="white"
                            size="lg"
                            padding={"2rem"}
                            borderRadius={"1rem"}
                            w="100%" // Set width to match inputs
                            _hover={{
                                backgroundColor: "#123a6b", // Lighter shade on hover
                                transform: "scale(1.05)", // Slightly enlarge the button
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Add a soft shadow
                            }}
                            transition="all 0.3s ease" // Smooth transition for hover effects
                            onClick={() => sendEmail(email, name, interest)}
                        >
                            Join
                        </Button>
                    </MotionVStack>

                    {/* Right Section: Image (Hide on Mobile) */}
                    <MotionFlex
                        w={{ base: "100%", md: "50%" }}
                        justify="center"
                        display={{ base: "none", md: "flex" }} // Hide image on mobile
                        variants={imageVariants} // Add animation to image
                        initial="hidden"
                        animate="visible"
                    >
                        <Image
                            src="/images/iPhone15.png"
                            alt="iPhone Image"
                            maxW="100%"
                            height="auto"
                        />
                    </MotionFlex>
                </MotionBox>
            </Box>
        </>
    );
};

export default Waitlist;
