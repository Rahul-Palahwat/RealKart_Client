import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react';
// for route info 
import { useLocation } from 'react-router-dom';
import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar';
import MainNav from '../MainNav/MainNav';
const Navbar: React.FC = () => {
    const location = useLocation();
    console.log("location",location)
    return (
        <Flex direction={"column"} height={location.pathname !== '/cart' ? location.pathname !== '/profile' ? location.pathname !== '/item' ? "26vh" : "12vh" : "12vh" : "12vh"} className="Navbar">
            <MainNav />
            {location.pathname !== '/cart'? location.pathname !== '/profile' ? location.pathname !== '/item' ? <Flex height={"14vh"} wrap={"wrap"} bgColor="white">
                <Searchbar />
            </Flex> :"" : "" :  ""}
        </Flex>
    )
}
export default Navbar