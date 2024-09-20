import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const links = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Features", href: "features" },
  { name: "Contact", href: "contact" },
];

const NavLinks = ({ direction = "row", onClose }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // This effect ensures we only enable client-side smooth scrolling after the component is mounted.
  useEffect(() => {
    setIsMounted(true); // We set isMounted to true only on the client-side
  }, []);

  return (
    <Flex direction={{ base: "column", md: direction }} gap={10}>
      {links.map((link, i) => (
        <Box key={i}>
          {/* Use ScrollLink only on the homepage after the component is mounted */}
          {isMounted && router.pathname === "/" ? (
            <ScrollLink
              to={link.href}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={onClose}
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
            </ScrollLink>
          ) : (
            // Fallback to NextLink to handle full-page navigation when not on the homepage
            <NextLink href={`/#${link.href}`} passHref>
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
                onClick={onClose}
              >
                {link.name}
              </ChakraLink>
            </NextLink>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default NavLinks;