import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Badge, Button, Flex, useColorMode, useStyleConfig } from '@chakra-ui/react';
import { MdLocationPin } from 'react-icons/md'
import { BsCartPlusFill, BsFillTelephoneFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'

import '../Navbar/Navbar.css'
import { divide } from 'lodash';
import Searchbar from '../Searchbar/Searchbar';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const [isLogIn, setIsLogIn] = useState<boolean>(false);
    return (
        <Flex direction={"column"} height="20vh" border={"2px solid grey"} className="Navbar">

            <Flex height={"10vh"} border="1px solid red" wrap={"wrap"} alignItems="center" justifyContent={"space-between"} padding="2px" className='info_shop'>


                <Flex border={"1px solid green"} width="25%" height={"100%"} alignItems="center" justifyContent={"center"} fontSize="2xl" fontWeight={"bold"} ml="2">
                    <h1>Rajeev Kirana Store</h1>
                </Flex>

                <Flex border={"1px solid green"} width="20%" height={"100%"} alignItems="center" justifyContent={"center"} fontSize="medium">
                    <Flex fontSize={"2xl"}><MdLocationPin /></Flex>
                    <h1 style={{ "fontWeight": "bold" }}>Location :&nbsp;</h1>
                    <a href="" style={{ "color": "#37E2D5" }}>SunCity Agra</a>
                </Flex>

                <Flex border={"1px solid green"} width="20%" height={"100%"} alignItems="center" justifyContent={"center"}>
                    <BsFillTelephoneFill />&nbsp; <a href="">+91 &nbsp;</a>  <a href="" style={{ "color": "blue" }}>9520065920</a>
                </Flex>


                <Flex border={"1px solid green"} width="25%" height={"100%"} alignItems="center" justifyContent={"flex-end"}>
                    <Flex alignItems={"center"} justifyContent="flex-end" width={"100%"}>
                        {!isLogIn
                            ? <Flex><Button colorScheme='blue' mr={5}>Sign Up</Button>
                                <Button colorScheme='blue' mr={5} onClick={() => setIsLogIn(true)}>Log In</Button></Flex>
                            : <Flex><Button colorScheme='blue' mr={5} onClick={() => setIsLogIn(false)}>Log Out</Button>
                                <Flex justifyContent={"center"} height="5vh" alignItems={"center"} borderRadius={5}>
                                    <Flex fontSize={"3xl"} mr={5}>
                                    <Flex mt={1}><BsCartPlusFill /></Flex>
                                        <Flex><Badge colorScheme='red' mt={-2} ml={-6} backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"5"} width="5" display={isLogIn ? "" : "none"}>0</Badge></Flex>
                                    </Flex>
                                    <Flex fontSize={"3xl"}><CgProfile /></Flex>
                                </Flex>
                            </Flex>
                        }



                    </Flex>
                </Flex>



                <Flex border={"1px solid green"} width="4%" height={"100%"} alignItems="center" justifyContent={"center"}>
                    <Button size={'sm'} onClick={() => toggleColorMode()}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>

            </Flex>

            <Flex height={"10vh"} border="1px solid blue" wrap={"wrap"}>
                <Searchbar isLogIn={isLogIn} />
            </Flex>


        </Flex>
    )
}

export default Navbar