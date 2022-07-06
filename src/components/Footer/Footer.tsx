import { PhoneIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

import './Footer.css'

const Footer: React.FC = () => {
    return (
        <>
            <Flex height={"10vh"} bgColor="black" color={"white"} alignItems="center" justifyContent={"space-between"}>

                <Flex width={"15vw"} alignItems="center" justifyContent={"space-around"} ml={4}>
                    <Flex fontSize="1.5rem">Pensive-Kart</Flex>
                    <IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<PhoneIcon />} />
                </Flex>
                <Flex direction={"column"} justifyContent="center">
                    <Flex>&copy;2022 All Rights Reserved @RealPensive</Flex>
                    <Flex alignItems={"center"} justifyContent="center">Privacy Policy &nbsp; | &nbsp; Terms</Flex>
                </Flex>
                <Flex justifyContent={"space-around"} width="15vw" mr={2}>
                <IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<FaFacebook />} />
                <IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<FaInstagram />} />
                <IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<FaTwitter />} />
                <IconButton aria-label='Search database' variant={"ghost"} colorScheme="cyan" icon={<FaLinkedin />} />
                </Flex>

            </Flex>

        </>
    )
}

export default Footer