import { background, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer:React.FC = () => {
  return (
    <Flex height={"30vh"} backgroundColor="black" color={"white"} alignItems="center" justifyContent={"center"} direction="column">
        <Flex height={"25vh"} border="1px solid white" width={"100%"} justifyContent="center">Hello from Footer</Flex>
        <Flex height={"5vh"} border="1px solid white" width={"100%"} justifyContent="center" alignItems={"center"}>All Rights Reserved &copy;Pensive2022</Flex>
    </Flex>
  )
}

export default Footer