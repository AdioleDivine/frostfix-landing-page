import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from '../core/Logo'
import NavLinks from '../core/NavLinks'
import ActionBtns from '../core/ActionBtns'

const Header = () => {
  return (
    <Flex justify={"space-around"} p={4} align={"center"} bg={'white'}>
        <Logo />
        <NavLinks />
        <ActionBtns />
    </Flex>
  )
}

export default Header