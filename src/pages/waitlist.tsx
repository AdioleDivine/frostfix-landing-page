import { NextPage } from "next";
import React, { useState, useMemo, ChangeEvent } from "react";
import {
    Box,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Image,
    Flex,
    Text,
    VStack,
    Checkbox,
    FormControl,
    FormErrorMessage,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { validateEmail, validateName } from "../utils/validation";

import { SubmitButton } from "../components/core/Buttons";

import Header from "../components/layout/Header";
import TextInputWithIcon from "../components/core/TextInputWithIcon";

// Motion components for animations
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Waitlist: NextPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [interest, setInterest] = useState<string>("homeowner");
    const [promotionalEmails, setPromotionalEmails] = useState(false);
    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const inputData = useMemo(
        () => ({
            name,
            email,
            interest: interest.toUpperCase(),
            promotionalEmails,
        }),
        [name, email, interest, promotionalEmails]
    );

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nameValue = e.target.value;
        const { isValid, errorMessage } = validateName(nameValue);

        setName(nameValue);
        !isValid ? setNameError(errorMessage) : setNameError(null);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        const { isValid, errorMessage } = validateEmail(emailValue);

        setEmail(emailValue);
        !isValid ? setEmailError(errorMessage) : setEmailError(null);
    };

    // Reset form callback (sent to SubmitButton through props)
    const resetForm = () => {
        setName("");
        setEmail("");
        setInterest("homeowner");
        setPromotionalEmails(false);
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

    const checkboxVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.95 },
    };

    return (
        <>
            {/* Header */}
            <Box as="header">
                <Header showActionButton={false} />{" "}
                {/* Use Header without the action button */}
            </Box>

            {/* Background */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100vw"
                height="100vh"
                backgroundImage="url('/images/snow.jpg')" // Replace with actual background image
                backgroundSize="cover"
                opacity={0.05}
                zIndex={-1}
            />

            {/* Form Section */}
            <Box
                minH="100vh"
                p={[6, 10, 20]}
                bg="white"
                display="flex"
                justifyContent="center"
                alignItems="start"
            >
                <MotionBox
                    w="100%"
                    maxW="1000px"
                    display="flex"
                    alignItems="center"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{ base: 10, md: 0 }}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Section: Form */}
                    <MotionVStack
                        w={{ base: "100%", md: "50%" }}
                        align="start"
                        spacing={6}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} // Responsive font size for all devices
                            color="#0B2545"
                        >
                            Sign up to get early Access
                        </Heading>

                        {/* Name Input */}
                        <FormControl isRequired isInvalid={!!nameError}>
                            <TextInputWithIcon
                                imageSrc="/images/solar_user-linear.svg"
                                imageAlt="user icon"
                                placeholder="Full Name"
                                value={name}
                                handleValueChange={handleNameChange}
                            />
                            <FormErrorMessage>{nameError}</FormErrorMessage>
                        </FormControl>

                        {/* Email Input */}
                        <FormControl isRequired isInvalid={!!emailError}>
                            <TextInputWithIcon
                                imageSrc="/images/mdi-light_email.svg"
                                imageAlt="email icon"
                                placeholder="Email Address"
                                value={email}
                                handleValueChange={handleEmailChange}
                            />
                            <FormErrorMessage>{emailError}</FormErrorMessage>
                        </FormControl>

                        <Text
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            color="#0B2545"
                        >
                            I'm interested in joining as a
                        </Text>

                        {/* Radio Buttons */}
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
                                        value="homeowner"
                                        size="lg"
                                        _hover={{
                                            borderColor: "blue.500",
                                            transition: "all 0.3s ease",
                                        }}
                                        _checked={{
                                            bg: "blue.900",
                                            color: "white",
                                            borderColor: "blue.900",
                                        }}
                                    >
                                        Homeowner
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
                                        value="contractor"
                                        size="lg"
                                        _hover={{
                                            borderColor: "blue.500",
                                            transition: "all 0.3s ease",
                                        }}
                                        _checked={{
                                            bg: "blue.900",
                                            color: "white",
                                            borderColor: "blue.900",
                                        }}
                                    >
                                        Contractor
                                    </Radio>
                                </MotionBox>
                            </Stack>
                        </RadioGroup>

                        {/* Promotional Emails Checkbox */}
                        <MotionBox
                            whileHover="hover"
                            whileTap="tap"
                            variants={checkboxVariants}
                            initial="hidden"
                            animate="visible"
                            mt={4}
                        >
                            <Checkbox
                                isChecked={promotionalEmails}
                                onChange={(e) =>
                                    setPromotionalEmails(e.target.checked)
                                }
                                size="lg"
                                colorScheme="blue"
                                _hover={{
                                    borderColor: "blue.500",
                                }}
                                _focus={{
                                    borderColor: "blue.900",
                                    transform: "scale(1.02)",
                                    transition: "transform 0.2s ease",
                                }}
                            >
                                <Text
                                    fontSize={{
                                        base: "md",
                                        md: "lg",
                                        lg: "xl",
                                    }}
                                    color="black"
                                >
                                    Sign up to receive promotional emails
                                </Text>
                            </Checkbox>
                        </MotionBox>

                        {/* Join Button */}
                        <SubmitButton
                            text="Join"
                            endpoint="waitlist"
                            inputData={inputData}
                            resetForm={resetForm}
                        />
                    </MotionVStack>

                    {/* Right Section: Image */}
                    <MotionFlex
                        w={{ base: "100%", md: "50%" }}
                        justify="center"
                        display={{ base: "none", md: "flex" }}
                        variants={imageVariants}
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
