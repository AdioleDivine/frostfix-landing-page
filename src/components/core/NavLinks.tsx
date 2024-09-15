import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
  return (
    <Flex gap={10}>
      {links.map((link, i) => (
        <Box key={i}>
          <Link as={NextLink} fontSize={"sm"} color={'black'}  href={link.href}>
            {link.name}
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default NavLinks;
