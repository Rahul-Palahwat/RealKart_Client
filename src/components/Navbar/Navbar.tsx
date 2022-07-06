import React, { useState } from 'react'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Badge, Button, Flex, IconButton } from '@chakra-ui/react';
import { BsCartPlus , BsPerson} from 'react-icons/bs'
// import { CgProfile } from 'react-icons/cg'

// this is to import redux store 
import { useAppSelector, useAppDispatch } from '../../redux'

import { logIn } from '../../redux/reducers/Login/index';

import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar';

const Navbar: React.FC = () => {
    const {isLogIn} = useAppSelector((state) => state.login)
    const dispatch = useAppDispatch();

    return (
        <Flex direction={"column"} height="18vh" className="Navbar">
            <Flex height={"10vh"} wrap={"wrap"} alignItems="center" justifyContent={"space-between"} padding="2px" className='info_shop'>
                <Flex width="68%" height={"100%"} alignItems="center" justifyContent={"flex-start"} fontSize="4xl" fontWeight={"bold"} ml="2" p={6}>
                    <Flex cursor={"pointer"}> <a href="/">Rajeev Kirana Store</a> </Flex>
                </Flex>
                {/* <Flex width="10%" height={"100%"} alignItems="center" justifyContent={"flex-end"} fontSize="medium">
                    <Flex fontSize={"2xl"} cursor={"pointer"}><MdLocationPin /></Flex>
                    <a href="/" style={{ "fontWeight": "bold" }}>Directions</a>
                </Flex> */}
                {/* <Flex width="10%" height={"100%"} alignItems="center" justifyContent={"flex-end"}>
                    <Flex cursor={"pointer"}><BsFillTelephoneFill /></Flex>&nbsp; <a href="/" style={{ "fontWeight": "bold" }}>Contact Us</a>
                </Flex> */}
                <Flex width="15%" height={"100%"} alignItems="flex-end" justifyContent={"flex-end"} pr={6}>
                    <Flex alignItems={"center"} justifyContent="flex-end" width={"100%"}>
                        {!isLogIn ? 
                            <Flex>
                                <Button color={"white"} bgColor={"#47B5FF"} mr={5} height={"6vh"}>Sign Up</Button>
                                <Button color={"white"} bgColor={"#47B5FF"} mr={5} height={"6vh"} onClick={() => {dispatch(logIn(true))}}>Log In</Button>
                            </Flex>
                        :   <Flex>
                                <Button color={"white"} bgColor={"#47B5FF"} height={"6vh"} mr={5} onClick={() => {dispatch(logIn(false))}}>Log Out</Button>
                                <Flex justifyContent={"center"} height="5vh" alignItems={"center"} borderRadius={5}>
                                    <Flex fontSize={"3xl"} mr={5}>
                                        <Flex mt={1}><IconButton aria-label='Search database' icon={<BsCartPlus />} /></Flex>
                                            <Flex justifyContent={"center"}>
                                                <Badge colorScheme='orange' zIndex={1} mt={"0.5rem"} ml={"-2.4rem"} backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"3"} width="3" display={isLogIn ? "" : "none"} fontSize="0.6rem">1</Badge>
                                            </Flex>
                                        </Flex>
                                    <Flex fontSize={"3xl"} mr={2}><IconButton aria-label='Search database' icon={<BsPerson />} /></Flex>
                                </Flex>
                            </Flex>
                        }
                    </Flex>
                </Flex>
                {/* <Flex width="4%" height={"100%"} alignItems="center" justifyContent={"center"}>
                    <Button size={'sm'} onClick={() => toggleColorMode()}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex> */}
            </Flex>
            <Flex height={"8vh"} wrap={"wrap"} bgColor="white">
                <Searchbar />
            </Flex>
        </Flex>
    )
}

export default Navbar