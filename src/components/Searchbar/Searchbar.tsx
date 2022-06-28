import { Badge, Flex } from '@chakra-ui/react'
import React from 'react'

import {BsCartPlusFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'

import '../Searchbar/Searchbar.css'

const Searchbar:React.FC = () => {
  return (
    <Flex alignItems={"center"} justifyContent="center" height={"100%"} width={"100%"}>
        <Flex width={"40vw"}>
            <input type="text" placeholder='Search for products and items'/>
        </Flex>
        <Flex fontSize={"2xl"} ml={-8}>
            <BiSearchAlt2/>
        </Flex>
        <Flex fontSize={"3xl"} ml={5}>
            
            <Flex><BsCartPlusFill/></Flex>
            <Flex><Badge colorScheme='red' mt={-3} ml={-6} backgroundColor={"red.500"} borderRadius="5px 5px 20px 20px" height={"5"} width="5">0</Badge></Flex>
            
        </Flex>
    </Flex>
  )
}

export default Searchbar