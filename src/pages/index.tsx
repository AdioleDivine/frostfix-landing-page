import { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HowItWorks from "@/components/layout/HowItWorks";
import About from "@/components/layout/About";
import Features from "@/components/layout/Features";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/core/scrollToTop"; // Import ScrollToTop component

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Horai</title>
                <meta
                    name="description"
                    content="Horai connects homeowners with reliable contracting services and allows contractors to take on jobs in their area. Book a service easily or find local snow removal jobs on-demand with Horai."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            {/* Wrapping the whole content in a Box with a snow background */}

                <Header />
                <Hero />
                {/* Add id attributes to allow navigation to scroll to these sections */}
                <Box id="how-it-works">
                    <HowItWorks />
                </Box>
                <Box id="about">
                    <About />
                </Box>
                <Box id="features">
                    <Features />
                </Box>
                <Box id="contact">
                    <GetInTouch />
                </Box>
                <Footer />
                {/* Scroll to Top button */}
                <ScrollToTop /> {/* Scroll to Top button added at the bottom */}
        </>
    );
};

export default Home;
