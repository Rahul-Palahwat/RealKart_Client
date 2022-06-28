import { Badge, Flex } from '@chakra-ui/react'
import React from 'react'

import {BsCartPlusFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'

import '../Searchbar/Searchbar.css'

interface Props{
  isLogIn: boolean
}

const Searchbar:React.FC<Props>= (props) => {

  const {isLogIn} = props;


  return (
    <Flex alignItems={"center"} justifyContent="center" height={"100%"} width={"100%"}>
        <Flex width={"40vw"}>
            <input type="text" placeholder='Search for products and items'/>
        </Flex>
        <Flex fontSize={"2xl"} ml={-8}>
            <BiSearchAlt2/>
        </Flex>
        
    </Flex>
  )
}

export default Searchbar