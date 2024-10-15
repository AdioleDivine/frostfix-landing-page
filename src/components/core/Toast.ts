const showToast = (
    toast: any,
    message: string,
    status: "success" | "error" | "warning" | "info"
) => {
    console.log("in showToast func");

    toast({
        title: message,
        status,
        duration: 5000,
        isClosable: true,
        position: "top",
    });
};

export { showToast };
