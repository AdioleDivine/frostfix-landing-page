import { FC } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

interface TextInputWithIconProps {
    imageSrc: string;
    imageAlt: string;
    placeholder: string;
    value: string;
    handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputWithIcon: FC<TextInputWithIconProps> = ({
    imageSrc,
    imageAlt,
    placeholder,
    value,
    handleValueChange,
}) => {
    const inputStyles = {
        borderRadius: "0.8rem",
        size: "lg",
        h: "60px",
        w: ["100%", "100%", "80%"],
        color: "#000", // Ensure text inside the input is visible
        _placeholder: { color: "#A0AEC0" }, // Lighter color for the placeholder
        _hover: {
            borderColor: "blue.500", // Frosty blue border on hover
        },
        _focus: {
            borderColor: "blue.900", // Dark blue on focus
            transform: "scale(1.02)", // Slight scaling effect on focus
            transition: "transform 0.2s ease", // Smooth transition
        },
    };

    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                height="100%" // Ensures the icon height matches the input
                display="flex"
                alignItems="center" // Vertically center the icon
            >
                <Image src={imageSrc} alt={imageAlt} boxSize={6} />
            </InputLeftElement>
            <Input
                sx={inputStyles}
                placeholder={placeholder}
                value={value} // Bind the value to the fullName state
                onChange={handleValueChange} // Handle input change
            />
        </InputGroup>
    );
};

export default TextInputWithIcon;
