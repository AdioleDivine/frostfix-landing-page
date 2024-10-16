import { FC, useState } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView for scroll detection
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
    Box,
    Heading,
    Input,
    Button,
    Image,
    Flex,
    Text,
    VStack,
    Textarea,
    Grid,
    GridItem,
    Icon,
    Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import framer-motion

import { MailIcon } from "../core/Icons";

const sendEmail = async (fullName: string, email: string, message: string) => {
    // Send email logic here
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
        console.error("API URL not found");
        return;
    }

    const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullName,
            email,
            message,
        }),
    });

    if (!res.ok) {
        console.error("Failed to send email", res.status, res.statusText);
    }

    const data = await res.json();
    console.log("Email sent!", data);
};

const ContactForm: FC = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // Set up the scroll detection for animation triggers
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true, // Only trigger once when the user scrolls to it
        threshold: 0.1, // Trigger when 10% of the section is in view
    });

    // Handle State Functions
    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setFullName(e.target.value);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setEmail(e.target.value);
        }
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 0) {
            setMessage(e.target.value);
        }
    };

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
                        <Input
                            placeholder="Full name"
                            size="lg"
                            color="black"
                            borderRadius="md"
                            aria-label="Full name"
                            _hover={{
                                borderColor: "blue.500", // Frosty blue border on hover
                            }}
                            _focus={{
                                borderColor: "blue.900", // Dark blue on focus
                                transform: "scale(1.02)", // Slight scaling effect on focus
                                transition: "transform 0.2s ease", // Smooth transition
                            }}
                            value={fullName}
                            onChange={handleFullNameChange}
                        />

                        {/* Email Address Input */}
                        <Input
                            placeholder="Email address"
                            size="lg"
                            color="black"
                            borderRadius="md"
                            aria-label="Email address"
                            type="email"
                            _hover={{
                                borderColor: "blue.500", // Frosty blue border on hover
                            }}
                            _focus={{
                                borderColor: "blue.900", // Dark blue on focus
                                transform: "scale(1.02)", // Slight scaling effect on focus
                                transition: "transform 0.2s ease", // Smooth transition
                            }}
                            value={email}
                            onChange={handleEmailChange}
                        />

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
                            onChange={handleMessageChange}
                        />

                        {/* Submit Button with hover animation */}
                        <Button
                            bg="blue.900"
                            color="white"
                            size="lg"
                            borderRadius="md"
                            width="fit-content"
                            transition="all 0.3s ease" // Smooth transition for hover effects
                            _hover={{
                                backgroundColor: "#123a6b", // Change the background on hover
                                color: "#ffffff", // Keep the text color white
                                transform: "scale(1.05)", // Slightly enlarge the button
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Add a soft shadow
                            }}
                            onClick={() => sendEmail(fullName, email, message)}
                        >
                            Submit
                        </Button>
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
