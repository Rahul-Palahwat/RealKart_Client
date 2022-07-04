import React, { useState } from 'react'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Badge, Button, Flex } from '@chakra-ui/react';
import { MdLocationPin } from 'react-icons/md'
import { BsCartPlusFill, BsFillTelephoneFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar';

const Navbar: React.FC = () => {
    // const { colorMode, toggleColorMode } = useColorMode();

    const [isLogIn, setIsLogIn] = useState<boolean>(false);
    return (
        <Flex direction={"column"} height="18vh" className="Navbar">

            <Flex height={"10vh"} wrap={"wrap"} alignItems="center" justifyContent={"space-between"} padding="2px" className='info_shop'>


                <Flex width="60%" height={"100%"} alignItems="center" justifyContent={"center"} fontSize="4xl" fontWeight={"bold"} ml="2">
                    <Flex cursor={"pointer"}> <a href="/">Rajeev Kirana Store</a> </Flex>
                </Flex>

                <Flex width="10%" height={"100%"} alignItems="center" justifyContent={"flex-end"} fontSize="medium">
                    <Flex fontSize={"2xl"} cursor={"pointer"}><MdLocationPin /></Flex>
                    <a href="/" style={{ "fontWeight": "bold" }}>Directions</a>
                </Flex>

                <Flex width="10%" height={"100%"} alignItems="center" justifyContent={"center"}>
                    <Flex cursor={"pointer"}><BsFillTelephoneFill /></Flex>&nbsp; <a href="/" style={{ "fontWeight": "bold" }}>Contact Us</a>
                </Flex>


                <Flex width="15%" height={"100%"} alignItems="center" justifyContent={"flex-end"}>
                    <Flex alignItems={"center"} justifyContent="flex-end" width={"100%"}>
                        {!isLogIn
                            ? <Flex><Button color={"white"} bgColor={"facebook.400"} className="items" mr={5}>Sign Up</Button>
                                <Button color={"white"} bgColor={"facebook.400"} className="items" mr={5} onClick={() => setIsLogIn(true)}>Log In</Button></Flex>
                            : <Flex><Button color={"white"} bgColor={"facebook.400"} className="items" mr={5} onClick={() => setIsLogIn(false)}>Log Out</Button>
                                <Flex justifyContent={"center"} height="5vh" alignItems={"center"} borderRadius={5}>
                                    <Flex fontSize={"3xl"} mr={5}>
                                    <Flex mt={1}><BsCartPlusFill /></Flex>
                                        <Flex justifyContent={"center"}><Badge colorScheme='orange' mt={-1} ml={-6} backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"4"} width="4" display={isLogIn ? "" : "none"}>1</Badge></Flex>
                                    </Flex>
                                    <Flex fontSize={"3xl"} mr={2}><CgProfile /></Flex>
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

            <Flex height={"8vh"} wrap={"wrap"}>
                <Searchbar />
            </Flex>


        </Flex>
    )
}

export default Navbar