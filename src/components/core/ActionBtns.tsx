import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const ActionBtns = () => {
  return (
    <Flex>
      <Button
        fontSize={"0.9rem"}
        backgroundColor={"#0B2545"} // Original background color
        color={"white"}
        px={5}
        paddingTop={"1.5rem"}
        paddingBottom={"1.5rem"}
        paddingLeft={"3.5rem"}
        paddingRight={"3.5rem"}
        _hover={{
          backgroundColor: "#123a6b", // Lighter shade on hover
          transform: "scale(1.05)", // Slightly enlarge the button
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" // Add a soft shadow
        }}
        transition="all 0.3s ease" // Smooth transition for hover effects
      >
        Waitlist
      </Button>
    </Flex>
  )
}

export default ActionBtns;