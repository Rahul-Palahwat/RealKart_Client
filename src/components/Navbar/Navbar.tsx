import React, { useState } from 'react'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Badge, Button, Flex, IconButton } from '@chakra-ui/react';
import { BsCartPlus, BsPerson } from 'react-icons/bs'
// import { CgProfile } from 'react-icons/cg'

import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';

const Navbar: React.FC = () => {

    return (
        <Flex direction={"column"} height="26vh" className="Navbar">
            <Flex height={"12vh"} bgColor="white">
                <Footer />
            </Flex>
            <Flex height={"14vh"} wrap={"wrap"} bgColor="white">
                <Searchbar />
            </Flex>

        </Flex>
    )
}

export default Navbar