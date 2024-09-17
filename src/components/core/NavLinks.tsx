import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-scroll"; // Import from react-scroll
import { useEffect, useState } from "react";
import React from "react";

const links = [
  {
    name: "Home",
    href: "hero", // ID of the Hero section
  },
  {
    name: "About",
    href: "about", // ID of the About section
  },
  {
    name: "Features",
    href: "features", // ID of the Features section
  },
  {
    name: "Contact",
    href: "contact", // ID of the Contact section
  },
];

const NavLinks = ({ direction = "row", onClose }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this only runs on the client side
  }, []);

  return (
    <Flex direction={{ base: "column", md: direction }} gap={10}>
      {isClient &&
        links.map((link, i) => (
          <Box key={i}>
            <Link
              to={link.href}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose} // This will close the sidebar when a link is clicked
            >
              <ChakraLink
                fontSize={"sm"}
                color={"black"}
                fontWeight={700}
                position="relative"
                _hover={{
                  color: "blue.500",
                  _after: {
                    width: "100%",
                  },
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "3px",
                  bottom: "-6px",
                  left: "0",
                  backgroundColor: "blue.500",
                  borderRadius: "8px",
                  transition: "width 0.4s ease, background-color 0.3s ease",
                }}
              >
                {link.name}
              </ChakraLink>
            </Link>
          </Box>
        ))}
    </Flex>
  );
};

export default NavLinks;