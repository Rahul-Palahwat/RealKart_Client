import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react';
import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar';
import MainNav from '../MainNav/MainNav';
const Navbar: React.FC = () => {
    return (
        <Flex direction={"column"} height="26vh" className="Navbar">
            <Flex height={"12vh"} bgColor="white">
                <MainNav />
            </Flex>
            <Flex height={"14vh"} wrap={"wrap"} bgColor="white">
                <Searchbar />
            </Flex>
        </Flex>
    )
}
export default Navbar