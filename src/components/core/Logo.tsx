import React from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const Logo = () => {
    return (
        <NextLink href={`/#`} passHref>
            <Image
                src="/images/horai_logo.svg" // Make sure this is the correct path
                alt="Horai Logo"
                boxSize="150px" // You can use Chakra's size utilities
                objectFit="contain"
            />
        </NextLink>
    );
};

export default Logo;
