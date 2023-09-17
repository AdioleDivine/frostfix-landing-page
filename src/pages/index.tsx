import Header from "@/components/layout/Header";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frost-Fix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" className="home-main">
        <Header />
      </Box>
    </>
  );
}
