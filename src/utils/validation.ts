// utils/validation.ts

const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
        return { isValid: false, errorMessage: "Invalid email address." };
    }

    return { isValid: true, errorMessage: "" };
};

const validateName = (value: string) => {
    const isValid = /^[a-zA-Z-\s]+$/.test(value);
    if (!isValid) {
        return {
            isValid: false,
            errorMessage:
                "Full name cannot contain numbers or special characters other than -.",
        };
    }

    return { isValid: true, errorMessage: "" };
};

export { validateEmail, validateName };
