import { Box, Button, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@chakra-ui/icons";  // This icon is for the "up" arrow.

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {  // Show the button after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Smooth scroll to the top
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box position="fixed" bottom="50px" right="50px" zIndex={1000}>
      {isVisible && (
        <IconButton
          icon={<ChevronUpIcon />}  // "Up" arrow icon
          onClick={scrollToTop}
          colorScheme="blue"
          borderRadius="full"
          aria-label="Scroll to top"
          size="lg"
          boxShadow="lg"
          _hover={{ bg: "blue.600" }}
        />
      )}
    </Box>
  );
};

export default ScrollToTop;