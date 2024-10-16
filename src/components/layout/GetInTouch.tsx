import { FC, useState, ChangeEvent } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
    Box,
    Heading,
    Input,
    Image,
    Flex,
    Text,
    VStack,
    Textarea,
    Grid,
    GridItem,
    Icon,
    Link,
    FormControl,
    FormErrorMessage,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import framer-motion

import { validateEmail, validateName } from "../../utils/validation";

import { MailIcon } from "../core/Icons";
import { SubmitButton } from "../core/Buttons";

const ContactForm: FC = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const inputData = {
        fullName,
        email,
        message,
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nameValue = e.target.value;
        const { isValid, errorMessage } = validateName(nameValue);

        setFullName(nameValue);
        !isValid ? setFullNameError(errorMessage) : setFullNameError(null);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        const { isValid, errorMessage } = validateEmail(emailValue);

        setEmail(emailValue);
        !isValid ? setEmailError(errorMessage) : setEmailError(null);
    };

    // Reset form callback (sent to SubmitButton through props)
    const resetForm = () => {
        setFullName("");
        setEmail("");
        setMessage("");
    };

    // Set up the scroll detection for animation triggers
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true, // Only trigger once when the user scrolls to it
        threshold: 0.1, // Trigger when 10% of the section is in view
    });

    return (
        <Box ref={formRef} p={[6, 10, 20]} bg={"#FCFCFC"}>
            <Heading
                fontSize={["2xl", "3xl", "4xl"]}
                color={"black"}
                mb={10}
                textAlign="center"
            >
                Get In Touch
            </Heading>

            <Grid
                as={motion.div} // Use framer-motion to animate the grid
                initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
                animate={formInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and normal position when in view
                // transition={{ duration: 1, ease: "easeOut" }} // Control the duration of the animation
                templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Correctly typed templateColumns
                gap={10}
            >
                {/* Left Side: Send a Message Form */}
                <GridItem
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }} // Start hidden and shifted left
                    animate={formInView ? { opacity: 1, x: 0 } : {}} // Animate to visible and normal position when in view
                    // transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} // Delay slightly for staggered effect
                >
                    <VStack spacing={4} align="start">
                        <Flex align="center">
                            <Heading fontSize={"lg"} color="black" mr={2}>
                                Send a message
                            </Heading>
                            <MailIcon />
                        </Flex>

                        {/* Full Name Input */}
                        <FormControl isRequired isInvalid={!!fullNameError}>
                            <Input
                                placeholder="Full name"
                                size="lg"
                                color="black"
                                borderRadius="md"
                                aria-label="Full name"
                                _hover={{
                                    borderColor: "blue.500",
                                }}
                                _focus={{
                                    borderColor: "blue.900",
                                    transform: "scale(1.02)",
                                    transition: "transform 0.2s ease",
                                }}
                                value={fullName}
                                onChange={handleFullNameChange}
                            />
                            <FormErrorMessage>{fullNameError}</FormErrorMessage>
                        </FormControl>

                        {/* Email Address Input */}
                        <FormControl isRequired isInvalid={!!emailError}>
                            <Input
                                placeholder="Email address"
                                size="lg"
                                color="black"
                                borderRadius="md"
                                aria-label="Email address"
                                type="email"
                                _hover={{
                                    borderColor: "blue.500",
                                }}
                                _focus={{
                                    borderColor: "blue.900",
                                    transform: "scale(1.02)",
                                    transition: "transform 0.2s ease",
                                }}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <FormErrorMessage>{emailError}</FormErrorMessage>
                        </FormControl>

                        {/* Description Textarea */}
                        <Textarea
                            placeholder="Description"
                            size="lg"
                            color="black"
                            borderRadius="md"
                            height="120px"
                            aria-label="Description"
                            _hover={{
                                borderColor: "blue.500", // Frosty blue border on hover
                            }}
                            _focus={{
                                borderColor: "blue.900", // Dark blue on focus
                                transform: "scale(1.02)", // Slight scaling effect on focus
                                transition: "transform 0.2s ease", // Smooth transition
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        {/* Submit Button with hover animation */}
                        <SubmitButton
                            endpoint="contact"
                            inputData={inputData}
                            resetForm={resetForm}
                        />
                    </VStack>
                </GridItem>

                {/* Right Side: Contact Information */}
                <GridItem
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }} // Start hidden and shifted right
                    animate={formInView ? { opacity: 1, x: 0 } : {}} // Animate to visible and normal position when in view
                    // transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }} // Delay staggered after the form
                    bg="blue.900"
                    borderRadius="md"
                    p={8}
                    color="white"
                >
                    <VStack spacing={6} align="start">
                        <Heading fontSize={"lg"}>Contact information</Heading>

                        <Flex align="center">
                            <Image
                                src="/images/location.svg"
                                boxSize={6}
                                mr={4}
                                alt="Location Icon"
                            />
                            <Text>
                                ui fames Cras Street, ridiculus in fringilla
                                arcu interdum ultrices Canada
                            </Text>
                        </Flex>

                        <Flex align="center">
                            <Image
                                src="/images/call-calling.svg"
                                boxSize={6}
                                mr={4}
                                alt="Phone Icon"
                            />
                            <Text>+447 093 3773 373, +447 8363 733 333</Text>
                        </Flex>

                        <Flex align="center">
                            <Image
                                src="/images/sms.svg"
                                boxSize={6}
                                mr={4}
                                alt="Email Icon"
                            />
                            <Text>horaiapp@gmail.com</Text>
                        </Flex>

                        {/* Social Media Icons */}
                        <Flex justify="space-between" width="100px" pt={4}>
                            <Link href="#" isExternal>
                                <Icon as={FaFacebookF} boxSize={6} />
                            </Link>
                            <Link href="#" isExternal>
                                <Icon as={FaTwitter} boxSize={6} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/horaiapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                isExternal
                            >
                                <Icon as={FaInstagram} boxSize={6} />
                            </Link>
                        </Flex>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ContactForm;
