import { Flex, Input } from '@chakra-ui/react'
import React from 'react'

import {BiSearchAlt2} from 'react-icons/bi'

import '../Searchbar/Searchbar.css'



const Searchbar:React.FC= () => {


  return (
    <Flex alignItems={"center"} justifyContent="center" height={"100%"} width={"100%"} bgColor="white" m={2} mt={5}>
        <Flex width={"40vw"} bgColor="white" alignItems={"center"} borderRadius={5}>
        <Flex width={"100%"}>
            <Input type="text" placeholder='Search for products and items'/>
        </Flex>
        <Flex fontSize={"2xl"} ml={-8}>
            <BiSearchAlt2 cursor={"pointer"}/>
        </Flex>
        </Flex>
        
    </Flex>
  )
}

export default Searchbar