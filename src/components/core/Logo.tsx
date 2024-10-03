import NextLink from "next/link";
import { FC } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const Logo: FC = () => {
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
