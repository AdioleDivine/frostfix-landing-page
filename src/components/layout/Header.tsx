import { Flex, Box, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import Logo from '../core/Logo';
import NavLinks from '../core/NavLinks';
import ActionBtns from '../core/ActionBtns';
import { motion, AnimatePresence } from 'framer-motion';

// Hamburger Icon SVG Path
const HamburgerIcon = () => (
  <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M7.99996 9.33334H14.6666C15.0202 9.33334 15.3594 9.47382 15.6094 9.72387C15.8595 9.97392 16 10.3131 16 10.6667C16 11.0203 15.8595 11.3594 15.6094 11.6095C15.3594 11.8595 15.0202 12 14.6666 12H7.99996C7.64634 12 7.3072 11.8595 7.05715 11.6095C6.8071 11.3594 6.66663 11.0203 6.66663 10.6667C6.66663 10.3131 6.8071 9.97392 7.05715 9.72387C7.3072 9.47382 7.64634 9.33334 7.99996 9.33334ZM17.3333 20H24C24.3536 20 24.6927 20.1405 24.9428 20.3905C25.1928 20.6406 25.3333 20.9797 25.3333 21.3333C25.3333 21.687 25.1928 22.0261 24.9428 22.2762C24.6927 22.5262 24.3536 22.6667 24 22.6667H17.3333C16.9797 22.6667 16.6405 22.5262 16.3905 22.2762C16.1404 22.0261 16 21.687 16 21.3333C16 20.9797 16.1404 20.6406 16.3905 20.3905C16.6405 20.1405 16.9797 20 17.3333 20ZM7.99996 14.6667H24C24.3536 14.6667 24.6927 14.8072 24.9428 15.0572C25.1928 15.3072 25.3333 15.6464 25.3333 16C25.3333 16.3536 25.1928 16.6928 24.9428 16.9428C24.6927 17.1929 24.3536 17.3333 24 17.3333H7.99996C7.64634 17.3333 7.3072 17.1929 7.05715 16.9428C6.8071 16.6928 6.66663 16.3536 6.66663 16C6.66663 15.6464 6.8071 15.3072 7.05715 15.0572C7.3072 14.8072 7.64634 14.6667 7.99996 14.6667Z"
      fill="black"
    />
  </motion.svg>
);

// Close Icon SVG Path
const CloseIcon = () => (
  <motion.svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 70.4">
    <motion.path
      d="M27.9,24l19.3,19.3c1.1,1.1,1.1,2.8,0,3.9-1.1,1.1-2.8,1.1-3.9,0l-19.3-19.3L4.7,47.2c-1.1,1.1-2.8,1.1-3.9,0-1.1-1.1-1.1-2.8,0-3.9l19.3-19.3L.8,4.7C-.3,3.6-.3,1.9.8.8,1.9-.3,3.6-.3,4.7.8l19.3,19.3h0s3.9,3.9,3.9,3.9h0ZM47.2,4.7l-15.4,15.4-3.9-3.9L43.3.8c1.1-1.1,2.8-1.1,3.9,0,1.1,1.1,1.1,2.8,0,3.9Z"
      fill="black"
    />
  </motion.svg>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manage menu state

  return (
    <Flex justify="space-between" align="center" p={4} bg="white">
      {/* Logo on the left */}
      <Box>
        <Logo />
      </Box>

      {/* Nav Links in the center */}
      <Box display={{ base: 'none', md: 'block' }}>
        <NavLinks onClose={undefined} />
      </Box>

      {/* Action Button on the right */}
      <Box display={{ base: 'none', md: 'block' }}>
        <ActionBtns />
      </Box>

      {/* Hamburger Menu for Mobile */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Toggle Menu"
          icon={
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }} // Fun rotation on open/close
              transition={{ duration: 0.3 }} // Animation speed
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </motion.div>
          }
          onClick={isOpen ? onClose : onOpen}
          backgroundColor="transparent"
          _hover={{ bg: 'none' }}
          transition="all 0.3s ease"
        />
      </Box>

      {/* Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed background overlay */}
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
              onClick={onClose} // Close the menu when clicking outside
            />

            {/* Half-Screen Mobile Menu - Slide in from the right */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: "0.5rem" }} /* Slides in to cover only half of the screen */
              exit={{ x: "100%" }} /* Ensure it slides out smoothly */
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "50vw", /* Set width to half the screen */
                height: "100vh",
                backgroundColor: "white",
                zIndex: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                boxShadow: "lg",
                borderTop: "4px solid #0B2545", /* Stylish border at the top */
              }}
            >
              {/* Nav Links vertically stacked */}
              <VStack spacing={6}>
                <NavLinks direction="column" onClose={onClose} /> {/* Stack links in mobile view */}
                <ActionBtns /> {/* Include the action button in the mobile view */}
              </VStack>

              {/* Close Icon positioned in top-left */}
              <IconButton
                aria-label="Close Menu"
                icon={<CloseIcon />}
                onClick={onClose}
                backgroundColor="transparent"
                _hover={{ bg: 'none' }}
                transition="all 0.3s ease"
                position="absolute"
                top="20px"
                left="20px"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Header;