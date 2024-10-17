import NextLink from "next/link";
import { FC } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const LogoIcon: FC = () => {
    return (
        <NextLink href={`/#`} passHref>
            <Image
                src="/images/logoicon.svg" // Make sure this is the correct path
                alt="Horai Logo"
                boxSize="50px" // You can use Chakra's size utilities
                mb={5}
                objectFit="contain"
            />
        </NextLink>
    );
};

export default LogoIcon;
