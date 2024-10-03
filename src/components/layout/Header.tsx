import { FC } from "react";
import { Flex, Box, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../core/Logo";
import NavLinks from "../core/NavLinks";
import ActionBtns from "../core/ActionBtns"; // The early access button
import { HamburgerIcon, CloseIcon } from "../core/Icons";

interface HeaderProps {
    showActionButton?: boolean;
}

const Header: FC<HeaderProps> = ({ showActionButton = true }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            justify="space-between"
            align="center"
            p={["0.75rem", "0.75rem 1rem", "0.75rem 4rem"]}
            bg="#FCFCFC"
        >
            {/* Logo */}
            <Box>
                <Logo />
            </Box>

            {/* Nav Links */}
            <Box display={{ base: "none", md: "block" }}>
                <NavLinks onClose={undefined} />
            </Box>

            {/* Action Button */}
            {showActionButton && (
                <Box display={{ base: "none", md: "block" }}>
                    <ActionBtns />
                </Box>
            )}

            {/* Hamburger Menu for Mobile */}
            <Box display={{ base: "block", md: "none" }}>
                <IconButton
                    aria-label="Toggle Menu"
                    icon={
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </motion.div>
                    }
                    onClick={isOpen ? onClose : onOpen}
                    backgroundColor="transparent"
                    _hover={{ bg: "none" }}
                    transition="all 0.3s ease"
                />
            </Box>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                zIndex: 10,
                            }}
                            onClick={onClose}
                        />

                        {/* Menu sliding down from top */}
                        <motion.div
                            key="menu"
                            initial={{ y: "-100%" }} // Slide from top
                            animate={{ y: "0" }} // Move to normal position
                            exit={{ y: "-100%" }} // Slide back up when closed
                            transition={{ duration: 0.5 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw", // Full screen width
                                height: "50vh", // Half the screen height
                                backgroundColor: "white",
                                zIndex: 20,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "2rem",
                                boxShadow: "lg",
                                borderBottom: "4px solid #0B2545", // Stylish border at the bottom
                            }}
                        >
                            <VStack spacing={6}>
                                <NavLinks
                                    direction="column"
                                    onClose={onClose}
                                />
                                {showActionButton && <ActionBtns />}
                            </VStack>

                            <IconButton
                                aria-label="Close Menu"
                                icon={<CloseIcon />}
                                onClick={onClose}
                                backgroundColor="transparent"
                                _hover={{ bg: "none" }}
                                transition="all 0.3s ease"
                                position="absolute"
                                top="20px"
                                right="20px" // Close button on the right
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Flex>
    );
};

export default Header;
