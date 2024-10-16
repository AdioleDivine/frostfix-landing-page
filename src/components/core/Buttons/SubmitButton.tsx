// @Usage: for the submit button on forms
// @Notes: to use with more endpoints, create new interfaces and add them to the SubmitButtonProps interface

import React, { FC, useMemo } from "react";
import { Button, useToast } from "@chakra-ui/react";

interface WaitlistData {
    name: string;
    email: string;
    interest: string; // homeowner or contractor
    promotionalEmails: boolean;
}

interface ContactData {
    fullName: string;
    email: string;
    message: string;
}

interface SubmitButtonProps {
    text?: string;
    endpoint: string;
    inputData: WaitlistData | ContactData;
}

const SubmitButton: FC<SubmitButtonProps> = React.memo(
    ({ text, endpoint, inputData }) => {
        const toast = useToast();

        console.log("using submit button");

        if (endpoint === "waitlist") {
            console.log("waitlist endpoint");
        }

        if (endpoint === "contact") {
            console.log("contact endpoint");
        }

        return (
            <Button
                bg="blue.900"
                color="white"
                size="lg"
                padding={"2rem"}
                borderRadius={"1rem"}
                w="100%"
                _hover={{
                    backgroundColor: "#123a6b",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
                transition="all 0.3s ease"
                onClick={async () => {
                    const status = await postUser(endpoint, inputData);
                    console.log(status);

                    showToast(toast, status.message, status.type);
                }}
            >
                {text ? text : "Submit"}
            </Button>
        );
    }
);

const postUser = async (
    endpoint: string,
    inputData: WaitlistData | ContactData
) => {
    const res = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
    });

    const data = await res.json();

    if (data.error) {
        return { type: "error", message: data.error };
    }

    if (!res.ok) {
        return {
            type: "error",
            message: "Something went wrong. Please try again later.",
        };
    }

    return { type: "success", message: "Email was sent successfully" };
};

const showToast = (toast: any, message: string, status: string) => {
    toast({
        title: message,
        status,
        duration: 5000,
        isClosable: true,
        position: "top",
    });
};

export default SubmitButton;
